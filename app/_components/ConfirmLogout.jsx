import { signOutAction } from "../_lib/actions";
import Button from "./Button";

export default function ConfirmLogout({ onCloseModal, onCloseMenu }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-accent-500 text-2xl font-bold border-b pb-3">Logout Confirmation.</h1>
            <p className="text-primary-200 text-lg">Are you sure you want to logout?</p>
            <div className="flex items-center justify-end gap-4 mt-6">
                <button
                    type="button"
                    onClick={onCloseModal}
                    className="border border-primary-100 px-5 py-2 cursor-pointer hover:bg-primary-100 hover:text-primary-950 transition duration-300">
                    No
                </button>
                <form action={async (formData) => {
                    onCloseMenu?.();
                    await signOutAction(formData);
                }}>
                    <Button pendingLabel={'Logging out...'} type="submit">
                        Yes
                    </Button>
                </form>
            </div>
        </div>
    )
}
