import { Send } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function Newsletter() {
    const pRef = useRef(null)
    const formRef = useRef(null)
    const pInView = useInView(pRef, { once: true, margin: '-100px' })
    const formInView = useInView(formRef, { once: true, margin: '-100px' })

    return (
        <section className='py-20 flex flex-col space-y-8 justify-center items-center'>
            <h1 className='text-4xl sm:text-5xl uppercase tracking-wide font-bold'>
                Newsletter
            </h1>

            <motion.p
                ref={pRef}
                initial={{ opacity: 0, y: 40 }}
                animate={pInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='text-xl font-medium text-center'
            >
                Subscribe to the newsletter to get updates on news and promotions!
            </motion.p>

            <motion.div
                ref={formRef}
                initial={{ opacity: 0, y: 40 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className='flex items-center flex-col md:flex-row gap-4'
            >
                <input
                    type='text'
                    placeholder='Email Address'
                    className='px-4 w-[250px] lg:w-[350px] py-3 focus:outline-0 focus:border-accent-500 duration-300 transition border border-primary-800'
                />
                <button className='flex items-center gap-4 hover:bg-accent-500 hover:border-accent-500 duration-300 transition cursor-pointer px-4 py-3 border border-primary-800'>
                    <span>Subscribe</span>
                    <Send />
                </button>
            </motion.div>
        </section>
    )
}