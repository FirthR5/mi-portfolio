import { isLanguage } from '../../lib/tech'

export default function TechTag({ name }: { name: string }) {
  if (isLanguage(name)) {
    return <span className="skill-tag skill-tag--primary">{name}</span>
  }
  return <span className="skill-tag">{name}</span>
}