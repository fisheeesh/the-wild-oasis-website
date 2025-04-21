"use client"

import { useFormStatus } from 'react-dom'
import { updateReservationAction } from '../_lib/actions'
import SpinnerMini from './SpinnerMini'

export default function UpdateReservationForm({ booking, cabin }) {
    const { id, observations, numGuest, startDate } = booking
    const { maxCapacity } = cabin

    return (
        <form action={updateReservationAction} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label htmlFor="numGuest">How many guests?</label>
                <select
                    defaultValue={numGuest}
                    name="numGuest"
                    id="numGuest"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
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
                    maxLength={200}
                    rows={5}
                    defaultValue={observations}
                    name="observations"
                    className="px-5 resize-none py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <UpdateButton />
                <input type="hidden" name="bookingId" value={id} />
                <input type="hidden" name="startDate" value={startDate} />
            </div>
        </form>
    )
}

function UpdateButton() {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            {
                pending ?
                    <div className="flex items-center gap-2">
                        <SpinnerMini /> Updating...
                    </div> :
                    'Update reservation'
            }
        </button>
    )
}
