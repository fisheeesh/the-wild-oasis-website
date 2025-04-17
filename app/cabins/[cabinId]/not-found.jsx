import Link from "next/link";

/**
 * $ not-found page can be shown in 2 ways.
 * ? 1. If the URL does not exit.
 * ? 2. Manually trigger this page, by calling notFound()
 */
function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            <h1 className='text-3xl font-semibold'>
                This cabin could not be found :(
            </h1>
            <Link
                href='/cabins'
                className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'>
                Back to all cabins
            </Link>
        </main>
    );
}

export default NotFound;
