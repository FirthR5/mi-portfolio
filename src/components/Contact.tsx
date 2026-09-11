import { useLang } from '../context/LanguageContext'
import { contact } from '../data/profile'
import EmailLink from './shared/EmailLink'
import { GithubIcon, GitlabIcon, LinkedInIcon, MailIcon } from './shared/icons'

export default function Contact() {
  const { t } = useLang()

  const links = [
    { icon: <GithubIcon />, label: 'GitHub', href: contact.github },
    { icon: <GitlabIcon />, label: 'GitLab', href: contact.gitlab },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: contact.linkedin },
    //{ icon: <></>, label: 'Codeberg', href: contact.codeberg },
    //{ icon: <></>, label: 'Codeforces', href: contact.codeforces },
  ]

  const emailLabel = t({ es: 'Correo', en: 'Email' })

  return (
    <section id="contact" className="section" style={{ background: 'var(--surface-alt)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title section-title--full">
          {t({ es: 'Contacto', en: 'Contact' })}
        </h2>
        <p className="section-subtitle">
          {t({
            es: '¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Escríbeme!',
            en: 'Want to work with me or have a question? Reach out!',
          })}
        </p>

        <div className="contact-links">
          {links.map((link) =>
            link.href ? (
              <a key={link.label} className="contact-chip" href={link.href} target="_blank" rel="noreferrer">
                {link.icon} {link.label}
              </a>
            ) : (
              <span key={link.label} className="contact-chip" aria-disabled="true">
                {link.icon} {link.label}
              </span>
            ),
          )}
          <EmailLink
            className="contact-chip"
            parts={contact.email}
            label={t({ es: 'Enviar correo', en: 'Send email' })}
          >
            <MailIcon />
            {emailLabel}
          </EmailLink>
        </div>
      </div>
    </section>
  )
}
