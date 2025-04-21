import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//? make /cabins dynamic page / SSR
// export const revalidate = 0
//? ISR
//? With this it is like PPR
// $ x
export const revalidate = 3600

export const metadata = {
    title: 'Cabins'
}

export default async function Page({ searchParams }) {
    const { capacity } = await searchParams
    /**
     * ? searchParams can not be known at runtime.
     * ? What this means is that whenever we make use of the searchParams, the page can no longer be statically rendered.
     * ? So right now, this cabins page will now always be dynamically rendered.
     * ? So this revalidate, this now no longer takes any effect because this only applies to statically generated pages,
     */
    const filter = capacity ?? 'all'

    return (
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
                Our Luxury Cabins
            </h1>
            <p className="text-primary-200 text-lg mb-10">
                Cozy yet luxurious cabins, located right in the heart of the Italian
                Dolomites. Imagine waking up to beautiful mountain views, spending your
                days exploring the dark forests around, or just relaxing in your private
                hot tub under the stars. Enjoy nature's beauty in your own little home
                away from home. The perfect spot for a peaceful, calm vacation. Welcome
                to paradise.
            </p>

            <div className="flex justify-end mb-8">
                <Filter />
            </div>

            {/* Suspense needs to be outside of the component that does async work */}
            {/* If all a component / page does is data loading, then it doesn't need to be wrapped in Suspense */}
            {/* Whenever the key value changes, the fallback  will be shown again. */}
            {/* Server components re-render whenever there is navigation. */}
            <Suspense fallback={<Spinner />} key={filter}>
                <CabinList filter={filter} />
                <ReservationReminder />
            </Suspense>
        </div>
    );
}
