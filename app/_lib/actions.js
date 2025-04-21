"use server"

import { isPast } from "date-fns"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth, signIn, signOut } from "./auth"
import { getBookings } from "./data-service"
import { supabase } from "./supabase"

/**
 * $ server actions can even be called from client components and will also be executed on the server.
 * $ It is a common practise not to use try/catch in server actions. Just simply throw the error in the func body and they will be cath by the closet boudary.
 */

export const signInAction = async () => {
    //? After user successfully sign in, redirect to account page.
    await signIn('google', {
        redirectTo: '/account'
    })
}

export const signOutAction = async () => {
    await signOut({
        redirectTo: '/'
    })
}

//? In order to work formData, each of the input need name attribute.
export const updateGuestAction = async (formData) => {
    const session = await auth()
    if (!session) throw new Error('You must be logged in.')

    const nationalID = formData.get('nationalID')
    //# Actual value: Myanmar%https://flagcdn.com/mm.svg
    const [nationality, countryFlag] = formData.get('nationality').split('%')

    if (!/^[A-Za-z0-9]{6,12}$/.test(nationalID)) throw new Error('Please provide a valid national ID number.')

    const updatedData = { nationality, nationalID, countryFlag }

    const { error } = await supabase
        .from('guest')
        .update(updatedData)
        .eq('id', session.user.guestId)

    if (error) throw new Error('Guest could not be updated');

    //# revalidate cache data after successfuly updated
    revalidatePath("/account/profile")
}

export const deleteReservationAction = async (bookingId) => {
    const session = await auth()
    if (!session) throw new Error('You must be logged in.')

    // await new Promise(res => setTimeout(res, 2000))
    // throw new Error()

    //# Check if the bookingId belongs to the logged in user
    const bookings = await getBookings(session.user.guestId)
    const guestBookingIds = bookings.map(booking => booking.id)

    if (!guestBookingIds.includes(bookingId)) throw new Error('You are not allowed to delete this booking.')

    const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

    if (error) {
        throw new Error('Booking could not be deleted');
    }

    revalidatePath('/account/reservations')
}

export const updateReservationAction = async (formData) => {
    const session = await auth()
    if (!session) throw new Error('You must be logged in.')

    const numGuest = formData.get('numGuest')
    const observations = formData.get('observations').slice(0, 1000)
    //# formData stores everyting as string
    const bookingId = Number(formData.get('bookingId'))
    const startDate = formData.get('startDate')

    const bookings = await getBookings(session.user.guestId)
    const guestBookingIds = bookings.map(booking => booking.id)

    if (!guestBookingIds.includes(bookingId)) throw new Error('You are not allowed to update this booking.')
    if (isPast(new Date(startDate))) throw new Error("Updating past reservations is not allowed.");

    const updatedData = { numGuest, observations }

    const { error } = await supabase
        .from('bookings')
        .update(updatedData)
        .eq('id', bookingId)

    if (error) {
        throw new Error('Booking could not be updated');
    }

    redirect('/account/reservations?updated=true')
}

// curl 'http://localhost:3000/account/reservations' \
//   -H 'Accept: text/x-component' \
//   -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,my;q=0.7' \
//   -H 'Connection: keep-alive' \
//   -H 'Content-Type: text/plain;charset=UTF-8' \
//   -b '__next_hmr_refresh_hash__=597b100d1094b8dea6fa7dcb754308494dba11f4c7c8c32b; authjs.csrf-token=f296ab4c1d94233af75974af866bf90eca1e7c2d6335df1e9bcd455c008b3bff%7C080fcba794ebb5a5fc915e44add9dd37c08c5cb4b3de598bd153d681e078b470; authjs.callback-url=http%3A%2F%2Flocalhost%3A3000%2Faccount; __next_hmr_refresh_hash__=0136a2a4120d36ae0f1a8f0ea3d8f81a28ab34e64cf571ed; authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiSUpMZndzanEwMzFuVWE0TVYtRGpLdmdYaWtsYUdMdHBGaTl0T2haWGJRc0haNVRSX2RwWGgtUmdQYm5ER3FRczRRM0laanM4akk4amVvQUVpdmdwbmcifQ..4elHeWspGS-hI7jhx78fTg.5cRcaS3HCkUIU-vn2Cii5PYN8O6oxBVCNdDrRy742bKO2-amWtcldrEz4jqgPt_0pNEFzXuFV0Lc9IKoA12uUhjiu0NPk1gMkVwNz0Hu6761EWJcz2jj2c4YfE_r4YPPCg2dFIkaWlk2r_EjKFp_z2J85od5wrTpkRV7iZcvAXK3AySb0yPWJDXUhXh9ir3cSNkiZxGpFBv6UZs7pmIJIVdJzIqSOpeBnX1t3XR4ZX8l_gqDXYKb-6dLDQNti7bLglXpwGzWRjh6i8STFfVQ22D5jLwb52PuCZqhMFMC69H-mH71dPqgSbDS1pM8wLEd89kCEJcmgdnj05DaHOZNVHaExYsOepU-4QQihPrGk6cuK8CDZibZreK4bLqHCz1qOMu0AFd7iOJZnaqanNvGUA.VZa2d8JvpiJ6NILvaw4uvpKPa7zcovrLe8rhJUlcIuk' \
//   -H 'Next-Action: 7f6e40fb3e66d994c1339a0c98adb7b173658f542b' \
//   -H 'Next-Router-State-Tree: %5B%22%22%2C%7B%22children%22%3A%5B%22account%22%2C%7B%22children%22%3A%5B%22reservations%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2Faccount%2Freservations%22%2C%22refresh%22%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%2Cnull%2Cnull%2Ctrue%5D' \
//   -H 'Origin: http://localhost:3000' \
//   -H 'Referer: http://localhost:3000/account/reservations' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Site: same-origin' \
//   -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36' \
//   -H 'sec-ch-ua: "Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   --data-raw '[460]'

