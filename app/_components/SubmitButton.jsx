"use client"

import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

//$ useFormStatus is a React-DOM hook. It cannot use inside a component which renders form.
//? It should be used inside a component which is rendered inside form.
export default function SubmitButton({ pendingLabel, children }) {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
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
