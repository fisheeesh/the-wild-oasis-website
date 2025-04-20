"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLinks({ user }) {
    const pathname = usePathname()

    const isActive = (href) => `hover:text-accent-400 transition-colors ${href === pathname ? 'text-accent-400' : ''}`
    return (
        <ul className="flex gap-16 items-center">
            <li>
                <Link href="/cabins" className={isActive('/cabins')}>
                    Cabins
                </Link>
            </li>
            <li>
                <Link href="/about" className={isActive('/about')}>
                    About
                </Link>
            </li>
            <li>
                {
                    user?.image ?
                        <Link href="/account" className={`${isActive('/account')} flex items-center gap-4` }>
                            <img referrerPolicy='no-referrer' src={user.image} className='h-8 rounded-full' alt={user.name} />
                            <span>Guest area</span>
                        </Link> :
                        <Link href="/account" className={isActive('/account')}>
                            Guest area
                        </Link>
                }
            </li>
        </ul>
    )
}
