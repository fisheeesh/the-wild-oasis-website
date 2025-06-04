"use client"

import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function Button({ pendingLabel, children }) {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            type="submit"
            className="px-5 py-2 disabled:cursor-not-allowed bg-accent-500 text-primary-100 cursor-pointer border hover:border-accent-600 border-accent-500 hover:bg-accent-600 transition duration-300">
            {
                pending ?
                    <div className="flex items-center gap-2">
                        <SpinnerMini /> {pendingLabel}
                    </div> :
                    children
            }
        </button>
    )
}
