import dinner from '@/public/dinner.webp';
import newyear from '@/public/newyear.webp';
import sharing from '@/public/sharing.webp';
import { CalendarDays, Clock3 } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const events = [
    {
        name: 'Sharing is Caring',
        image: sharing,
        date: '12 November 2025',
        time: '3:00 - 5:00 PM',
    },
    {
        name: 'Romantic Dinner',
        image: dinner,
        date: '11 December 2025',
        time: '8:00 - 11:00 PM',
    },
    {
        name: 'Party New Year Eve',
        image: newyear,
        date: '31 December 2025',
        time: '10:00 PM - 1:00 AM',
    },
];

export default function Events() {
    const handleClick = () => toast.success('Please Contact to the Hotel Receptionist.');

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
        <section ref={ref} className='py-20 flex flex-col gap-8'>
            <h1 className='text-4xl sm:text-5xl uppercase sm:text-center tracking-wide font-bold'>Upcoming Events</h1>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                <motion.div
                    className='flex flex-col space-y-4'
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={0}
                >
                    <div className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={sharing}
                            alt={'Sharing is Caring'}
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Sharing is Caring</h1>
                    <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <CalendarDays size={20} /> 12 November 2025
                        </div>
                        <span className='hidden md:inline'>|</span>
                        <div className='flex items-center gap-2'>
                            <Clock3 size={20} /> 3:00 - 5:00 PM
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className='uppercase text-lg border-b cursor-pointer border-b-primary-800 w-fit'
                    >
                        See Detail
                    </div>
                </motion.div>
                <motion.div
                    className='flex flex-col space-y-4'
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={1}
                >
                    <div className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={dinner}
                            alt="Romantic Dinner"
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Romantic Dinner</h1>
                    <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <CalendarDays size={20} /> 11 December 2025
                        </div>
                        <span className='hidden md:inline'>|</span>
                        <div className='flex items-center gap-2'>
                            <Clock3 size={20} /> 8:00 - 11:00 PM
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className='uppercase text-lg border-b cursor-pointer border-b-primary-800 w-fit'
                    >
                        See Detail
                    </div>
                </motion.div>
                <motion.div
                    className='flex flex-col space-y-4'
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={2}
                >
                    <div className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={newyear}
                            alt={'Party New Year Eve'}
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Party New Year Eve</h1>
                    <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <CalendarDays size={20} /> 31 December 2025
                        </div>
                        <span className='hidden md:inline'>|</span>
                        <div className='flex items-center gap-2'>
                            <Clock3 size={20} /> 10:00 PM - 1:00 AM
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className='uppercase text-lg border-b cursor-pointer border-b-primary-800 w-fit'
                    >
                        See Detail
                    </div>
                </motion.div>
            </div>
        </section>
    );
}