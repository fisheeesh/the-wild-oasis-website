"use server"

import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase"

//$ server actions can even be called from client components and will also be executed on the server.

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
//$ It is a common practise not to use try/catch in server actions. Just simply throw the error in the func body and they will be cath by the closet boudary.
export const updateGuestAction = async (formData) => {
    const session = await auth()
    if (!session) throw new Error('You must be logged in.')

    const nationalID = formData.get('nationalID')
    //? Actual value: Myanmar%https://flagcdn.com/mm.svg
    const [nationality, countryFlag] = formData.get('nationality').split('%')

    if (!/^[A-Za-z0-9]{6,12}$/.test(nationalID)) throw new Error('Please provide a valid national ID number.')

    const updatedData = { nationality, nationalID, countryFlag }

    const { data, error } = await supabase
        .from('guest')
        .update(updatedData)
        .eq('id', session.user.guestId)

    if (error) throw new Error('Guest could not be updated');
}

