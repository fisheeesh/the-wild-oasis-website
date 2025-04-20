"use server"

import { signIn, signOut } from "./auth"

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