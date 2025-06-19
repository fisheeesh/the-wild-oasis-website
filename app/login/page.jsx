import SignInButton from "../_components/SignInButton";

export const metadata = {
    title: 'Login',
}

export default function Page() {
    return (
        <div className="flex flex-col gap-10 my-36 items-center">
            <h2 className="text-xl md:text-2xl font-semibold text-center">
                Sign in to access your guest area
            </h2>
            <SignInButton />
        </div>
    );
}