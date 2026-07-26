import { useState, useEffect } from "react"
import { subscribeToast } from "../hooks/useToast"

export default function Toast() {
  const [message, setMessage] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    return subscribeToast((msg) => {
      setMessage(msg)
      setVisible(true)
      setTimeout(() => setVisible(false), 2800)
      setTimeout(() => setMessage(null), 3200)
    })
  }, [])

  if (!message) return null

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-6 py-3.5 rounded-xl
                  bg-fg text-white shadow-lg font-body font-medium text-sm
                  flex items-center gap-2.5 select-none
                  transition-all duration-400 ease-out
                  ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0 pointer-events-none"
                  }`}
      role="status"
      aria-live="polite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-primary"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      {message}
    </div>
  )
}
