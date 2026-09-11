import type { MouseEvent, ReactNode } from 'react'
import type { EmailParts } from '../../data/types'
import { mailtoHref } from '../../lib/email'

interface EmailLinkProps {
  parts: EmailParts
  children: ReactNode
  className?: string
  label?: string
}

export default function EmailLink({ parts, children, className, label }: EmailLinkProps) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = mailtoHref(parts)
  }

  return (
    <a href="#" className={className} onClick={onClick} aria-label={label}>
      {children}
    </a>
  )
}