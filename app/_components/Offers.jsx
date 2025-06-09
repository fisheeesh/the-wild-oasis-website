import cabin1 from '@/public/cabin001.jpg';
import cabin3 from '@/public/cabin003.jpg';
import cabin5 from '@/public/cabin005.jpg';
import { BedDouble, Users } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const cabins = [
    {
        name: 'Cabin 001',
        route: '/cabins/87',
        image: cabin1,
        price: '450',
        guests: 'Max 2 Guests',
        bedType: '1 King Bed',
    },
    {
        name: 'Cabin 003',
        route: '/cabins/89',
        image: cabin3,
        price: '300',
        guests: 'Max 4 Guests',
        bedType: '2 Double Beds',
    },
    {
        name: 'Cabin 005',
        route: '/cabins/91',
        image: cabin5,
        price: '350',
        guests: 'Max 6 Guests',
        bedType: '2 King Beds',
    },
];

export default function Offers() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-200px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.25,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section ref={ref} className='py-20 space-y-8'>
            <div className='flex justify-between items-center gap-2'>
                <h1 className='sm:text-5xl text-4xl uppercase tracking-wide font-bold'>Cabins Availability</h1>
                <Link href={'/cabins'} type='button' className='hidden sm:block uppercase border px-4 py-3 hover:bg-accent-500 hover:text-primary-100 hover:border-accent-500 duration-200 transition'>
                    All Cabins
                </Link>
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                <motion.div
                    className='flex flex-col space-y-4'
                    custom={0}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                >
                    <Link href={'/cabins/87'} className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={cabin1}
                            alt={'Cabin-001'}
                            className='object-cover object-center'
                        />
                    </Link>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Cabin 001</h1>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-2 text-sm'>
                            <BedDouble size={20} /> 1 King Bed
                        </div>
                        <div className='flex items-center gap-2'>
                            <Users size={20} /> Max 2 Guests
                        </div>
                    </div>
                    <Link href={'/cabins/87'} className='uppercase sm:text-lg w-fit'>See Detail</Link>
                    <hr className='border-primary-800' />
                    <div className='flex items-center justify-between gap-2'>
                        <div>
                            Start from <br />
                            <span className='font-bold text-xl sm:text-2xl uppercase'>$450</span> <span className='text-sm'>/ night</span>
                        </div>
                        <Link href={'/cabins/87'} className='uppercase sm:text-lg  border border-primary-800 px-4 py-3 hover:bg-accent-500 hover:border-accent-500 hover:text-primary-100 duration-200 transition'>
                            Check Availability
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    className='flex flex-col space-y-4'
                    custom={1}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                >
                    <Link href={'/cabins/89'} className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={cabin3}
                            alt={'Cabin-003'}
                            className='object-cover object-center'
                        />
                    </Link>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Cabin 003</h1>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-2 text-sm'>
                            <BedDouble size={20} /> 2 Double Beds
                        </div>
                        <div className='flex items-center gap-2'>
                            <Users size={20} /> Max 4 Guests
                        </div>
                    </div>
                    <Link href={'/cabins/87'} className='uppercase sm:text-lg w-fit'>See Detail</Link>
                    <hr className='border-primary-800' />
                    <div className='flex items-center justify-between gap-2'>
                        <div>
                            Start from <br />
                            <span className='font-bold text-xl sm:text-2xl uppercase'>$300</span> <span className='text-sm'>/ night</span>
                        </div>
                        <Link href={'/cabins/89'} className='uppercase sm:text-lg  border border-primary-800 px-4 py-3 hover:bg-accent-500 hover:border-accent-500 hover:text-primary-100 duration-200 transition'>
                            Check Availability
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    className='flex flex-col space-y-4'
                    custom={2}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                >
                    <Link href={'/cabins/91'} className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={cabin5}
                            alt={'Cabin-005'}
                            className='object-cover object-center'
                        />
                    </Link>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Cabin 005</h1>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-2 text-sm'>
                            <BedDouble size={20} /> 2 King Beds
                        </div>
                        <div className='flex items-center gap-2'>
                            <Users size={20} /> Max 6 Guests
                        </div>
                    </div>
                    <Link href={'/cabins/891'} className='uppercase sm:text-lg w-fit'>See Detail</Link>
                    <hr className='border-primary-800' />
                    <div className='flex items-center justify-between gap-2'>
                        <div>
                            Start from <br />
                            <span className='font-bold text-xl sm:text-2xl uppercase'>$350</span> <span className='text-sm'>/ night</span>
                        </div>
                        <Link href={'/cabins/91'} className='uppercase sm:text-lg  border border-primary-800 px-4 py-3 hover:bg-accent-500 hover:border-accent-500 hover:text-primary-100 duration-200 transition'>
                            Check Availability
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className='flex items-center justify-center pt-6 sm:hidden'>
                <Link href={'/cabins'} type='button' className='uppercase border px-4 py-3 hover:bg-accent-500 hover:text-primary-100 hover:border-accent-500 duration-200 transition'>
                    All Cabins
                </Link>
            </div>
        </section>
    );
}