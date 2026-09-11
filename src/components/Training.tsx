import { useLang } from '../context/LanguageContext'
import { training } from '../data/sections'

export default function Training() {
  const { t } = useLang()

  return (
    <section id="training" className="section" style={{ background: 'var(--surface-alt)' }}>
      <div className="container">
        <h2 className="section-title">{t(training.heading)}</h2>
        <p className="section-subtitle">
          {t({ es: 'Cursos, certificaciones y formación continua.', en: 'Courses, certifications and continuous learning.' })}
        </p>

        <div className="card">
          {training.items.map((item) => (
            <div className="training-item" key={item.url}>
              <div>
                <div className="training-meta">
                  <span className="provider">{item.provider}</span>
                  {item.hours && <span className="hours">{t(item.hours)}</span>}
                </div>
                <a className="name" href={item.url} target="_blank" rel="noreferrer">
                  {t(item.name)}
                </a>
              </div>
              <div className="detail" style={{ textAlign: 'right' }}>
                {t(item.detail)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
