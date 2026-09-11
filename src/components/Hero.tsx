import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { contact, summary } from '../data/profile'
import { site } from '../data/site'
import meImg from '../assets/me.png'
import EmailLink from './shared/EmailLink'
import { MailIcon } from './shared/icons'

const cvLinks: Record<string, string> = {
  es: 'https://drive.proton.me/urls/NXPRYNQQJW#g6qbIH6VTEu9',
  en: 'https://drive.proton.me/u/3/tlpRUj0Mr8Is0rfBYFNGxynrlpETO3I8jn0HvL251M2StFy6Zx3FJUlBvKLeMefZd4EPADCg4z6iOVGFGEsAVg==/file/3y4G7ZBFGF1cIDjFP8SCPNXczQHN-facYyDcAtCZDNrJ5QdaShZHgzi8CdNBjUEXdh0fkB4-DiiaurhCRpMkIQ==?r=%2Fshared-with-me',
}

export default function Hero() {
  const { t, lang } = useLang()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % summary.roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  const currentRole = t(summary.roles[roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          {/* <div className="hero-kicker">
            {site.name.toUpperCase()}
          </div> */}
          <h1>{site.name}</h1>
          <div className="hero-role">
            <strong>{currentRole}</strong>
          </div>
          <p className="lead">{t(summary.paragraph)}</p>
          {/* <p className="lead">{t(summary.objective)}</p> */}

          <div className="hero-actions">
            <a className="btn btn-primary" href={cvLinks[lang]} target="_blank" rel="noopener noreferrer">
              {t(contact.downloadCvLabel)}
            </a>
            <EmailLink
              className="btn btn-outline"
              parts={contact.email}
              label={t({ es: 'Enviar correo', en: 'Send email' })}
            >
              <MailIcon />
              {t({ es: 'Contáctame', en: 'Contact me' })}
            </EmailLink>
            <Link className="btn btn-outline" to="/portafolio">
              {t({ es: 'Ver portafolio', en: 'View portfolio' })}
            </Link>
          </div>
        </div>

        <div className="hero-photo">
          <img src={meImg} alt={site.name} />
        </div>
      </div>
    </section>
  )
}
