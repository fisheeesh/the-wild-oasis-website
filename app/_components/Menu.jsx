"use client"

import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom";
import useOutsideClick from '@/app/_lib/hooks/useOutsideClick'
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const MenuContext = createContext()

export default function Menus({ children }) {
    const [openId, setOpenId] = useState('')
    const [position, setPosition] = useState(null)

    const open = setOpenId
    const close = () => setOpenId('')

    return (
        <MenuContext.Provider value={{ openId, close, open, position, setPosition }}>
            {children}
        </MenuContext.Provider>
    )
}

const Toggle = ({ id }) => {
    const { openId, close, open, setPosition } = useContext(MenuContext)

    const handleClick = (e) => {
        //!
        e.stopPropagation()
        const rect = e.target.closest('button').getBoundingClientRect()
        setPosition({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8
        })

        openId === '' || openId !== id ? open(id) : close()
    }

    return <button className="cursor-pointer" type="button" onClick={handleClick}>
        <EllipsisVerticalIcon className="w-5 h-5" />
    </button>
}

const List = ({ id, children }) => {
    const { openId, position, close } = useContext(MenuContext)
    const ref = useOutsideClick(close, false)

    if (openId !== id) return null

    return createPortal(
        <ul
            className="fixed z-50 shadow-md"
            style={{
                top: position?.y,
                right: position?.x,
                position: 'fixed',
            }}
            ref={ref}
        >
            {children}
        </ul>,
        document.body
    )
}

const Button = ({ icon, children, onClick, href }) => {
    const { close } = useContext(MenuContext)

    const handleClick = () => {
        onClick?.()
        close()
    }

    return <li>
        {!!href ?
            <Link href={href} className="flex items-center cursor-pointer w-full hover:text-primary-900 gap-2 group px-4 py-1 bg-primary-900 text-sm transition-all duration-200 border-none bg-none hover:bg-accent-600 " onClick={handleClick}>
                {icon}
                <span>{children}</span>
            </Link> :
            <button type="button" className="flex items-center cursor-pointer w-full hover:text-primary-900 gap-2 group px-4 py-1 bg-primary-900 text-sm transition-all duration-200 border-none bg-none hover:bg-accent-600 " onClick={handleClick}>
                {icon}
                <span>{children}</span>
            </button>
        }
    </li>
}

// Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button
