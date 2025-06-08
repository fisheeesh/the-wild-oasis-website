"use client"

import { useInView, motion, } from 'framer-motion'
import React, { useRef } from 'react'
import image2 from '@/public/about-2.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Section2() {
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
                className="col-span-3 lg:col-span-2 aspect-square relative"
            >
                <Image
                    src={image2}
                    placeholder="blur"
                    quality={80}
                    alt="Family that manages The Wild Oasis"
                />
            </motion.div>

            {/* Right */}
            <motion.div
                ref={rightRef}
                initial={{ x: 80, opacity: 0 }}
                animate={inViewRight ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="col-span-3"
            >
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    Managed by our family since 1962
                </h1>

                <div className="space-y-8">
                    <p>
                        Since 1962, The Wild Oasis has been a cherished family-run retreat, started by our grandparents and nurtured with love through generations.
                    </p>
                    <p>
                        We blend timeless mountain beauty with warm hospitality. You’re not just a guest here — you’re part of the family.
                    </p>

                    <div>
                        <Link
                            href="/cabins"
                            className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                        >
                            Explore our luxury cabins
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
