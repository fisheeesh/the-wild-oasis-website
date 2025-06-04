import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createGuest, getGuest } from "./data-service"

export const authConfig = {
    providers: [Google],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user
        },
        //? This process runs before the actual sign in process.
        async signIn({ user, account, profile }) {
            try {
                const existingGuest = await getGuest(user.email)

                //? If the guest does not exist, create a new one
                if (!existingGuest) await createGuest({
                    email: user.email,
                    fullName: user.name
                })

                return true
            }
            catch (err) {
                return false
            }
        },
        /**
         * ? Since we need guestId to manipulate the bookings and reservations, it is a good idea to have one central place to get it.
         * $ This process runs after the sign in process. So dun forget to add await for getGuest in singIn callback process.
         * ? We can use the session callback to add custom properties to the session object.
         * ? This is the perfect place to add the guestId to the session object.
         */
        async session({ session, user }) {
            const guest = await getGuest(session.user.email)
            session.user.guestId = guest.id

            return session
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