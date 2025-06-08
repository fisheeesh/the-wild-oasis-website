"use client"

import { useInView, motion, } from 'framer-motion'
import React, { useRef } from 'react'
import image1 from '@/public/about-1.jpg'
import Image from 'next/image'

export default function Section1({ cabins }) {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const inViewLeft = useInView(leftRef, { once: true, margin: "-100px" })
    const inViewRight = useInView(rightRef, { once: true, margin: "-100px" })

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-24 gap-y-12 text-lg items-center">
            {/* Left */}
            <motion.div
                ref={leftRef}
                initial={{ x: -80, opacity: 0 }}
                animate={inViewLeft ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="col-span-3"
            >
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    Welcome to The Wild Oasis
                </h1>

                <div className="space-y-8">
                    <p>
                        Where nature's beauty and comfortable living blend seamlessly. Hidden away in the heart of the Italian Dolomites, this is your paradise away from home.
                    </p>
                    <p>
                        Our {cabins} luxury cabins provide a cozy base, but the real freedom and peace you'll find in the surrounding mountains. Wander through lush forests, breathe in the fresh air, and stargaze from your hot tub.
                    </p>
                    <p>
                        This is where memorable moments are made, surrounded by nature's splendor. It's a place to slow down and feel the joy of being together.
                    </p>
                </div>
            </motion.div>

            {/* Right */}
            <motion.div
                ref={rightRef}
                initial={{ x: 80, opacity: 0 }}
                animate={inViewRight ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="col-span-3 lg:col-span-2 bg-accent-100 w-full"
            >
                <Image
                    src={image1}
                    placeholder="blur"
                    quality={80}
                    alt="Family sitting around a fire pit in front of cabin"
                />
            </motion.div>
        </div>
    );
}
