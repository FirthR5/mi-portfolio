import { useLocation } from 'react-router-dom'
import WorkShowcase from '../components/showcase/WorkShowcase'

export default function ShowcasePage() {
  const location = useLocation()
  const company = (location.state as { company?: string } | null)?.company
  return <WorkShowcase focusCompany={company} />
}