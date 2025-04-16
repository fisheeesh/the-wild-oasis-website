"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()

    const isActive = (href) => `hover:text-accent-400 transition-colors ${href === pathname ? 'text-accent-400' : ''}`

    return (
        <nav className="z-10 text-xl">
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
                    <Link href="/account" className={isActive('/account')}>
                        Guest area
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
