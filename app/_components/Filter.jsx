"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Filter() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeFilter = searchParams.get('capacity') ?? 'all'

    const handleFilter = (filter) => {
        const params = new URLSearchParams(searchParams)
        params.set('capacity', filter)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <div className="border border-primary-800 flex">
            <button disabled={activeFilter === 'all'} type="button" onClick={() => handleFilter('all')} className={`${activeFilter === 'all' ? 'bg-primary-700 text-primary-50' : ''} cursor-pointer flex gap-1 items-center px-5 py-2 disabled:cursor-not-allowed hover:bg-primary-700`}>All<span className="hidden sm:block">Cabins</span></button>
            <button disabled={activeFilter === 'small'} type="button" onClick={() => handleFilter('small')} className={`${activeFilter === 'small' ? 'bg-primary-700 text-primary-50' : ''} cursor-pointer flex gap-1 items-center px-5 py-2 disabled:cursor-not-allowed hover:bg-primary-700`}>1 &mdash; 3<span className="hidden sm:block">guests</span></button>
            <button disabled={activeFilter === 'medium'} type="button" onClick={() => handleFilter('medium')} className={`${activeFilter === 'medium' ? 'bg-primary-700 text-primary-50' : ''} cursor-pointer flex gap-1 items-center px-5 py-2 disabled:cursor-not-allowed hover:bg-primary-700`}>4 &mdash; 7<span className="hidden sm:block">guests</span></button>
            <button disabled={activeFilter === 'large'} type="button" onClick={() => handleFilter('large')} className={`${activeFilter === 'large' ? 'bg-primary-700 text-primary-50' : ''} cursor-pointer flex gap-1 items-center px-5 py-2 disabled:cursor-not-allowed hover:bg-primary-700`}>8 &mdash; 12<span className="hidden sm:block">guests</span></button>
        </div>
    )
}