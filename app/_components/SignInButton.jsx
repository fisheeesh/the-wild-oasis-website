'use client'

import { useState, useEffect } from 'react'
import { signInAction } from "../_lib/actions"
import BrowserWarningModal from './BrowserWarningModal'
import toast from 'react-hot-toast'

function SignInButton() {
  const [showBrowserWarning, setShowBrowserWarning] = useState(false)
  const [isInAppBrowser, setIsInAppBrowser] = useState(false)

  useEffect(() => {
    // Check if we're in an in-app browser
    const checkBrowser = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const isInApp = /LinkedIn|Twitter|Line|WeChat|Snapchat|TikTok/.test(ua) &&
        /iPhone|iPod|iPad|Android/i.test(ua);
      setIsInAppBrowser(isInApp)
    }

    checkBrowser()
  }, [])

  const handleSubmit = async (e) => {
    if (isInAppBrowser) {
      e.preventDefault() // Prevent form submission
      setShowBrowserWarning(true)
      return
    }
    // If not in-app browser, let the form submit normally
    // The server action will handle the sign-in
  }

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
    <>
      <BrowserWarningModal
        isOpen={showBrowserWarning}
        onClose={() => setShowBrowserWarning(false)}
      />

      {/* Warning banner for in-app browsers */}
      {isInAppBrowser && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 max-w-md">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> If you are accessing from LinkedIn mobile app, please copy the URL and open in external browsers(Chrome or Safari) for full functionality.
          </p>
          <button
            onClick={copyCurrentUrl}
            className="mt-2 px-3 py-1 bg-yellow-600 text-white text-sm hover:bg-yellow-700 transition-colors"
          >
            Coppy URL
          </button>
        </div>
      )}

      <form action={signInAction} onSubmit={handleSubmit}>
        <button
          type="submit"
          className={`flex cursor-pointer items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium transition-all hover:scale-105 ${isInAppBrowser ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          <img
            src='https://authjs.dev/img/providers/google.svg'
            alt='Google logo'
            height='24'
            width='24'
          />
          <span>
            {isInAppBrowser ? <>
              <span>Google Sign-In <br />
                (Not Available)</span>
            </> : 'Continue with Google'}
          </span>
        </button>
      </form>
    </>
  )
}

export default SignInButton