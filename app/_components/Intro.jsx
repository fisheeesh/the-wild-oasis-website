import intro2 from '@/public/intro-2.webp';
import intro1 from '@/public/intro-1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const leftControls = useAnimation();
    const rightControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            leftControls.start({ opacity: 1, x: 0 });
            rightControls.start({ opacity: 1, x: 0 });
        }
    }, [isInView, leftControls, rightControls]);

    return (
        <section
            ref={ref}
            className="relative z-[10] mt-10 flex gap-16 lg:gap-0 lg:items-center flex-col lg:flex-row mb-12 xl:mb-[400px]"
        >
            {/* Left content */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={leftControls}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-16 w-full lg:w-1/2"
            >
                <div className="flex flex-col md:items-center md:flex-row md:gap-12 gap-6">
                    <div className="flex items-baseline gap-6">
                        <h1 className="text-7xl font-semibold">5</h1>
                        <span className="text-2xl tracking-[0.3rem]">stars</span>
                    </div>
                    <div className="flex items-baseline gap-6">
                        <h1 className="text-7xl font-semibold">8</h1>
                        <span className="text-2xl tracking-[0.3rem]">cabins</span>
                    </div>
                </div>
                <p className="tracking-widest text-3xl font-medium lg:max-w-2xl">
                    Our hotel is located in the heart of the New Forrest. A five stars lifestyle surrounded by the forest.
                </p>
                <Link
                    href="/about"
                    className="uppercase pb-3 border-b border-b-primary-800 font-bold text-sm hover:border-primary-300 transition duration-300"
                >
                    More about us
                </Link>
            </motion.div>

            {/* Right image */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={rightControls}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex lg:justify-end w-full lg:w-1/2 pr-10"
            >
                <Image
                    src={intro2}
                    className="rounded-tl-4xl rounded-br-4xl"
                    alt="hero image"
                    height={500}
                />
            </motion.div>

            {/* Static image */}
            <div className="absolute xl:block hidden bottom-0 right-0 pr-10 top-[350px]">
                <Image
                    src={intro1}
                    className="rounded-tl-4xl rounded-br-4xl"
                    alt="hero image"
                    height={500}
                />
            </div>
        </section>
    );
}