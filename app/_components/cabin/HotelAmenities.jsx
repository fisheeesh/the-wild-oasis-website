import { Dumbbell, CircleParking, Sparkles, UtensilsCrossed, BrushCleaning, WavesLadder, UserCheck, WashingMachine } from 'lucide-react'

const amenities = [
    {
        icon: <Dumbbell />,
        text: 'GYM'
    },
    {
        icon: <CircleParking />,
        text: 'Parking'
    },
    {
        icon: <Sparkles />,
        text: 'Spa'
    },
    {
        icon: <UtensilsCrossed />,
        text: 'Restaurants'
    },
    {
        icon: <BrushCleaning />,
        text: 'Room Service'
    },
    {
        icon: <WavesLadder />,
        text: 'Swimming Pool'
    },
    {
        icon: <UserCheck />,
        text: '24 Hour Concierge'
    },
    {
        icon: <WashingMachine />,
        text: 'In-house Laundary'
    },
]

export default function HotelAmenities() {
    return (
        <div className='mb-16'>
            <h1 className='font-semibold text-4xl pb-8 text-accent-500'>Hotel Amenities</h1>
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
