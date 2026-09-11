import { useLang } from '../context/LanguageContext'
import { interests } from '../data/sections'

export default function Interests() {
  const { t } = useLang()

  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">{t(interests.heading)}</h2>
        <p className="section-subtitle">
          {t({ es: 'Lo que me motiva fuera del trabajo.', en: 'What drives me outside of work.' })}
        </p>

        <div className="interests-grid">
          {interests.items.map((item) => (
            <div className="card interest-card" key={t(item.title)}>
              <h4>{t(item.title)}</h4>
              <p>{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
