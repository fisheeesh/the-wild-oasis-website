import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import parking from '@/public/car.webp';
import breakfast from '@/public/breakfast.webp';
import gym from '@/public/gym.webp';
import pool from '@/public/pool.webp';
import safe from '@/public/safe.webp';
import spa from '@/public/spa.webp';
import wifi from '@/public/wifi.webp';
import workspace from '@/public/workspace.webp';

const facilities = [
    { src: parking, name: 'Parking' },
    { src: breakfast, name: 'Breakfast' },
    { src: gym, name: 'Gym' },
    { src: pool, name: 'Swimming Pool' },
    { src: safe, name: 'Safe' },
    { src: spa, name: 'Spa' },
    { src: wifi, name: 'Wifi' },
    { src: workspace, name: 'Workspace' },
];

export default function HotelFacilities() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <section ref={ref} className="py-20 space-y-20">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center space-y-8">
                <h1 className="sm:text-5xl text-4xl uppercase tracking-wide font-bold">Hotel Facilities</h1>
                <p className="max-w-3xl text-xl text-center">
                    Enjoy modern comforts including Wi-Fi, gym, spa, and an outdoor pool. From fine dining to a tennis court, every facility is designed to elevate your stay.
                </p>
            </div>

            {/* Facilities Icons */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:flex md:flex-wrap md:gap-x-36 md:gap-y-8 md:items-center md:justify-center md:max-w-5xl md:mx-auto">
                {facilities.map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: i % 2 === 0 ? -50 : 50 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, delay: i * 0.15 },
                            },
                        }}
                        className="flex flex-col justify-center items-center gap-4"
                    >
                        <Image src={item.src} alt="" className="invert" width={60} height={60} />
                        <p className="text-lg font-medium">{item.name}</p>
                    </motion.div>
                ))}
            </div>            
        </section>
    );
}