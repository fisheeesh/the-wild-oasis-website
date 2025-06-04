import AccountPanel from "../_components/AccountPanel";
import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({ children }) {
    return (
        <div className="lg:grid lg:grid-cols-[16rem_1fr] h-full gap-12">
            <SideNavigation />
            <AccountPanel />
            <div className="py-1 mt-5 lg:mt-0">
                {children}
            </div>
        </div>
    )
}
