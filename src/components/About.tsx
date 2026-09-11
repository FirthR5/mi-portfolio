import { useLang } from '../context/LanguageContext'
import { education, summary } from '../data/profile'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          {t({ es: 'Sobre mí', en: 'About me' })}
        </h2>
        {/*
        <p className="section-subtitle">
          {t({ es: 'Conoce mi historia y formación.', en: 'My story and background.' })}
        </p>
        */}

        <div className="grid-2">
          <div>
            {/*
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>
              {t({ es: 'Resumen', en: 'Summary' })}
            </h3>
            */}
            <p className="about-me">{t(summary.about_me)}</p>
          </div>

          <div>
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>
              {t({ es: 'Formación', en: 'Education' })}
            </h3>
            <div className="timeline">
              {education.map((edu) => (
                <div className="timeline-item" key={edu.institution}>
                  <h4>{t(edu.degree)}</h4>
                  <div className="place">
                    {edu.institution} · {edu.location}
                  </div>
                  <div className="period">{t(edu.period)}</div>
                  <ul>
                    {edu.details.map((d, i) => (
                      <li key={i}>{t(d)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
