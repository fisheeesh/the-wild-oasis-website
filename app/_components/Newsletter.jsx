import { Send } from 'lucide-react'
import React from 'react'

export default function Newsletter() {
    return (
        <section className='my-32 flex flex-col space-y-8 justify-center items-center'>
            <h1 className='text-4xl sm:text-5xl uppercase tracking-wide'>NewsLetter</h1>
            <p className='text-xl font-medium text-center'>Subscribe the newsletter to get updated to news and promotions!</p>
            <div className='flex items-center flex-col md:flex-row gap-4'>
                <input type="text" placeholder='Email Address' className='px-4 w-[250px] lg:w-[350px] py-3 focus:outline-0 focus:border-accent-500 duration-300 transition border border-primary-800' />
                <button className='flex items-center gap-4 hover:bg-accent-500 hover:border-accent-500 duration-300 transition cursor-pointer px-4 py-3 border border-primary-800'>
                    <span>Subscribe</span>
                    <Send />
                </button>
            </div>
        </section>
    )
}
