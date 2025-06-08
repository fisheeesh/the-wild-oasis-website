import Image from 'next/image'
import React from 'react'
import parking from '@/public/car.webp'
import breakfast from '@/public/breakfast.webp'
import gym from '@/public/gym.webp'
import pool from '@/public/pool.webp'
import safe from '@/public/safe.webp'
import spa from '@/public/spa.webp'
import wifi from '@/public/wifi.webp'
import workspace from '@/public/workspace.webp'
import restaurant from '@/public/restaurant.webp'
import spool from '@/public/spool.webp'
import tennis from '@/public/tennis.webp'
import hspa from '@/public/hspa.webp'

const facilities = [
    {
        src: parking,
        name: 'Parking'
    },
    {
        src: breakfast,
        name: 'Breakfast'
    },
    {
        src: gym,
        name: 'Gym'
    },
    {
        src: pool,
        name: 'Swimming Pool'
    },
    {
        src: safe,
        name: 'Safe'
    },
    {
        src: spa,
        name: 'Spa'
    },
    {
        src: wifi,
        name: 'Wifi'
    },
    {
        src: workspace,
        name: 'Workspace'
    },
]

export default function HotelFacilities() {
    return (
        <section className='py-20 space-y-12'>
            <div className='flex flex-col items-center justify-center space-y-8'>
                <h1 className='sm:text-5xl text-4xl uppercase tracking-wide font-bold'>Hotel Facilities</h1>
                <p className='max-w-3xl text-xl text-center'>
                    Enjoy modern comforts including Wi-Fi, gym, spa, and an outdoor pool. From fine dining to a tennis court, every facility is designed to elevate your stay.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-y-6 gap-x-4 md:flex md:flex-wrap md:gap-x-36 md:gap-y-8 md:items-center md:justify-center md:max-w-5xl md:mx-auto'>
                {
                    facilities.map(x => (
                        <div key={x.name} className='flex flex-col justify-center items-center gap-4'>
                            <Image src={x.src} alt="" className='invert' width={60} height={60} />
                            <p className='text-lg font-medium'>{x.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center mt-20'>
                <div className='relative'>
                    <Image src={restaurant} alt='restaurant' className='object-cover object-center w-full h-[500px]' />
                    <div className='absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide'>Restaurant</div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='relative'>
                        <Image src={tennis} alt='restaurant' className='object-cover object-center w-full md:w-[400px] h-[270px]' />
                        <div className='absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide'>Tennis court</div>
                    </div>
                    <div className='relative'>
                        <Image src={spool} alt='restaurant' className='object-cover object-center w-full md:w-[400px] h-[270px]' />
                        <div className='absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide'>Swimming Pool</div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={hspa} alt='restaurant' className='object-cover object-center w-full h-[500px]' />
                    <div className='absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide'>Spa</div>
                </div>
            </div>
        </section>
    )
}
