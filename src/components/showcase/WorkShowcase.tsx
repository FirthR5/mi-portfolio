import { useEffect, useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import { ExperienceShowcase } from './ExperienceShowcase'
import { ProjectsShowcase } from './ProjectsShowcase'
import { ShowcaseNav } from './ShowcaseNav'
import { Lightbox } from '../shared/Lightbox'
import type { ZoomRequest } from '../shared/MediaGallery'

type GalleryState = { images: string[]; index: number }

export default function WorkShowcase({ focusCompany }: { focusCompany?: string }) {
  const { t } = useLang()
  const [gallery, setGallery] = useState<GalleryState | null>(null)

  const openZoom = ({ images, index }: ZoomRequest) => setGallery({ images, index })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!focusCompany) return
    const el = document.querySelector(`[data-company="${CSS.escape(focusCompany)}"]`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [focusCompany])

  return (
    <section className="showcase">
      <div className="container">
        <h1 className="showcase-title txt-center">{t({ es: 'Portafolio', en: 'Portfolio' })}</h1>
        <p className="section-subtitle txt-center">
          {t({
            es: "Esta sección te presento de forma visual los proyectos y sistemas en los que he trabajado.",
            en: "A showcase of the projects and systems I have worked on.",
          })}
        </p>

        <ShowcaseNav />
      </div>

      <div className="showcase-band">
        <div className="container">
          <ExperienceShowcase onZoom={openZoom} />
        </div>
      </div>

      <div className="container">
        <ProjectsShowcase onZoom={openZoom} />
      </div>

      <Lightbox
        images={gallery?.images ?? []}
        index={gallery?.index ?? -1}
        onClose={() => setGallery(null)}
        onIndexChange={(index) => setGallery((g) => (g ? { ...g, index } : g))}
      />
    </section>
  )
}
