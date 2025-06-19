"use client"

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ConfirmLogout from "./ConfirmLogout"
import Modal from "./Modal"

export default function HamburgerMenu({ user }) {
    const [isMobMenuOpen, setIsMobMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href) => `hover:text-accent-400 transition-colors border-b border-b-primary-800 w-full pb-3 ${href === pathname ? 'text-accent-400' : ''}`

    return (
        <>
            <div className="lg:hidden flex items-center mt-2 relative z-20">
                <button
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                    className={`hamburger ${isMobMenuOpen ? 'open' : ''}`}
                    type="button"
                >
                    <span className="hamburger-top bg-primary-200"></span>
                    <span className="hamburger-middle bg-primary-200"></span>
                    <span className="hamburger-bottom bg-primary-200"></span>
                </button>
            </div>
            {
                isMobMenuOpen && (
                    <div id="menu" className="absolute lg:hidden p-6 py-8 bg-primary-900 left-3 right-3 top-20 md:top-24 z-100 bottom-3">
                        <div className="flex flex-col items-start justify-start text-xl w-full space-y-6 font-semibold text-white rounded-sm">
                            <Link href="/" onClick={() => setIsMobMenuOpen(false)} className={isActive('/')}>Home</Link>
                            <Link href="/cabins" onClick={() => setIsMobMenuOpen(false)} className={isActive('/cabins')}>Cabins</Link>
                            <Link href="/about" onClick={() => setIsMobMenuOpen(false)} className={isActive('/about')}>About</Link>
                            {
                                user?.image ?
                                    <Link onClick={() => setIsMobMenuOpen(false)} href="/account" className={`${isActive('/account')} flex items-center gap-4`}>
                                        <img referrerPolicy='no-referrer' src={user.image} className='h-8 rounded-full' alt={user.name} />
                                        <span>Guest area</span>
                                    </Link> :
                                    <Link onClick={() => setIsMobMenuOpen(false)} href="/account" className={isActive('/account')}>
                                        Guest area
                                    </Link>
                            }
                            {!!user &&
                                <Modal>
                                    <Modal.Opens open={'sign-out'}>
                                        <button type='button' className='cursor-pointer hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full'>
                                            <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
                                            <span>Sign out</span>
                                        </button>
                                    </Modal.Opens>

                                    <Modal.Window name={'sign-out'}>
                                        <ConfirmLogout onCloseMenu={() => setIsMobMenuOpen(false)} />
                                    </Modal.Window>
                                </Modal>
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
