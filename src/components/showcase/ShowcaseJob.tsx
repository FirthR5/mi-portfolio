import { useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import type { JobItem } from '../../data/types'
import { MediaGallery, type ZoomRequest } from '../shared/MediaGallery'
import { CollapsibleShowcaseBlock } from '../shared/CollapsibleShowcaseBlock'
import { ShowcaseJobHeader } from '../shared/ShowcaseJobHeader'
import { Modal } from '../shared/Modal'
import TechTag from '../shared/TechTag'

export function ShowcaseJob({
  job,
  onZoom,
}: {
  job: JobItem
  onZoom: (req: ZoomRequest) => void
}) {
  const { t } = useLang()
  const [descOpen, setDescOpen] = useState(false)

  const hasDescription = job.groups.length > 0 || job.technologies.length > 0

  return (
    <article className="showcase-job" data-company={job.company}>
      <ShowcaseJobHeader
        heading={job.company}
        subtitle={job.title}
        location={job.location}
        period={job.period}
      />

      {hasDescription && (
        <button
          type="button"
          className="job-evidence-btn"
          onClick={() => setDescOpen(true)}
        >
          {t({ es: 'Ver descripción', en: 'View description' })}
        </button>
      )}

      {job.evidence?.map((block, bi) => (
        <CollapsibleShowcaseBlock
          key={bi}
          title={block.title ? t(block.title) : t({ es: 'Evidencia', en: 'Evidence' })}
        >
          <hr />
          {block.content?.map((content, ci) => (
            <div key={ci}>
              <p className="showcase-desc">{t(content.description)}</p>
              <MediaGallery
                items={content.items}
                defaultAlt="Evidence"
                onZoom={onZoom}
                layout={content.layout}
              />
            </div>
          ))}
        </CollapsibleShowcaseBlock>
      ))}

      {descOpen && (
        <Modal onClose={() => setDescOpen(false)}>
          <div className="modal-head">
            <div>
              <h3>{job.company}</h3>
              <div className="project-meta">
                <span className="category">{t(job.title)}</span>
                <span className="period">{t(job.period)}</span>
              </div>
            </div>
            <button
              type="button"
              className="modal-close"
              onClick={() => setDescOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {job.groups.map((group, gi) => (
            <div key={gi} className="job-group">
              {group.title && (
                <strong style={{ color: 'var(--heading)' }}>{t(group.title)}</strong>
              )}
              <ul className="modal-desc">
                {group.bullets.map((b, bi) => (
                  <li key={bi}>{t(b)}</li>
                ))}
              </ul>
            </div>
          ))}

          {job.technologies.length > 0 && (
            <div className="job-tech">
              <span className="job-tech-label">
                {t({ es: 'Tecnologías', en: 'Technologies' })}
              </span>
              <div className="skill-tags">
                {job.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </div>
          )}
        </Modal>
      )}
    </article>
  )
}