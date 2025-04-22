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

    redirect('/account/reservations')
}

export const createReservationAction = async (bookingData, formData) => {
    const session = await auth()
    if (!session) throw new Error('You must be logged in.')

    const newBooking = {
        ...bookingData,
        guestId: session.user.guestId,
        numGuest: Number(formData.get('numGuest')),
        observations: formData.get('observations').slice(0, 1000),
        extrasPrice: 0,
        totalPrice: bookingData.cabinPrice,
        status: 'unconfirmed',
        hasBreakfast: false,
        isPaid: false
    }

    const { error } = await supabase
        .from('bookings')
        .insert([newBooking])

    if (error) {
        throw new Error('Booking could not be created');
    }

    revalidatePath(`/cabins/${bookingData.cabinId}`)
    redirect('/cabins/thankyou')
}