// curl 'http://localhost:3000/account/reservations/edit/464' \
//   -H 'Accept: text/x-component' \
//   -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,my;q=0.7' \
//   -H 'Connection: keep-alive' \
//   -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryP6bhiQB9RXLeTWjM' \
//   -b '__next_hmr_refresh_hash__=794877a4bc48c85b2841f8d9e4d60f9c62357935f1640452; __next_hmr_refresh_hash__=b412068c5e5b19c3e8372091b7ba2b5962357935f1640452; authjs.csrf-token=54e878c47ad806d2cf896ced002df8275e6ec7187ef40b2366ef5c9115f00900%7Ca0c5091c7fdd0954819a867e4094524ca34905283d3e2a5f113afb640227f8f2; authjs.callback-url=http%3A%2F%2Flocalhost%3A3000; authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiSUpMZndzanEwMzFuVWE0TVYtRGpLdmdYaWtsYUdMdHBGaTl0T2haWGJRc0haNVRSX2RwWGgtUmdQYm5ER3FRczRRM0laanM4akk4amVvQUVpdmdwbmcifQ..6Sw81W41zNo4mIJhFEj9nQ.edIqZ6z_x-Vpn080Tx8RGcsJaaPIjtH0VxwAtd9XKTM75KZJM7ajUEUZZ-Llo1N-TxVs5j8l9laTS3y38x9zxS-kUQOnmHURoKPL-KVTDS3NtihWOGywBNvXjD37u-zRQTVUgpRlof4S6fhMaIA3J2jfPY5tvLd7blQkI5D27OYOsPHBGUP_ysCKHaFGmun5GcqubkTP9cVGyQ9p3EBnIp4pWX4PeON5_JKQ7sz_eqGeXm06zVypwVcH62nfVrWouA8P3KUeR9dHWz4B0G62my6xQ1reQf7vpzN50R1kXVpu-ObeWoC9Khsn0mWC7TNioPCV8C30xaFcPLYWba85ntyi5f5NAGpa8CaUscrdmmNvmgVJEwPWH97ixAeCdWPm68PG1uAHA3jCXVgOidMUyw.YTdVxLYcAf1JrlKgvCcM3XA38TEkAfsF9EuXNoyG03w; __next_hmr_refresh_hash__=b00971b7abe11db577a9ba95c120e51762357935f1640452' \
//   -H 'Next-Action: 7f84f84bd50b05b31f6ddc283cede15e8723bab30b' \
//   -H 'Next-Router-State-Tree: %5B%22%22%2C%7B%22children%22%3A%5B%22account%22%2C%7B%22children%22%3A%5B%22reservations%22%2C%7B%22children%22%3A%5B%22edit%22%2C%7B%22children%22%3A%5B%5B%22reservationId%22%2C%22464%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2Faccount%2Freservations%2Fedit%2F464%22%2C%22refresh%22%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D' \
//   -H 'Origin: http://localhost:3000' \
//   -H 'Referer: http://localhost:3000/account/reservations/edit/464' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Site: same-origin' \
//   -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36' \
//   -H 'sec-ch-ua: "Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   --data-raw $'------WebKitFormBoundaryP6bhiQB9RXLeTWjM\r\nContent-Disposition: form-data; name="1_numGuest"\r\n\r\n2\r\n------WebKitFormBoundaryP6bhiQB9RXLeTWjM\r\nContent-Disposition: form-data; name="1_observations"\r\n\r\nGf nae tu tu lr ml\r\n------WebKitFormBoundaryP6bhiQB9RXLeTWjM\r\nContent-Disposition: form-data; name="1_bookingId"\r\n\r\n464\r\n------WebKitFormBoundaryP6bhiQB9RXLeTWjM\r\nContent-Disposition: form-data; name="0"\r\n\r\n["$K1"]\r\n------WebKitFormBoundaryP6bhiQB9RXLeTWjM--\r\n'

