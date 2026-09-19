import { useLang } from '../context/LanguageContext'
import { interests } from '../data/sections'

export default function Interests() {
  const { t } = useLang()

  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">{t(interests.heading)}</h2>
        {/*
        <ul className="interests-list">
          {interests.interests.map((item) => (
            <li key={t(item)}>{t(item)}</li>
          ))}
        </ul>
        */}

        {interests.interests.map((item) => (
          <p key={t(item)}>{t(item)}</p>
        ))}

        <br />
        <h3 className="hobbies-title">{t(interests.hobbiesHeading)}</h3>
        <p className="section-subtitle">
          {t({ es: 'Lo que me motiva fuera del trabajo.', en: 'What drives me outside of work.' })}
        </p>

        <div className="interests-grid">
          {interests.hobbies.map((item) => (
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
