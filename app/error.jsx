"use client"

/**
 * ! This must be a client component.
 * ? Only errors in rendering will be caught here.
 * ? Any errors that happen in callback funcs will not be caught by React error-boundary.
 * $ This error.jsx file does not catch errors that might happen in the root layout.
 * ? If we want to catch them too, we will need to create global-error.jsx file. 
 * ? That will then actually replace the entire layout. It needs to define its own html and body tag.
 */
export default function Error({ error, reset }) {
    return (
        <main className='flex justify-center items-center flex-col gap-6 my-36'>
            <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
            <p className='text-red-600 italic text-center'>{error.message}</p>

            <button
                onClick={reset}
                className='inline-block bg-accent-500 duration-200 transition-colors text-primary-800 px-6 py-3 text-lg cursor-pointer hover:bg-accent-600'>
                Try again
            </button>
        </main>
    );
}
