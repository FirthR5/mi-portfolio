import type { EmailParts } from '../data/types'

export function emailAddress({ user, host }: EmailParts): string {
  return `${user}@${host}`
}

export function mailtoHref(parts: EmailParts, subject?: string): string {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${emailAddress(parts)}${query}`
}