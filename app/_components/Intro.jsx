import swim from '@/public/swim.webp'
import resort from '@/public/resort.webp'
import Link from 'next/link'
import Image from 'next/image'

export default function Intro() {
    return (
        <section className="mt-[100px] relative z-[10] flex gap-16 lg:gap-0 lg:items-center flex-col lg:flex-row mb-[100px] xl:mb-[400px]">
            <div className="space-y-16 w-full lg:w-1/2">
                <div className="flex items-center gap-20">
                    <div className="flex items-baseline gap-6">
                        <h1 className="text-7xl font-semibold">5</h1>
                        <span className="text-2xl tracking-[0.3rem]">stars</span>
                    </div>
                    <div className="flex items-baseline gap-6">
                        <h1 className="text-7xl font-semibold">8</h1>
                        <span className="text-2xl tracking-[0.3rem]">rooms</span>
                    </div>
                </div>
                <p className="tracking-widest text-3xl font-medium lg:max-w-2xl">
                    Our hotel is located in the heart of the New Forrest. A five stars lifestyle surrounded by the forest.
                </p>
                <Link href='/about' className="uppercase pb-3 border-b border-b-primary-800 font-bold text-sm hover:border-primary-300 transition duration-300">
                    More about us
                </Link>
            </div>
            <div className="flex lg:justify-end w-full lg:w-1/2 pr-10">
                <Image src={swim} className="rounded-tl-4xl rounded-br-4xl" alt="hero image" height={500} />
            </div>
            <div className="absolute xl:block hidden bottom-0 right-0 pr-10 top-[350px]">
                <Image src={resort} className="rounded-tl-4xl rounded-br-4xl" alt="hero image" height={500} />
            </div>
        </section>
    )
}
