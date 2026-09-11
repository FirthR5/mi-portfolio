import { useState, type ReactNode } from 'react'
import { useLang } from '../../context/LanguageContext'
import { ShowcaseBlock } from './ShowcaseBlock'

export function CollapsibleShowcaseBlock({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) {
  const { t } = useLang()
  const [hidden, setHidden] = useState(false)
  const label = hidden ? t({ es: 'Mostrar', en: 'Show' }) : t({ es: 'Ocultar', en: 'Hide' })

  return (
    <ShowcaseBlock
      title={
        <span className="showcase-project-head">
          <span>{title}</span>
          <button
            type="button"
            className="showcase-toggle"
            onClick={() => setHidden((h) => !h)}
            aria-expanded={!hidden}
          >
            {label} {hidden ? '▸' : '▾'}
          </button>
        </span>
      }
    >
      {!hidden && children}
    </ShowcaseBlock>
  )
}