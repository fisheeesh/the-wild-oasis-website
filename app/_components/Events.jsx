import sharing from '@/public/sharing.webp'
import newyear from '@/public/newyear.webp'
import dinner from '@/public/dinner.webp'
import { CalendarDays, Clock3 } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export default function Events() {
    return (
        <section className='py-20 flex flex-col gap-8'>
            <h1 className='text-4xl sm:text-5xl uppercase sm:text-center tracking-wide font-bold'>Upcoming Events</h1>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                <div className='flex flex-col space-y-4'>
                    <div className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={sharing}
                            alt={`Cabin 001`}
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Sharing is Caring</h1>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <CalendarDays size={20} /> 12 November 2025
                        </div>
                        <span>|</span>
                        <div className='flex items-center gap-2'>
                            <Clock3 size={20} /> 3:00 - 5:00 PM
                        </div>
                    </div>
                    <div className='uppercase text-lg border-b border-b-primary-800 w-fit'>See Detail</div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={dinner}
                            alt={`Cabin 003`}
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Romantic Dinner</h1>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <CalendarDays size={20} /> 11 December 2025
                        </div>
                        <span>|</span>
                        <div className='flex items-center gap-2'>
                            <Clock3 size={20} /> 8:00 - 11:00 PM
                        </div>
                    </div>
                    <div className='uppercase text-lg border-b border-b-primary-800 w-fit'>See Detail</div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='relative h-[250px] aspect-square'>
                        <Image
                            fill
                            src={newyear}
                            alt={`Cabin 005`}
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-3xl tracking-wide uppercase font-medium'>Party New Year Eve</h1>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <CalendarDays size={20} /> 31 December 2025
                        </div>
                        <span>|</span>
                        <div className='flex items-center gap-2'>
                            <Clock3 size={20} /> 10:00 PM - 1:00 AM
                        </div>
                    </div>
                    <div className='uppercase text-lg border-b border-b-primary-800 w-fit'>See Detail</div>
                </div>
            </div>
        </section>
    )
}