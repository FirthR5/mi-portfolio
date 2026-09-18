import { useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import { projects } from '../../data/projects'
import { ProjectType, type Project } from '../../data/types'
import { GithubCard } from '../shared/GithubCard'
import { LinkCard } from '../shared/LinkCard'
import { MediaGallery, type ZoomRequest } from '../shared/MediaGallery'
import { CollapsibleShowcaseBlock } from '../shared/CollapsibleShowcaseBlock'
import { ShowcaseJobHeader } from '../shared/ShowcaseJobHeader'
import { Modal } from '../shared/Modal'
import TechTag from '../shared/TechTag'

function ShowcaseProject({
  project,
  onZoom,
}: {
  project: Project
  onZoom: (req: ZoomRequest) => void
}) {
  const { t } = useLang()
  const [descOpen, setDescOpen] = useState(false)

  const technologies = project.technologies
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean)

  return (
    <>
      <CollapsibleShowcaseBlock
        title={
          <span className="showcase-project-title-wrap">
            <span>{t(project.name)}</span>
            {project.period && (
              <span className="showcase-project-date">{t(project.period)}</span>
            )}
          </span>
        }
      >
        {project.showcaseComment && (
          <p className="showcase-desc">{t(project.showcaseComment)}</p>
        )}

        {project.description?.length > 0 && (
          <button
            type="button"
            className="job-evidence-btn"
            onClick={() => setDescOpen(true)}
          >
            {t({ es: 'Ver descripción', en: 'View description' })}
          </button>
        )}

        {project.links?.map((l) => (
          <LinkCard key={l.url} link={l} />
        ))}

        {project.media && project.media.length > 0 && (
          <MediaGallery
            items={project.media}
            defaultAlt={project.name.es}
            onZoom={onZoom}
            layout={project.mediaLayout}
          />
        )}
        {project.repoUrl && <GithubCard url={project.repoUrl} />}
      </CollapsibleShowcaseBlock>

      {descOpen && (
        <Modal onClose={() => setDescOpen(false)}>
          <div className="modal-head">
            <div>
              <h3>{t(project.name)}</h3>
              <div className="project-meta">
                <span className="category">{t(project.category)}</span>
                <span className="period">{t(project.period)}</span>
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

          <ul className="modal-desc">
            {project.description.map((d, i) => (
              <li key={i}>{t(d)}</li>
            ))}
          </ul>

          {project.links?.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
          {project.repoUrl && (
            <a className="project-repo" href={project.repoUrl} target="_blank" rel="noreferrer">
              {t({ es: 'Repositorio ↗', en: 'Repository ↗' })}
            </a>
          )}

          {technologies.length > 0 && (
            <div className="job-tech">
              <span className="job-tech-label">
                {t({ es: 'Tecnologías', en: 'Technologies' })}
              </span>
              <div className="skill-tags">
                {technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </div>
          )}
        </Modal>
      )}
    </>
  )
}

function ProjectGroup({
  heading,
  id,
  projects,
  onZoom,
}: {
  heading: string
  id?: string
  projects: Project[]
  onZoom: (req: ZoomRequest) => void
}) {
  return (
    <article id={id} className="showcase-job">
      <ShowcaseJobHeader heading={heading} />
      {projects.map((p) => (
        <ShowcaseProject key={p.name.es} project={p} onZoom={onZoom} />
      ))}
    </article>
  )
}

const byDateDesc = (a: Project, b: Project) => (b.startDate ?? '').localeCompare(a.startDate ?? '')

export function ProjectsShowcase({ onZoom }: { onZoom: (req: ZoomRequest) => void }) {
  const { t } = useLang()
  const schoolTypes = [ProjectType.College, ProjectType.Thesis]
  const personal = projects.items.filter((p) => !schoolTypes.includes(p.type)).sort(byDateDesc)
  const school = projects.items.filter((p) => schoolTypes.includes(p.type)).sort(byDateDesc)
  return (
    <>
      <h2 className="showcase-section-title">{t({ es: 'Proyectos', en: 'Projects' })}</h2>
      <ProjectGroup
        id="proyectos-personales"
        heading={t({ es: 'Personales', en: 'Personal' })}
        projects={personal}
        onZoom={onZoom}
      />
      <ProjectGroup
        id="proyectos-open-source"
        heading={t({ es: 'Código Abierto', en: 'Open Source' })}
        projects={[...projects.openSource.items].sort(byDateDesc)}
        onZoom={onZoom}
      />
      <ProjectGroup
        id="proyectos-escolares"
        heading={t({ es: 'Escolares / Académicos', en: 'School / Academic' })}
        projects={school}
        onZoom={onZoom}
      />
    </>
  )
}