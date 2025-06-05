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
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <p>
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown
                </p>
            </div>
        </div>
    )
}
