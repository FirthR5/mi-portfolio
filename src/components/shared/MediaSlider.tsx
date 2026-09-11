import { useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import type { MediaItem } from '../../data/types'
import { isVideo } from './media'
import type { ZoomRequest } from './MediaGallery'

export function MediaSlider({
  items,
  defaultAlt,
  onZoom,
}: {
  items: MediaItem[]
  defaultAlt: string
  onZoom: (req: ZoomRequest) => void
}) {
  const { t } = useLang()
  const [index, setIndex] = useState(0)

  if (items.length === 0) return null

  const images = items.filter((item) => !isVideo(item.src))
  const imagesList = images.map((i) => i.src)
  const at = Math.min(index, items.length - 1)
  const current = items[at]
  const goto = (i: number) => setIndex(Math.max(0, Math.min(items.length - 1, i)))

  return (
    <div className="media-slider">
      <button
        type="button"
        className="media-slider-nav media-slider-prev"
        onClick={() => goto(at - 1)}
        disabled={at === 0}
        aria-label="Previous"
      >
        ‹
      </button>

      <figure className="media-slider-figure">
        {isVideo(current.src) ? (
          <video src={current.src} controls preload="metadata" />
        ) : (
          <button
            type="button"
            className="showcase-grid-btn"
            onClick={() => onZoom({ src: current.src, images: imagesList, index: images.indexOf(current) })}
            aria-label="Zoom"
          >
            <img src={current.src} alt={current.caption ? t(current.caption) : defaultAlt} />
          </button>
        )}
        {current.badge && <figcaption className="media-slider-badge">{t(current.badge)}</figcaption>}
        {items.length > 1 && (
          <div className="media-slider-counter">
            {at + 1} / {items.length}
          </div>
        )}
      </figure>

      <button
        type="button"
        className="media-slider-nav media-slider-next"
        onClick={() => goto(at + 1)}
        disabled={at === items.length - 1}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}