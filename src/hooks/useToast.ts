type ToastListener = (message: string) => void

let listener: ToastListener | null = null

export function subscribeToast(cb: ToastListener) {
  listener = cb
  return () => { listener = null }
}

export function showToast(message: string) {
  listener?.(message)
}
