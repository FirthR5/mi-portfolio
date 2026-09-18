import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { experience } from '../data/profile'
import TechTag from './shared/TechTag'

export default function Experience({ onOpenShowcase }: { onOpenShowcase: (company: string) => void }) {
  const { t } = useLang()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (company: string) =>
    setExpanded((cur) => ({ ...cur, [company]: !cur[company] }))

  return (
    <section id="experience" className="section" style={{ background: 'var(--surface-alt)' }}>
      <div className="container">
        <h2 className="section-title">{t(experience.heading)}</h2>
        <p className="section-subtitle">
          {t({ es: 'Mi recorrido profesional.', en: 'My professional journey.' })}
        </p>

        {experience.jobs.map((job) => {
          const totalBullets = job.groups.reduce((acc, g) => acc + g.bullets.length, 0)
          const firstBullet = job.groups[0].bullets[0]
          const rest = totalBullets - 1
          const isOpen = expanded[job.company]
          return (
            <div className="card job-group" key={job.company}>
              <div className="job-group-head">
                <h3>{t(job.title)}</h3>
                <div className="place">
                  {job.company} · {t(job.location)}
                </div>
                <div className="period">{t(job.period)}</div>
              </div>

              {!isOpen ? (
                <ul>{firstBullet && <li>{t(firstBullet)}</li>}</ul>
              ) : (
                job.groups.map((group, gi) => (
                  <div key={gi}>
                    {group.title && (
                      <strong style={{ color: 'var(--heading)' }}>{t(group.title)}</strong>
                    )}
                    <ul>
                      {group.bullets.map((b, bi) => (
                        <li key={bi}>{t(b)}</li>
                      ))}
                    </ul>
                  </div>
                ))
              )}

              {rest > 0 && (
                <button type="button" className="job-evidence-btn" onClick={() => toggle(job.company)}>
                  {isOpen
                    ? t({ es: 'Ver menos ▲', en: 'Show less ▲' })
                    : t({ es: `Ver más (${rest}) ▼`, en: `Show more (${rest}) ▼` })}
                </button>
              )}

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
              {job.evidence && job.evidence.length > 0 && (
                <button
                  type="button"
                  className="job-evidence-btn"
                  onClick={() => onOpenShowcase(job.company)}
                >
                  {t({ es: 'Ver evidencia ▶', en: 'View evidence ▶' })}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}