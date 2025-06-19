'use client'

import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function BrowserWarningModal({ isOpen, onClose }) {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const copyCurrentUrl = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            toast.success('URL copied to clipboard!')
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea')
            textArea.value = window.location.href
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            toast.success('URL copied to clipboard!')
        })
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-md mx-4 p-6 bg-white shadow-2xl transform transition-all">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    ✕
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-center mb-4 text-gray-900">
                    Google Sign-In Not Available
                </h2>

                {/* Message */}
                <div className="text-sm mb-6 text-gray-600">
                    <p className="mb-4">
                        Google Sign-In doesn't work in this browser. To continue with Google authentication, please:
                    </p>

                    <ol className="space-y-2 mb-4">
                        <li className="flex items-center">
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                            <span>Copy this page's URL and open it in Chrome or Safari</span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                            <span>Then try signing in with Google</span>
                        </li>
                    </ol>

                    <p className="text-center text-sm text-gray-500">
                        This limitation is for your security
                    </p>
                </div>

                {/* Action buttons */}
                <div className="space-y-3">
                    <button
                        onClick={copyCurrentUrl}
                        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        📋 Copy URL
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        I'll try another way
                    </button>
                </div>
            </div>
        </div>
    )
}