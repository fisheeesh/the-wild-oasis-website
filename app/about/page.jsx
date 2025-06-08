import { getCabins } from "../_lib/data-service";
import Section1 from "./Section1";
import Section2 from "./Section2";

export const revalidate = 86400;

export const metadata = {
    title: 'About'
};

export default async function Page() {
    const cabins = await getCabins();

    return (
        <div className="space-y-12">
            {/* Section 1 */}
            <Section1 cabins={cabins.length} />
            {/* Section 2 */}
            <Section2 />
        </div>
    );
}