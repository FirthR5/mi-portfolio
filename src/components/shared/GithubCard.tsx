import { useEffect, useState } from 'react'

interface RepoData {
  name: string
  full_name: string
  description: string | null
  owner: { login: string; avatar_url: string }
  stargazers_count: number
  forks_count: number
  language: string | null
  topics?: string[]
}

function repoPath(url: string): string | null {
  try {
    const { pathname } = new URL(url)
    const parts = pathname.split('/').filter(Boolean)
    if (parts.length >= 2) return `${parts[0]}/${parts[1]}`
    return null
  } catch {
    return null
  }
}

export function GithubCard({ url }: { url: string }) {
  const [repo, setRepo] = useState<RepoData | null>(null)
  const [error, setError] = useState(false)
  const path = repoPath(url)

  useEffect(() => {
    if (!path) return
    let cancelled = false
    fetch(`https://api.github.com/repos/${path}`)
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.json()
      })
      .then((data: RepoData) => {
        if (!cancelled) setRepo(data)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [path])

  if (!path || error) return null

  return (
    <a
      className="github-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {repo ? (
        <>
          <img
            className="github-card-avatar"
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            loading="lazy"
          />
          <div className="github-card-body">
            <span className="github-card-name">{repo.full_name}</span>
            <p className="github-card-desc">
              {repo.description || 'No description'}
            </p>
            <div className="github-card-meta">
              <span>★ {repo.stargazers_count.toLocaleString()}</span>
              <span>⑂ {repo.forks_count.toLocaleString()}</span>
              {repo.language && <span>{repo.language}</span>}
            </div>
          </div>
        </>
      ) : (
        <span className="github-card-loading">Loading…</span>
      )}
    </a>
  )
}
