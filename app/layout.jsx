import React from 'react'
import '@/app/_styles/globals.css'
import { Josefin_Sans } from 'next/font/google'
import Header from './_components/Header'

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
      <body className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased ${josefin.className}`}>
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
