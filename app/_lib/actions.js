"use server"

import { signIn } from "./auth"

export const signInAction = async () => {
    //? After user successfully sign in, redirect to account page.
    await signIn('google', {
        redirectTo: '/account'
    })
}