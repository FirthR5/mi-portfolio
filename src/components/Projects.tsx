import { useEffect, useState, type MouseEvent } from 'react'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/projects'
import { isVideo } from './shared/media'
import TechTag from './shared/TechTag'
import type { Project } from '../data/types'

function sortByDateDesc(a: string, b: string) {
  return b.localeCompare(a)
}

export default function Projects({
  onOpenShowcase,
}: {
  onOpenShowcase: () => void
}) {
  const { t } = useLang()
  const [active, setActive] = useState<Project | null>(null)

  const sorted = [...projects.items].sort((a, b) => sortByDateDesc(a.startDate, b.startDate))
  const openSourceSorted = [...projects.openSource.items].sort((a, b) =>
    sortByDateDesc(a.startDate, b.startDate),
  )

  const close = () => setActive(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close()
  }

  const renderTech = (technologies: string) =>
    technologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
      .map((tech) => <TechTag key={tech} name={tech} />)

  const renderCard = (project: Project) => (
    <button
      type="button"
      className="card project-card"
      key={t(project.name)}
      onClick={() => setActive(project)}
    >
      <h3>{t(project.name)}</h3>
      <div className="project-meta">
        <span className="category">{t(project.category)}</span>
        <span className="period">{t(project.period)}</span>
      </div>
      <p className="project-preview">{t(project.description[0])}</p>
      <div className="project-tech skill-tags">{renderTech(project.technologies)}</div>
      {project.media && project.media.length > 0 && (
        <span className="project-view-demo">
          {t({ es: 'Ver demos ▶', en: 'View demos ▶' })}
        </span>
      )}
    </button>
  )

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">{t(projects.heading)}</h2>
        <p className="section-subtitle">
          {t({ es: 'Haz clic en un proyecto para ver su demo.', en: 'Click on a project to view its demo.' })}
        </p>
        {/* Proyectos */}
        <h3 className="projects-subheading">{t(projects.heading2)}</h3>
        <div className="projects-grid">{sorted.map(renderCard)}</div>

        {/* FOSS */}
        <h3 className="projects-subheading">{t(projects.openSource.heading)}</h3>
        <p className="section-subtitle">
          {t({
            es: 'Mis aportaciones a software y apps FOSS que uso.',
            en: 'Contributions to software and apps I use.',
          })}
        </p>
        <div className="projects-grid">{openSourceSorted.map(renderCard)}</div>
      </div>

      {active && (
        <div className="modal-backdrop" onClick={onBackdropClick}>
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-head">
              <div>
                <h3>{t(active.name)}</h3>
                <div className="project-meta">
                  <span className="category">{t(active.category)}</span>
                  <span className="period">{t(active.period)}</span>
                </div>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={close}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {active.links &&
              active.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            {active.repoUrl && (
              <a className="project-repo" href={active.repoUrl} target="_blank" rel="noreferrer">
                {t({ es: 'Repositorio ↗', en: 'Repository ↗' })}
              </a>
            )}

            <ul className="modal-desc">
              {active.description.map((d, i) => (
                <li key={i}>{t(d)}</li>
              ))}
            </ul>

            {active.media && active.media.length > 0 && (
              <div className={`modal-media${active.media.length > 1 ? ' multi' : ''}`}>
                {active.media.map((m) =>
                  isVideo(m.src) ? (
                    <video key={m.src} controls autoPlay preload="metadata" src={m.src} />
                  ) : (
                    <img key={m.src} src={m.src} alt={t(active.name)} loading="lazy" />
                  ),
                )}
              </div>
            )}

            <div className="project-tech skill-tags">{renderTech(active.technologies)}</div>

            <button
              type="button"
              className="modal-portfolio-btn"
              onClick={onOpenShowcase}
            >
              {t({ es: 'Ver portafolio', en: 'View portfolio' })}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
