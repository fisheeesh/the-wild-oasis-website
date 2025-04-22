"use client"

import { FlagIcon } from "@heroicons/react/24/solid"
import { updateGuestAction } from "../_lib/actions"
import SubmitButton from "./SubmitButton"
import toast from "react-hot-toast"

export default function UpdateProfile({ guest, children }) {
    const { fullName, email, nationalID, countryFlag } = guest

    return (
        <form action={(formData) => {
            updateGuestAction(formData)
            toast.success('Your profile has been updated successfully!')
        }} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    name="fullName"
                    defaultValue={fullName}
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    name="email"
                    defaultValue={email}
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    {
                        countryFlag ?
                            <img
                                src={countryFlag}
                                alt="Country flag"
                                className="h-5 rounded-sm" /> :
                            <FlagIcon className="h-5 text-accent-500" />
                    }
                </div>

                {children}
            </div>

            <div className="space-y-2">
                <label htmlFor="nationalID">National ID number</label>
                <input
                    placeholder="National ID (6-12 alphanumeric characters)"
                    defaultValue={nationalID}
                    autoComplete="off"
                    name="nationalID"
                    className="px-5 py-2.5 focus:outline-0 border border-primary-200 focus:border-accent-500 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingLabel="Updating...">
                    Update profile
                </SubmitButton>
            </div>
        </form>
    )
}
