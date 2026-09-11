import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import Training from '../components/Training'
import Interests from '../components/Interests'
import Contact from '../components/Contact'

export default function HomePage() {
  const navigate = useNavigate()

  const openShowcase = (company: string) =>
    navigate('/portafolio', { state: { company } })

  return (
    <>
      <Hero />
      <About />
      <Experience onOpenShowcase={openShowcase} />
      <Projects onOpenShowcase={() => navigate('/portafolio')} />
      <Skills />
      <Publications />
      <Training />
      <Interests />

      <Contact />
    </>
  )
}
