import { useLang } from '../context/LanguageContext'
import { publications } from '../data/sections'

export default function Publications() {
  const { t } = useLang()

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">{t(publications.heading)}</h2>
        <p className="section-subtitle">
          {t({ es: 'Trabajo de investigación académica publicado.', en: 'Published academic research.' })}
        </p>

        {publications.items.map((pub) => (
          <div className="publication" key={pub.doi}>
            <div className="authors">{t(pub.authors)}</div>
            <div className="title">“{t(pub.title)}”</div>
            <div className="venue">{t(pub.venue)}</div>
            <div className="doi">
              DOI:{' '}
              <a href={pub.doiUrl} target="_blank" rel="noreferrer">
                {pub.doi}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
