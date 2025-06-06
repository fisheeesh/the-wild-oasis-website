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
        <section className='py-24 space-y-12'>
            <div className='flex flex-col items-center justify-center space-y-8'>
                <h1 className='sm:text-5xl text-4xl uppercase tracking-wide'>Hotel Facilities</h1>
                <p className='max-w-3xl text-xl text-center'>
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
            </div>
            {/* <div className='flex flex-wrap gap-x-36 gap-y-8 items-center justify-center max-w-5xl mx-auto'> */}
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
        </section>
    )
}
