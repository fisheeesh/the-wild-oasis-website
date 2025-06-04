"use client"

import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
} from '@heroicons/react/24/solid';
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        name: 'Home',
        href: '/account',
        icon: <HomeIcon className='hidden md:block h-5 w-5 text-primary-600' />,
    },
    {
        name: 'Reservations',
        href: '/account/reservations',
        icon: <CalendarDaysIcon className='hidden md:block h-5 w-5 text-primary-600' />,
    },
    {
        name: 'Profile',
        href: '/account/profile',
        icon: <UserIcon className='hidden md:block h-5 w-5 text-primary-600' />,
    },
];


export default function AccountPanel() {
    const pathname = usePathname()

    const isActive = (href) => `${pathname === href ? 'bg-primary-900 text-primary-100' : ''} py-2 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`

    return (
        <div className="flex h-fit lg:hidden justify-end">
            <div className="border border-primary-800 flex justify-end items-center">
                {
                    navLinks.map(link => (
                        <Link
                            key={link.name}
                            className={isActive(link.href)}
                            href={link.href}>
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
