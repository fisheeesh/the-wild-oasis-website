"use client"

import { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'
import { deleteReservationAction } from '../_lib/actions'

export default function ReservationList({ bookings }) {
    /**
     * ? useOptimistic hook takes 2 arguments.
     * ? 1. 
     */
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (curBookings, bookingId) => {
            return curBookings.filter(booking => booking.id !== bookingId)
        }
    )

    const handleDelete = async (bookingId) => {
        optimisticDelete(bookingId)
        await deleteReservationAction(bookingId)
    }

    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard onDelete={handleDelete} booking={booking} key={booking.id} />
            ))}
        </ul>
    )
}
