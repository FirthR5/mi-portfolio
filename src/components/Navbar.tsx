import { useState, type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { nav } from '../data/site'

const navLinks = [
  { id: 'about', es: 'Sobre mí', en: 'About' },
  { id: 'experience', es: 'Experiencia', en: 'Experience' },
  { id: 'projects', es: 'Proyectos', en: 'Projects' },
  { id: 'skills', es: 'Habilidades', en: 'Skills' },
  { id: 'publications', es: 'Publicaciones', en: 'Publications' },
  { id: 'contact', es: 'Contacto', en: 'Contact' },
]

const portfolioLinks = [
  { id: 'experiencia', es: 'Experiencia', en: 'Experience' },
  { id: 'proyectos-personales', es: 'Personales', en: 'Personal' },
  { id: 'proyectos-open-source', es: 'Código Abierto', en: 'Open Source' },
  { id: 'proyectos-escolares', es: 'Académicos', en: 'Academic' },
]

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname !== '/portafolio'
  const [menuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState<'sections' | 'portfolio' | null>(null)

  const closeAll = () => {
    setMenuOpen(false)
    setOpen(null)
  }

  const goSection = (id: string) => {
    closeAll()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate('/')
    setTimeout(() => {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  const goShowcase = () => {
    closeAll()
    navigate('/portafolio')
  }

  const goPortfolioSection = (id: string) => {
    closeAll()
    if (location.pathname === '/portafolio') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate('/portafolio')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  const goTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (!isHome) {
      closeAll()
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const toggle = (name: 'sections' | 'portfolio') =>
    setOpen((cur) => (cur === name ? null : name))

  return (
    <header className="navbar">
      <div className="container container--full navbar-inner">
        <a className="brand" href="/" onClick={goTop}>
          {t(nav.brand)}
          <span>.</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li className="nav-drop">
              <button
                type="button"
                className="nav-drop-btn"
                aria-expanded={open === 'sections'}
                onClick={() => toggle('sections')}
              >
                {lang === 'es' ? 'Secciones' : 'Sections'}
                <span className="caret">▾</span>
              </button>
              {open === 'sections' && (
                <ul className="nav-drop-menu">
                  <li>
                    <a
                      href="/"
                      className="nav-drop-cta"
                      onClick={(e) => {
                        e.preventDefault()
                        navigate('/')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        closeAll()
                      }}
                    >
                      {lang === 'es' ? 'Ver todo' : 'View all'}
                    </a>
                  </li>

                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          goSection(link.id)
                        }}
                      >
                        {link[lang]}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="nav-drop">
              <button
                type="button"
                className="nav-drop-btn"
                aria-expanded={open === 'portfolio'}
                onClick={() => toggle('portfolio')}
              >
                {lang === 'es' ? 'Portafolio' : 'Portfolio'}
                <span className="caret">▾</span>
              </button>
              {open === 'portfolio' && (
                <ul className="nav-drop-menu">
                  <li>
                    <a
                      href="/portafolio"
                      className="nav-drop-cta"
                      onClick={(e) => {
                        e.preventDefault()
                        goShowcase()
                      }}
                    >
                      {lang === 'es' ? 'Ver todo' : 'View all'}
                    </a>
                  </li>
                  {portfolioLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`/portafolio#${link.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          goPortfolioSection(link.id)
                        }}
                      >
                        {link[lang]}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <div className="nav-controls">
          <button
            type="button"
            className="btn-icon"
            onClick={toggleLang}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            className="btn-icon"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile">
          <div className="container">
            <ul>
              <li>
                <a href="/" className="nav-mobile-home" onClick={goTop}>
                  {lang === 'es' ? 'Inicio' : 'Home'}
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      goSection(link.id)
                    }}
                  >
                    {link[lang]}
                  </a>
                </li>
              ))}
              <li className="nav-mobile-label">
                {lang === 'es' ? 'Portafolio' : 'Portfolio'}
              </li>
              {portfolioLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`/portafolio#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      goPortfolioSection(link.id)
                    }}
                  >
                    {link[lang]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/portafolio"
                  className="nav-showcase"
                  onClick={(e) => {
                    e.preventDefault()
                    goShowcase()
                  }}
                >
                  {lang === 'es' ? 'Ver todo' : 'View all'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
