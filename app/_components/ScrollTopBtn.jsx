"use client"

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTopBtn() {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <button
            onClick={scrollToTop}
            type="button"
            id="to-top"
            className={`${showBtn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
    p-1.5 outline-none cursor-pointer border border-primary-800 bg-primary-950 
    flex fixed bottom-5 right-5 z-50 items-center justify-center`}>
            <ArrowUp />
        </button>
    )
}
