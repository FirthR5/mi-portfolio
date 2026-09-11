import { useEffect, useRef, useState, type SyntheticEvent } from 'react'
import { useLang } from '../../context/LanguageContext'
import { MediaSize, type MediaItem as MediaEntry, type MediaLayout } from '../../data/types'
import { isVideo } from './media'
import { MediaSlider } from './MediaSlider'

export interface ZoomRequest {
  src: string
  images: string[]
  index: number
}

function MediaStrip({
  items,
  defaultAlt,
  onZoom,
}: {
  items: MediaEntry[]
  defaultAlt: string
  onZoom: (req: ZoomRequest) => void
}) {
  const { t } = useLang()
  const stripRef = useRef<HTMLDivElement>(null)
  const firstRun = useRef(true)
  const [index, setIndex] = useState(0)
  const images = items.map((item) => item.src)

  const alt = (item: MediaEntry) => (item.caption ? t(item.caption) : defaultAlt)

  const fitFigure = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const figure = img.closest('figure') as HTMLElement | null
    if (!figure || !img.naturalWidth || !img.naturalHeight) return
    const viewportH = window.innerHeight || 700
    const viewportW = window.innerWidth || 1200
    const targetHeight = Math.min(680, viewportH * 0.8)
    const scaledWidth = Math.round((targetHeight / img.naturalHeight) * img.naturalWidth)
    figure.style.width = `${Math.min(scaledWidth, viewportW - 24)}px`
  }

  const maxIndex = items.length - 1

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    const strip = stripRef.current
    if (!strip) return
    const el = strip.querySelectorAll<HTMLElement>('.showcase-strip-item')[index]
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [index])

  return (
    <div className="showcase-strip-wrap">
      <button
        type="button"
        className="media-slider-nav media-slider-prev"
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        disabled={index === 0 || maxIndex <= 0}
        aria-label="Previous"
      >
        ‹
      </button>

      <div ref={stripRef} className="showcase-strip">
        {items.map((item, i) => (
          <figure key={item.src} className="showcase-strip-item">
            <button
              type="button"
              className="showcase-grid-btn"
              onClick={() => onZoom({ src: item.src, images, index: i })}
              aria-label="Zoom"
            >
              <img src={item.src} alt={alt(item)} loading="lazy" onLoad={fitFigure} />
            </button>
            {item.caption && <figcaption className="showcase-caption">{t(item.caption)}</figcaption>}
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="media-slider-nav media-slider-next"
        onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
        disabled={index === maxIndex || maxIndex <= 0}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}

function MediaMasonry({
  items,
  defaultAlt,
  onZoom,
}: {
  items: MediaEntry[]
  defaultAlt: string
  onZoom: (req: ZoomRequest) => void
}) {
  const { t } = useLang()
  const alt = (item: MediaEntry) => (item.caption ? t(item.caption) : defaultAlt)
  const fullItems = items.filter((item) => item.size === MediaSize.Full)
  const columnItems = items.filter((item) => item.size !== MediaSize.Full)

  const gridItem = (item: MediaEntry) =>
    isVideo(item.src) ? (
      <div key={item.src} className="showcase-grid-item">
        <video src={item.src} controls preload="metadata" />
      </div>
    ) : (
      <figure key={item.src} className="showcase-grid-item">
        <button
          type="button"
          className="showcase-grid-btn"
          onClick={() =>
            onZoom({
              src: item.src,
              images: items.map((m) => m.src),
              index: items.findIndex((m) => m.src === item.src),
            })
          }
          aria-label="Zoom"
        >
          <img src={item.src} alt={alt(item)} loading="lazy" />
        </button>
        {item.caption && <figcaption className="showcase-caption">{t(item.caption)}</figcaption>}
      </figure>
    )

  return (
    <>
      {fullItems.map((item) => (
        <div key={item.src} className="showcase-grid-item showcase-grid-full">
          <button
            type="button"
            className="showcase-grid-btn"
            onClick={() =>
              onZoom({
                src: item.src,
                images: items.map((m) => m.src),
                index: items.findIndex((m) => m.src === item.src),
              })
            }
            aria-label="Zoom"
          >
            <img src={item.src} alt={alt(item)} loading="lazy" />
          </button>
          {item.caption && <figcaption className="showcase-caption">{t(item.caption)}</figcaption>}
        </div>
      ))}
      {columnItems.length > 0 && (
        <div className="showcase-grid showcase-grid-masonry">
          {columnItems.map((item) => gridItem(item))}
        </div>
      )}
    </>
  )
}

export function MediaGallery({
  items,
  defaultAlt,
  onZoom,
  layout = 'grid',
}: {
  items: MediaEntry[]
  defaultAlt: string
  onZoom: (req: ZoomRequest) => void
  layout?: MediaLayout
}) {
  const { t } = useLang()

  const alt = (item: MediaEntry) => (item.caption ? t(item.caption) : defaultAlt)

  const images = items.filter((item) => !isVideo(item.src)).map((item) => item.src)

  if (layout === 'slides' || layout === 'before-after') {
    return <MediaSlider items={items} defaultAlt={defaultAlt} onZoom={onZoom} />
  }

  if (layout === 'wide') {
    const videoItems = items.filter((item) => isVideo(item.src))
    const imageItems = items.filter((item) => !isVideo(item.src))
    return (
      <>
        {videoItems.map((item) => (
          <div key={item.src} className="showcase-grid-item showcase-grid-full">
            <video src={item.src} controls preload="metadata" />
          </div>
        ))}

        {imageItems.length > 0 && (
          <MediaStrip items={imageItems} defaultAlt={defaultAlt} onZoom={onZoom} />
        )}
      </>
    )
  }

  if (layout === 'hero-strip') {
    const videoItems = items.filter((item) => isVideo(item.src))
    const heroItems = items.filter(
      (item) => !isVideo(item.src) && item.size === MediaSize.Full,
    )
    const stripItems = items.filter(
      (item) => !isVideo(item.src) && item.size !== MediaSize.Full,
    )
    const heroZoom = (item: MediaEntry, index: number) =>
      onZoom({ src: item.src, images, index })
    return (
      <>
        {videoItems.map((item) => (
          <div key={item.src} className="showcase-grid-item showcase-grid-full">
            <video src={item.src} controls preload="metadata" />
          </div>
        ))}

        {heroItems.map((item) => (
          <div key={item.src} className="showcase-grid-item showcase-grid-full showcase-hero">
            <button
              type="button"
              className="showcase-grid-btn"
              onClick={() => heroZoom(item, images.indexOf(item.src))}
              aria-label="Zoom"
            >
              <img src={item.src} alt={alt(item)} loading="lazy" />
            </button>
          </div>
        ))}

        {stripItems.length > 0 && (
          <MediaStrip items={stripItems} defaultAlt={defaultAlt} onZoom={onZoom} />
        )}
      </>
    )
  }

  const grid = (
    <div className="showcase-grid">
      {items.map((item) => {
        const span = item.size === MediaSize.Full ? 'showcase-grid-full' : ''
        if (isVideo(item.src)) {
          return (
            <div key={item.src} className={`showcase-grid-item ${span}`}>
              <video src={item.src} controls preload="metadata" />
            </div>
          )
        }
        return (
          <figure key={item.src} className={`showcase-grid-item ${span}`}>
            <button
              type="button"
              className="showcase-grid-btn"
              onClick={() =>
                onZoom({
                  src: item.src,
                  images,
                  index: images.indexOf(item.src),
                })
              }
              aria-label="Zoom"
            >
              <img src={item.src} alt={alt(item)} loading="lazy" />
            </button>
            {item.caption && <figcaption className="showcase-caption">{t(item.caption)}</figcaption>}
          </figure>
        )
      })}
    </div>
  )

  if (layout === 'masonry') {
    return (
      <div className="showcase-bleed">
        <MediaMasonry items={items} defaultAlt={defaultAlt} onZoom={onZoom} />
      </div>
    )
  }

  if (layout === 'grid-full') {
    return <div className="showcase-bleed">{grid}</div>
  }

  return grid
}