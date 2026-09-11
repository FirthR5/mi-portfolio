import { useLang } from '../context/LanguageContext'
import { skills } from '../data/skills'
import TechTag from './shared/TechTag'

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="section" style={{ background: 'var(--surface-alt)' }}>
      <div className="container">
        <h2 className="section-title">{t(skills.heading)}</h2>
        <p className="section-subtitle">
          {t({ es: 'Tecnologías y herramientas con las que trabajo.', en: 'Technologies and tools I work with.' })}
        </p>

        <div className="skills-grid">
          {skills.groups.map((group) => (
            <div className="card skill-group" key={t(group.label)}>
              <h4>{t(group.label)}</h4>
              <div className="skill-tags">
                {group.value.map((v) => (
                  <TechTag key={v} name={v} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="card"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}
        >
          {skills.languages.map((group) => (
            <div className="skill-group" key={t(group.label)}>
              <h4>{t(group.label)}</h4>
              <div className="skill-tags">
                {group.value.map((v) => (
                  <TechTag key={v} name={v} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="card"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}
        >
          {skills.soft.map((group) => (
            <div className="skill-group" key={t(group.label)}>
              <h4>{t(group.label)}</h4>
              <div className="skill-tags">
                {group.value.map((v) => (
                  <TechTag key={v} name={v} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
