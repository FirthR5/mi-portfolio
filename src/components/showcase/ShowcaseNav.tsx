import { useLang } from '../../context/LanguageContext'

const links = [
  { id: 'experiencia', es: 'Experiencia', en: 'Experience' },
  { id: 'proyectos-personales', es: 'Personales', en: 'Personal' },
  { id: 'proyectos-open-source', es: 'Código Abierto', en: 'Open Source' },
  { id: 'proyectos-escolares', es: 'Académicos', en: 'Academic' },
]

export function ShowcaseNav() {
  const { t } = useLang()
  return (
    <nav className="showcase-nav" aria-label={t({ es: 'Secciones', en: 'Sections' })}>
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} className="showcase-nav-link">
          {t({ es: l.es, en: l.en })}
        </a>
      ))}
    </nav>
  )
}