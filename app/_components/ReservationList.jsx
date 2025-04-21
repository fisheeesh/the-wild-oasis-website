"use client"

import { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'
import { deleteReservationAction } from '../_lib/actions'

export default function ReservationList({ bookings }) {
    /**
     * ? useOptimistic hook takes 2 arguments.
     * ? 1. The data we want to be optimistic about.
     * ? 2. A function that takes the current data and anything we pass into async func and returns the new data.
     * ? It returns 2 values which are the current data(optimistic) and the function to update the data.
     * ? Like useReducer hook, optimistic function will be called when we use optimisticDelete function.
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
