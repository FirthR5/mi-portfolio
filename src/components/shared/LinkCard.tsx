import type { ProjectLink } from '../../data/types'

export function LinkCard({ link }: { link: ProjectLink }) {
  return (
    <a
      className="github-card"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="github-card-avatar github-card-favicon">
        <Favicon url={link.url} />
      </div>
      <div className="github-card-body">
        <span className="github-card-name">{link.label}</span>
        <span className="github-card-url">{link.url}</span>
      </div>
    </a>
  )
}

function faviconSrc(url: string): string | null {
  try {
    const { origin } = new URL(url)
    return `https://www.google.com/s2/favicons?domain=${origin}&sz=64`
  } catch {
    return null
  }
}

function Favicon({ url }: { url: string }) {
  const src = faviconSrc(url)
  if (!src) return null
  return <img src={src} alt="" width={44} height={44} loading="lazy" />
}
