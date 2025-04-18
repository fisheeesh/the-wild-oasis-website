import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

/**
 * ? It is a good idea to keep data fetching as close to the components or even inside the components that actually data.
 */
export default async function CabinList() {
    //? By doing this, this component will be opt out of the data cache.
    // noStore()

    const cabins = await getCabins()

    if (!cabins.length) return null

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {cabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}
