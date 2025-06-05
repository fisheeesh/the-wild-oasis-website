import React from 'react'
import award from '@/public/award.png'
import card from '@/public/card.png'
import { FaLinkedin, FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import logo from '@/public/logo.png'

export default function Footer() {
    return (
        <footer className='bg-primary-900 w-full p-8 md:p-10 lg:p-12 space-y-10'>
            {/* Responsive Grid */}
            <div className='grid gap-12 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
                {/* Logo + Currency + Socials */}
                <div className='flex flex-col gap-6'>
                    <Link href="/" className="flex items-center gap-4 z-10">
                        <Image src={logo} className="w-[45px] h-[45px] md:w-[50px] md:h-[50px]" quality={100} alt="The Wild Oasis logo" />
                        <span className="text-3xl font-semibold text-accent-500">
                            TWO
                        </span>
                    </Link>
                    <div className='flex items-center gap-4'>
                        <a href="https://www.facebook.com/share/1BVNiyEY6c/?mibextid=wwXIfr" target='_blank' rel="noreferrer">
                            <FaFacebook className='hover:text-blue-600 transition duration-200 cursor-pointer' size={22} />
                        </a>
                        <a href="https://www.instagram.com/fissheeesh/" target='_blank' rel="noreferrer">
                            <FaInstagram className='hover:text-pink-600 transition duration-200 cursor-pointer' size={22} />
                        </a>
                        <a href="https://www.tiktok.com/@syp_11602?_t=ZS-8wxYfKckcqm&_r=1" target='_blank' rel="noreferrer">
                            <FaTiktok className='hover:text-black transition duration-200 cursor-pointer' size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/syp-dev/">
                            <FaLinkedin className='hover:text-blue-500 transition duration-200 cursor-pointer' size={22} />
                        </a>
                    </div>
                    <span className='px-4 py-2 bg-primary-800 text-center font-semibold w-fit'>USD</span>
                </div>

                {/* Contact */}
                <div className='flex flex-col gap-4'>
                    <span className="text-xl font-semibold mb-3">
                        Contact
                    </span>
                    <span>T: +66-9-147-9581</span>
                    <span>E: thewildoasis.co</span>
                    <span>F: +09-441-860-441</span>
                </div>

                {/* Address */}
                <div className='flex flex-col gap-2'>
                    <span className="text-xl font-semibold mb-3">
                        Hotel Address
                    </span>
                    <span>Via delle Dolomiti, 45</span>
                    <span>39030 Cortina d’Ampezzo (BZ)</span>
                    <span>South Tyrol, Italy</span>
                </div>

                {/* Images */}
                <div className='flex flex-col items-start gap-2'>
                    <Image src={award} alt="Award Pic" quality={80} />
                    <Image src={card} alt="Card Pic" height={100} width={150} quality={80} />
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-accent-500 transition duration-200' href={'/privacy'}>Privacy</Link>
                    <Link className='hover:text-accent-500 transition duration-200' href={'/legal'}>Legal Notice</Link>
                </div>
                <span>
                    Copyright &copy; {new Date().getFullYear()} The Wild Oasis.
                </span>
            </div>
        </footer>
    )
}