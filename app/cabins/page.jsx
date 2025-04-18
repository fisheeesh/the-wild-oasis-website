import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";

//? make /cabins dynamic page / SSR
// export const revalidate = 0
//? ISR
//? With this it is like PPR
export const revalidate = 3600

export const metadata = {
    title: 'Cabins'
}

export default function Page() {

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

            {/* Suspense needs to be outside of the component that does async work */}
            {/* If all a component / page does is data loading, then it doesn't need to be wrapped in Suspense */}
            <Suspense fallback={<Spinner />}>
                <CabinList />
            </Suspense>
        </div>
    );
}
