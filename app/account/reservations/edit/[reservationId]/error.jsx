"use client"

import Link from "next/link";

export default function error({ error }) {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
            <p className='text-lg text-red-600 italic'>{error.message}</p>

            <Link
                href='/account/reservations'
                className='inline-block bg-accent-500 duration-200 transition-colors text-primary-800 px-6 py-3 text-lg cursor-pointer hover:bg-accent-600'>
                Go back to reservations
            </Link>
        </main>
    );
}
