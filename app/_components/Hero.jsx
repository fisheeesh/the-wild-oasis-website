import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bg from '@/public/bg.png'

export default function Hero() {
    return (
        <main className="pt-32 w-full h-screen">
            <Image src={bg} quality={80} fill className="object-cover object-top" placeholder="blur" alt="Mountains and forests with two cabins" />

            <div className="relative z-10 text-center">
                <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-primary-50 mb-10 tracking-tight font-normal">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/cabins"
                    className="bg-accent-500 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-primary-800 duration-300 text-lg font-semibold hover:bg-accent-600 transition-all">
                    Explore luxury cabins
                </Link>
            </div>
        </main>
    )
}
