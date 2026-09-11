import { useEffect, useCallback } from 'react'

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: string[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}) {
  const open = index >= 0 && index < images.length
  const hasPrev = open && index > 0
  const hasNext = open && index < images.length - 1

  const goPrev = useCallback(() => {
    if (hasPrev) onIndexChange(index - 1)
  }, [hasPrev, index, onIndexChange])

  const goNext = useCallback(() => {
    if (hasNext) onIndexChange(index + 1)
  }, [hasNext, index, onIndexChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, goPrev, goNext])

  if (!open) return null

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {hasPrev && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav-prev"
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav-next"
          onClick={(e) => {
            e.stopPropagation()
            goNext()
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      <div className="lightbox-figure">
        <img
          key={images[index]}
          className="lightbox-img"
          src={images[index]}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
        {images.length > 1 && (
          <div className="lightbox-counter" onClick={(e) => e.stopPropagation()}>
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
