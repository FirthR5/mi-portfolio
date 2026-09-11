import { useLang } from '../../context/LanguageContext'
import { experience } from '../../data/profile'
import { ShowcaseJob } from './ShowcaseJob'
import type { ZoomRequest } from '../shared/MediaGallery'

export function ExperienceShowcase({ onZoom }: { onZoom: (req: ZoomRequest) => void }) {
  const { t } = useLang()
  return (
    <>
      <h2 id="experiencia" className="showcase-section-title txt-center">{t({ es: 'Experiencia', en: 'Experience' })}</h2>
      {experience.jobs.map((job) => (
        <ShowcaseJob key={job.company} job={job} onZoom={onZoom} />
      ))}
    </>
  )
}
