import Image from 'next/image'
import Link from 'next/link'
import bg from '@/public/bg.png'

export default function Hero() {
    return (
        <section className="relative w-full h-screen">
            {/* Full-screen background image */}
            <Image
                src={bg}
                fill
                quality={80}
                placeholder="blur"
                alt="Mountains and forests with two cabins"
                className="object-cover object-top"
            />

            {/* Content centered on top of image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-primary-50 mb-10 tracking-tight font-normal">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/cabins"
                    className="bg-accent-500 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                >
                    Explore luxury cabins
                </Link>
            </div>
        </section>
    )
}