import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

/**
 * ? It is a good idea to keep data fetching as close to the components or even inside the components that actually data.
 */
export default async function CabinList({ filter }) {
    //? By doing this, this component will be opt out of the data cache.
    //? It is like revalidate = 0
    // noStore()

    const cabins = await getCabins()

    if (!cabins.length) return null

    let displayedCabins;
    if (filter === 'all') displayedCabins = cabins
    if (filter === 'small') displayedCabins = cabins.filter(cabin => cabin.maxCapacity <= 3)
    if (filter === 'medium') displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7)
    if (filter === 'large') displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 8)

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayedCabins.map((cabin, index) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}
