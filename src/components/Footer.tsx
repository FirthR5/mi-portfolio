import { useLang } from '../context/LanguageContext'
import { site } from '../data/site'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* <div>{t(site.footerTagline)}</div> */}
        <div> © {new Date().getFullYear()} {site.name} </div>
        <div>{t(site.footerRights)}</div>

      </div>
    </footer>
  )
}
