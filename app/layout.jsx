import React from 'react'
import '@/app/_styles/globals.css'
import Navigation from '@/app/_components/Navigation'
import Logo from '@/app/_components/Logo'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: "%s | The Wild Oasis",
    default: 'Welcome | The Wild Oasis'
  },
  //? for SEO, page description like a meta tag in the head
  description: "Luxurious Cabins Hotel, located in the heart of the Thailand Chiang Rai, surrounded by beautiful mountains and dark forests.",

}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className}`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
