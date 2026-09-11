import type { ReactNode } from 'react'

export function ShowcaseBlock({
  title,
  children,
}: {
  title?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="showcase-block">
      {title && <h4 className="showcase-block-title">{title}</h4>}
      {children}
    </div>
  )
}
