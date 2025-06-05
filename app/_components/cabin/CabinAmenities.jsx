import { AirVent, Bath, CigaretteOff, Heater, Monitor, Phone, Waves, Wifi } from 'lucide-react'

const amenities = [
    {
        icon: <Monitor />,
        text: 'TV'
    },
    {
        icon: <Wifi />,
        text: 'Free Wifi'
    },
    {
        icon: <Bath />,
        text: 'Bath Tub'
    },
    {
        icon: <CigaretteOff />,
        text: 'Non-Smoking'
    },
    {
        icon: <AirVent />,
        text: 'Air Conditioning'
    },
    {
        icon: <Heater />,
        text: 'Heater'
    },
    {
        icon: <Phone />,
        text: 'Phone'
    },
    {
        icon: <Waves />,
        text: 'Hair-dryer'
    },
]

export default function CabinAmenities() {
    return (
        <div className='mb-16'>
            <h1 className='font-semibold text-4xl pb-8 text-accent-500'>Room Amenities</h1>
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' >
                {
                    amenities.map((amenity) => (
                        <div key={amenity.text} className='flex transition duration-200 hover:-translate-y-1.5 items-center gap-4 px-4 py-4 border border-primary-800'>
                            {amenity.icon}
                            <h3 className='text-primary-400 font-semibold'>{amenity.text}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
