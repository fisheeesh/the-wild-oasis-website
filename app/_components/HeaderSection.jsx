"use client"

import { motion } from "framer-motion"

export default function HeaderSection({ title }) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl text-accent-500 font-bold">{title}.</motion.h1>
    )
}
