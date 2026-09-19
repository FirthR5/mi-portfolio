import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { projects } from '../data/projects'
import { isVideo } from './shared/media'
import TechTag from './shared/TechTag'
import { isLanguage } from '../lib/tech'
import { Modal } from './shared/Modal'
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
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [techExpanded, setTechExpanded] = useState<Record<string, boolean>>({})

  const sorted = [...projects.items].sort((a, b) => sortByDateDesc(a.startDate, b.startDate))
  const openSourceSorted = [...projects.openSource.items].sort((a, b) =>
    sortByDateDesc(a.startDate, b.startDate),
  )

  const close = () => setActive(null)
  const toggleId = (project: Project) => {
    const key = t(project.name)
    setExpanded((cur) => ({ ...cur, [key]: !cur[key] }))
  }
  const toggleTech = (project: Project) => {
    const key = t(project.name)
    setTechExpanded((cur) => ({ ...cur, [key]: !cur[key] }))
  }

  const renderTech = (technologies: string) => {
    const techs = technologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
    const order = (tech: string) => (isLanguage(tech) ? 0 : 1)
    return techs
      .map((tech, i) => ({ tech, i }))
      .sort((a, b) => order(a.tech) - order(b.tech) || a.i - b.i)
      .map(({ tech }) => <TechTag key={tech} name={tech} />)
  }

  const renderCard = (project: Project) => {
    const isOpen = expanded[t(project.name)]
    const techOpen = techExpanded[t(project.name)]
    return (
      <div
        className="card project-card"
        key={t(project.name)}
        onClick={() => setActive(project)}
      >
        <h3>{t(project.name)}</h3>
        <div className="project-meta">
          <span className="category">{t(project.category)}</span>
          <span className="period">{t(project.period)}</span>
        </div>
        {!isOpen ? (
          <p className="project-preview">{t(project.description[0])}</p>
        ) : (
          <ul className="project-desc">
            {project.description.map((d, i) => (
              <li key={i}>{t(d)}</li>
            ))}
          </ul>
        )}
        {/*
        {project.description.length > 1 && (
          <button
            type="button"
            className="job-evidence-btn project-more-btn"
            onClick={(e) => {
              e.stopPropagation()
              toggleId(project)
            }}
          >
            {isOpen
              ? t({ es: 'Ver menos ▲', en: 'Show less ▲' })
              : t({ es: `Ver más (${project.description.length - 1}) ▼`, en: `Show more (${project.description.length - 1}) ▼` })}
          </button>
        )}
        */}
        <div className="project-tech">
          <div className={`skill-tags${techOpen ? '' : ' skill-tags--scroll'}`}>
            {renderTech(project.technologies)}
          </div>
          {project.technologies.split(',').length > 3 && (

            <button
              type="button"
              className="tech-expand-btn"
              aria-hidden="true"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation()
                toggleTech(project)
              }}
            >
              {techOpen ? '▲' : '▼'}
            </button>

          )
          }

        </div>
        {project.media && project.media.length > 0 && (
          <span className="project-view-demo">
            {t({ es: 'Ver demos ▶', en: 'View demos ▶' })}
          </span>
        )}
      </div>
    )
  }

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
            es: 'Mis aportaciones a software y aplicaciones Free and Open Source que utilizo.',
            en: 'Contributions to Free and Open Source software I use.',
          })}
        </p>
        <div className="projects-grid">{openSourceSorted.map(renderCard)}</div>
      </div>

      {active && (
        <Modal onClose={close}>
          <div className="modal-head">
            <div>
              <h3>{t(active.name)}</h3>
              <div className="project-meta">
                <span className="category">{t(active.category)}</span>
                <span className="period">{t(active.period)}</span>
              </div>
            </div>
            <button type="button" className="modal-close" onClick={close} aria-label="Close">
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

          <div className="project-tech">
            <div className={`skill-tags${techExpanded[t(active.name)] ? '' : ' skill-tags--scroll'}`}>
              {renderTech(active.technologies)}
            </div>
            <button
              type="button"
              className="tech-expand-btn"
              aria-hidden="true"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation()
                toggleTech(active)
              }}
            >
              {techExpanded[t(active.name)] ? '▲' : '▼'}
            </button>
          </div>

          <button type="button" className="modal-portfolio-btn" onClick={onOpenShowcase}>
            {t({ es: 'Ver portafolio', en: 'View portfolio' })}
          </button>
        </Modal>
      )}
    </section>
  )
}
