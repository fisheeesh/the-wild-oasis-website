import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { cabinId } = await params
    const { name } = await getCabin(cabinId)

    return { title: `Cabin ${name}` }
}

/**
 * ? For a dynamic segment of a URL, it's always a good idea to tell Next.js about those by using generate static params function.
 * ? Because, this way, this route can then be entirely statically generated, which is a lot better for performance.
 */
export const generateStaticParams = async () => {
    const cabins = await getCabins()

    const ids = cabins.map(cabin => ({ cabinId: String(cabin.id) }))

    return ids
}

export default async function Page({ params }) {
    const { cabinId } = await params
    /**
     * ! Here is a blocking waterfall.
     * ? It's like we're fetching multiple pieces of data that don't really depend on each other.
     * ? But that are still blocking one another, so then everything else will have to wait. 
     * ? And so that's why this took so long to load here, which doesn't really make sense. 
     * $ Now, one approach to fixing this is to use Promise.all. 
     * ? And so then we can basically get this data in parallel which is a bit faster.
     */
    const cabin = await getCabin(cabinId)
    // const settings = await getSettings()
    // const bookDates = await getBookedDatesByCabinId(params.cabinId)

    /**
     * ? This is not a perfect approach we can do better than this.
     * ? So instead of fetching all the data here on the parent page, we can just create a bunch of different components.
     * ? And then have each component fetch all the data that it needs.
     * ? And then those components can be streamed in as they become ready.
     */
    // const [cabin, settings, bookDates] = await Promise.all([
    //     getCabin(params.cabinId),
    //     getSettings(),
    //     getBookedDatesByCabinId(params.cabinId)
    // ])

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin} />

            <div>
                <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>

                <Suspense fallback={<Spinner />}>
                    <Reservation cabin={cabin} />
                </Suspense>
            </div>
        </div>
    );
}
