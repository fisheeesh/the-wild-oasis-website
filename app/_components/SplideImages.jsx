'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image2 from '@/public/2.webp';
import image3 from '@/public/3.webp';
import image4 from '@/public/4.webp';
import image5 from '@/public/5.webp';
import image6 from '@/public/6.webp';
import Image from 'next/image';

const images = [image3, image4, image5, image6, image2];

export default function SplideImages() {
    return (
        <div className="w-full pb-16">
            <Splide
                options={{
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: true,
                    arrows: false,
                    pagination: false,
                    gap: '1rem',
                    focus: 'center',
                    padding: { right: '15%' },
                }}
                className="splide"
            >
                {images.map((img, index) => (
                    <SplideSlide key={index}>
                        <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative overflow-hidden">
                            <Image
                                placeholder='blur'
                                src={img}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}