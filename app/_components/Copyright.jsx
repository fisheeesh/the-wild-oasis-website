import Link from "next/link"

export default function Copyright() {
    return (
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
            <div className='flex items-center gap-6'>
                <Link className='hover:text-accent-500 transition duration-200' href={'/privacy'}>Privacy</Link>
                <Link className='hover:text-accent-500 transition duration-200' href={'/legal-notice'}>Legal Notice</Link>
            </div>
            <span>
                Copyright &copy; {new Date().getFullYear()} The Wild Oasis.
            </span>
        </div>
    )
}
