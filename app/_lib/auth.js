import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ]
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }