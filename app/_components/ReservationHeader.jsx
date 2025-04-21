"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import toast from "react-hot-toast"

export default function ReservationHeader() {
    const searchParams = useSearchParams()
    const updated = searchParams.get('updated')

    useEffect(() => {
        if (updated === 'true') toast.success('Your reservation has been updated successfully.')
    }, [updated])

    return (
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
            Your reservations
        </h2>
    )
}
