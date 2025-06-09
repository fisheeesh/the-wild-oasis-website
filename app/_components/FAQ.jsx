'use client'

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const faqs = [
    {
        question: 'What time is check-in and check-out?',
        answer: 'Check-in is from 2:00 PM and check-out is until 11:00 AM.',
    },
    {
        question: 'Is breakfast included in the room rate?',
        answer: 'Breakfast is not automatically included. Guests can choose to add a breakfast package during check-in, and it will be available until the departure date.',
    },
    {
        question: 'Do you offer airport shuttle service?',
        answer: 'Yes, we provide airport pick-up and drop-off services upon request for an additional fee.',
    },
    {
        question: 'Can I cancel my reservation for free?',
        answer: 'Free cancellation is available up to 24 hours before check-in. After that, one night’s fee will be charged.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const toggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div ref={ref} className="max-w-3xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, delay: index * 0.15 },
                            },
                        }}
                        key={index}
                        className="border border-primary-800">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex cursor-pointer justify-between items-center p-4 font-semibold bg-primary-950 text-left"
                        >
                            <span className='md:text-xl'>{faq.question}</span>
                            <span className="text-xl">{openIndex === index ? '–' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-primary-200">{faq.answer}</div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}