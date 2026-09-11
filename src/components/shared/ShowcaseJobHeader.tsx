import type { LocalizedText } from '../../data/types'
import { useLang } from '../../context/LanguageContext'
import type { ReactNode } from 'react'

export function ShowcaseJobHeader({
  heading,
  subtitle,
  location,
  period,
}: {
  heading: LocalizedText | string
  subtitle?: LocalizedText
  location?: LocalizedText
  period?: LocalizedText
  children?: ReactNode
}) {
  const { t } = useLang()
  return (
    <header className="showcase-head">
      <div className="showcase-head-row">
        <h3>{typeof heading === 'string' ? heading : t(heading)}</h3>
        {location && <div className="showcase-location">{t(location)}</div>}
      </div>

      {(subtitle || period) && (
        <div className="showcase-head-row">
          {subtitle && <span>{t(subtitle)}</span>}
          {period && <span>{t(period)}</span>}
        </div>
      )}
    </header>
  )
}
