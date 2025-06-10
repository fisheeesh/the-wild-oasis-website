import { motion } from 'framer-motion';
import Image from 'next/image';

import hspa from '@/public/hspa.webp';
import restaurant from '@/public/restaurant.webp';
import spool from '@/public/spool.webp';
import tennis from '@/public/tennis.webp';

export default function HighlightImages() {

    const itemVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: i * 0.2,
            },
        }),
    };

    return (
        <section
            className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center mb-20"
        >
            {[restaurant, 'combo', hspa].map((image, index) => (
                <motion.div
                    key={index}
                    className={`${image === 'combo' ? 'flex flex-col gap-8' : 'relative'
                        }`}
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={index}
                >
                    {image === 'combo' ? (
                        <>
                            <div className="relative">
                                <Image
                                    placeholder='blur'
                                    src={tennis}
                                    alt="tennis court"
                                    className="object-cover object-center w-full md:w-[400px] h-[270px]"
                                />
                                <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
                                    Tennis court
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    src={spool}
                                    alt="swimming pool"
                                    className="object-cover object-center w-full md:w-[400px] h-[270px]"
                                />
                                <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
                                    Swimming Pool
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Image
                                src={image}
                                alt="facility"
                                className="object-cover object-center w-full h-[500px]"
                            />
                            <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
                                {image === restaurant ? 'Restaurant' : 'Spa'}
                            </div>
                        </>
                    )}
                </motion.div>
            ))}
        </section>
    );
}