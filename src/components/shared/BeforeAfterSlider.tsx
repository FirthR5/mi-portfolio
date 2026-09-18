import { useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import type { MediaItem, LocalizedText } from '../../data/types'

function stripLabel(caption: LocalizedText): string {
  return caption.es.replace(/\s*\((antes|despu[ée]s|before|after)\)$/i, '').trim()
}

function isAfter(item: MediaItem): boolean {
  const badge = item.badge?.es ?? ''
  return /despu[ée]s|after/i.test(badge)
}

export function BeforeAfterSlider({
  before,
  after,
}: {
  before: MediaItem
  after: MediaItem
}) {
  const { t } = useLang()
  const [pos, setPos] = useState(50)

  const update = (clientX: number, el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  return (
    <div
      className="before-after-slider"
      role="slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={t({ es: 'Comparador antes / después', en: 'Before / after comparison' })}
      tabIndex={0}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        update(e.clientX, e.currentTarget)
      }}
      onPointerMove={(e) => {
        if (e.buttons) update(e.clientX, e.currentTarget)
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
      }}
    >
      <img
        className="before-after-img before-after-base"
        src={after.src}
        alt={after.caption ? t(after.caption) : 'Después'}
        draggable={false}
      />
      <img
        className="before-after-img before-after-clipped"
        src={before.src}
        alt={before.caption ? t(before.caption) : 'Antes'}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      <div className="before-after-divider" style={{ left: `${pos}%` }}>
        <span className="before-after-handle" aria-hidden="true">
          ↕
        </span>
      </div>
      {before.badge && (
        <span className="before-after-tag before-after-tag-before">{t(before.badge)}</span>
      )}
      {after.badge && (
        <span className="before-after-tag before-after-tag-after">{t(after.badge)}</span>
      )}
    </div>
  )
}

type Slide =
  | { kind: 'pair'; before: MediaItem; after: MediaItem; order: number }
  | { kind: 'single'; item: MediaItem; order: number }

export function BeforeAfterGallery({
  items,
  defaultAlt,
}: {
  items: MediaItem[]
  defaultAlt: string
}) {
  const { t } = useLang()
  const [index, setIndex] = useState(0)

  const byBase = new Map<string, MediaItem[]>()
  for (const item of items) {
    if (!item.caption) continue
    const base = stripLabel(item.caption)
    if (!byBase.has(base)) byBase.set(base, [])
    byBase.get(base)!.push(item)
  }

  const slides: Slide[] = []
  for (const group of byBase.values()) {
    const order = items.findIndex((item) => item.caption && stripLabel(item.caption) === stripLabel(group[0].caption!))
    const sortByPosition = (a: MediaItem, b: MediaItem) => items.indexOf(a) - items.indexOf(b)
    const afters = group.filter(isAfter).sort(sortByPosition)
    const befores = group.filter((item) => !isAfter(item)).sort(sortByPosition)

    if (afters.length > 0 && befores.length > 0) {
      const n = Math.max(afters.length, befores.length)
      for (let i = 0; i < n; i++) {
        const pair = {
          before: befores[Math.min(i, befores.length - 1)],
          after: afters[Math.min(i, afters.length - 1)],
        }
        slides.push({ kind: 'pair', ...pair, order })
      }
    }
    if (afters.length > befores.length) {
      for (let i = befores.length; i < afters.length; i++) {
        slides.push({ kind: 'single', item: afters[i], order })
      }
    }
    if (befores.length > afters.length) {
      for (let i = afters.length; i < befores.length; i++) {
        slides.push({ kind: 'single', item: befores[i], order })
      }
    }
  }
  slides.sort((a, b) => a.order - b.order)

  if (slides.length === 0) return null

  const at = Math.min(index, slides.length - 1)
  const slide = slides[at]
  const goto = (i: number) => setIndex(Math.max(0, Math.min(slides.length - 1, i)))

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

      <div className="media-slider-figure">
        {slide.kind === 'pair' ? (
          <BeforeAfterSlider before={slide.before} after={slide.after} />
        ) : (
          <figure className="before-after-orphan">
            <img
              src={slide.item.src}
              alt={slide.item.caption ? t(slide.item.caption) : defaultAlt}
              loading="lazy"
            />
            {slide.item.caption && (
              <figcaption className="showcase-caption">{t(slide.item.caption)}</figcaption>
            )}
          </figure>
        )}
      </div>

      <button
        type="button"
        className="media-slider-nav media-slider-next"
        onClick={() => goto(at + 1)}
        disabled={at === slides.length - 1}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}