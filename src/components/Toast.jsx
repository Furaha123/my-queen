import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const ToastContext = createContext(() => {})

/** Small global toast for the playful UI jokes. Usage: const notify = useToast(); notify('Hi', Icon) */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timer = useRef()

  const notify = useCallback((message, Icon) => {
    clearTimeout(timer.current)
    setToast({ message, Icon, id: Date.now() })
    timer.current = setTimeout(() => setToast(null), 3400)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4"
        style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      >
        {toast && (
          <div
            key={toast.id}
            className="pop-in pointer-events-auto flex max-w-md items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-sm leading-snug text-white shadow-xl"
          >
            {toast.Icon && <toast.Icon className="h-4 w-4 shrink-0 text-rose-300" aria-hidden />}
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
