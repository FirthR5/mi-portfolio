import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang, LocalizedText } from '../data/types'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: LocalizedText) => string
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const t = (text: LocalizedText) => text[lang]

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
