import { BedDouble, Users, TentTree, Scan } from "lucide-react"

export default function CabinFeature({ guests }) {
    return (
        <div className='my-16 space-y-10'>
            <h1 className='font-semibold text-4xl pb-8 border-b text-accent-500 border-b-primary-800'>Room Feature</h1>

            <div className="flex sm:items-center gap-10 sm:gap-48 flex-col sm:flex-row">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 items-start">
                        <BedDouble />
                        <div>
                            <p className="font-black text-xl">Bed</p>
                            <p className="text-primary-400">1 King Bed</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Users />
                        <div>
                            <p className="font-black text-xl">Max Guest</p>
                            <p className="text-primary-400">{guests} Guests</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 items-start">
                        <Scan />
                        <div>
                            <p className="font-black text-xl">Room Space</p>
                            <p className="text-primary-400">30 Sqm</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <TentTree />
                        <div>
                            <p className="font-black text-xl">Room View</p>
                            <p className="text-primary-400">Mountain View</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-10 pb-8 border-b border-b-primary-800">
                <p>
                    Discover the ultimate luxury getaway nestled deep in a picturesque forest. Each of our wooden cabins offers a secluded and intimate retreat designed for relaxation and connection with nature. Step inside to find warm, high-quality wood interiors, cozy living areas with fireplaces, fully-equipped kitchens, and spa-inspired bathrooms. Whether you're enjoying a peaceful night in a plush king-size bed or unwinding on your private deck with a hot tub, every detail is crafted to elevate your stay.
                </p>
                <p>
                    Perfect for couples, families, or groups, our cabins come in various sizes to accommodate different needs without compromising comfort or style. From romantic escapes to grand family vacations, every cabin blends luxury and nature to create a serene and unforgettable experience. Escape the noise, breathe in the mountain air, and indulge in the comfort of your own private oasis.
                </p>
            </div>
        </div>
    )
}
