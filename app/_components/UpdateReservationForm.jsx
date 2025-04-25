"use client"

import toast from 'react-hot-toast'
import { updateReservationAction } from '../_lib/actions'
import SubmitButton from './SubmitButton'

export default function UpdateReservationForm({ booking, cabin }) {
    const { id, observations, numGuest, startDate } = booking
    const { maxCapacity } = cabin

    return (
        <form action={(formData) => {
            updateReservationAction(formData)
            toast.success('Your reservation has been updated successfully!')
        }} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label htmlFor='numGuest'>How many guests? <span className="text-red-600">* </span></label>
                <select
                    defaultValue={numGuest}
                    name="numGuest"
                    id="numGuest"
                    className='px-5  py-2.5 border-2 transition duration-300 border-primary-200 focus:outline-0 focus:border-accent-600 bg-primary-200 text-primary-800 w-full shadow-sm'
                    required
                >
                    <option value="" key="">
                        Select number of guests...
                    </option>
                    {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                        <option value={x} key={x}>
                            {x} {x === 1 ? "guest" : "guests"}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="observations">
                    Anything we should know about your stay?
                </label>
                <textarea
                    id='observations'
                    placeholder="Please let us know if you have any special requests or needs."
                    rows={5}
                    defaultValue={observations}
                    name="observations"
                    className='px-5 resize-none py-2.5 border-2 transition duration-300 border-primary-200 focus:outline-0 focus:border-accent-600 bg-primary-200 text-primary-800 w-full shadow-sm'
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingLabel="Updating...">
                    Update reservation
                </SubmitButton>
                <input type="hidden" name="bookingId" value={id} />
                <input type="hidden" name="startDate" value={startDate} />
            </div>
        </form>
    )
}
