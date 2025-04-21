"use client"

import { FlagIcon } from "@heroicons/react/24/solid"
import { updateGuestAction } from "../_lib/actions"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function UpdateProfile({ guest, children }) {
    const { fullName, email, nationalID, countryFlag } = guest

    return (
        <form action={updateGuestAction} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
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
                    name="nationalID"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton />
            </div>
        </form>
    )
}

function SubmitButton() {
    //$ useFormStatus is a React-DOM hook. It cannot use inside a component which renders form.
    //? It should be used inside a component which is rendered inside form.
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="cursor-pointer bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            {
                pending ?
                    <div className="flex items-center gap-2">
                        <SpinnerMini /> Updating...
                    </div> :
                    ' Update profile'
            }
        </button>
    )
}
