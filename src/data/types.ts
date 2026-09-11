export type Lang = 'es' | 'en'

export type LocalizedText = {
  es: string
  en: string
}

export interface EmailParts {
  user: string
  host: string
}

export interface Contact {
  name: string
  location: LocalizedText
  email: EmailParts
  //phone: string
  linkedin: string
  github: string
  gitlab: string
  codeberg: string
  codeforces: string
  downloadCvLabel: LocalizedText
}

export interface Summary {
  roles: LocalizedText[]
  paragraph: LocalizedText
  objective: LocalizedText
  about_me: LocalizedText
}

export interface EducationItem {
  institution: string
  location: string
  degree: LocalizedText
  period: LocalizedText
  details: LocalizedText[]
}

export interface JobGroup {
  title: LocalizedText | null
  bullets: LocalizedText[]
}

export enum MediaSize {
  Full = 'full',
}

export interface MediaItem {
  src: string
  caption?: LocalizedText
  /**
   * Short overlaid chip shown on slides, e.g. "Antes" / "Después" for
   * before-after comparisons.
   */
  badge?: LocalizedText
  /**
   * Layout override.
   * - `MediaSize.Full`: renders full-width, stacked (good for videos/portraits
   *   that deserve the whole row).
   * - undefined: default masonry (1/3 width column).
   */
  size?: MediaSize
}

export type MediaLayout = 'grid' | 'grid-full' | 'masonry' | 'wide' | 'hero-strip' | 'slides' | 'before-after'

/*
 Evidence of the Job
*/
export interface JobMediaBlock {
  title?: LocalizedText
  // TOD: Delete this one
  items: MediaItem[],
  content?: ProjectContent[]
}

export interface ProjectContent {
  description: LocalizedText,
  items: MediaItem[],
  /** How the group's media is presented. Defaults to `'grid'`. */
  layout?: MediaLayout
}

// JobMediaBlock[] > ProjectContent > MediItem[]

//  [Id, Description/Caption, MediaItem[]]

/*
  JobItem represents a single job experience,
  including the company, title, location, period, technologies used,
  and any evidence (media) associated with the job.
*/
export interface JobItem {
  title: LocalizedText
  company: string
  location: LocalizedText
  period: LocalizedText
  technologies: string[]
  groups: JobGroup[]
  evidence?: JobMediaBlock[]
}

export interface Experience {
  heading: LocalizedText
  jobs: JobItem[]
}

export interface ProjectLink {
  label: string
  url: string
}

export enum ProjectType {
  Commercial = 'commercial',
  College = 'college',
  Personal = 'personal',
  Thesis = 'thesis',
  OpenSource = 'openSource',
}

export interface Project {
  name: LocalizedText
  /** Sortable start date, e.g. "2021-03" or "2024". Used to order projects. */
  startDate: string
  period: LocalizedText
  category: LocalizedText
  type: ProjectType
  highlight?: LocalizedText
  links?: ProjectLink[]
  repoUrl?: string
  description: LocalizedText[]
  technologies: string
  showcaseComment?: LocalizedText
  mediaLayout?: MediaLayout
  media?: MediaItem[]
}

export interface MediaDemo {
  label: LocalizedText
  src: string
  caption: LocalizedText
}

export interface Projects {
  heading: LocalizedText
  heading2: LocalizedText
  items: Project[]
  openSource: {
    heading: LocalizedText
    items: Project[]
  }
}

export interface Skill {
  label: LocalizedText
  value: string[]
}

export interface Skills {
  heading: LocalizedText
  groups: Skill[]
  languages: Skill[]
  soft: Skill[]
}

export interface Interest {
  title: LocalizedText
  description: LocalizedText
}

export interface Interests {
  heading: LocalizedText
  items: Interest[]
}

export interface Publication {
  authors: LocalizedText
  title: LocalizedText
  venue: LocalizedText
  doiUrl: string
  doi: string
}

export interface Publications {
  heading: LocalizedText
  items: Publication[]
}

export interface TrainingItem {
  provider: string
  name: LocalizedText
  /** Optional duration, e.g. "16 horas"/"16 hours". Shown near the provider. */
  hours?: LocalizedText
  /** Completion/issue date. */
  detail: LocalizedText
  url: string
}

export interface Training {
  heading: LocalizedText
  items: TrainingItem[]
}
