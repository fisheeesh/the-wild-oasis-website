import { auth } from "../_lib/auth";
import NavLinks from "./NavLinks";

export default async function Navigation() {
    const session = await auth()

    return (
        <nav className="z-10 text-xl">
            <NavLinks user={session?.user} />
        </nav>
    );
}
