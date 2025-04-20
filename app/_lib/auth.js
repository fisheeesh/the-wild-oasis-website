import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        /**
         * ? Check whether, user is authorized or not.
         * ? This callback will be called whenever a user tries to access a protected route which we handle in middleware.js
         */
        authorized({ auth, request }) {
            return !!auth?.user
        }
    }
}

export const { auth, handlers: { GET, POST } } = NextAuth(authConfig)