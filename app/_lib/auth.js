import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const authConfig = {
    providers: [Google],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user
        }
    },
    pages: {
        signIn: '/login'
    }
}

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST }
} = NextAuth(authConfig)