import { auth } from "../_lib/auth";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

export default async function Navigation() {
    const session = await auth()

    return (
        <>
            <nav className="z-10 text-xl lg:flex hidden">
                <NavLinks user={session?.user} />
            </nav>

            <HamburgerMenu user={session?.user} />
        </>
    );
}
