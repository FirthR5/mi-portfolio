import { useLayoutEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export function Modal({
  onClose,
  wide,
  children,
}: {
  onClose: () => void
  wide?: boolean
  children: ReactNode
}) {
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useLayoutEffect(() => {
    const savedY = window.scrollY

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.scrollTo(0, savedY)
    }
  }, [])

  const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onCloseRef.current()
  }

  return createPortal(
    <div className="modal-page">
      <div className="modal-page-backdrop" onClick={onBackdropClick} />
      <div className={wide ? 'modal modal-wide' : 'modal'} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>,
    document.body,
  )
}