const LANGUAGES = new Set([
  'c#',
  'python',
  'kotlin',
  'typescript',
  'javascript',
  'bash',
  'sql',
  'sql server',
  'c/c++',
  'c++',
  'dart',
  'html',
  'css',
  'css/scss',
  'scss',
  'sass',
])

export function isLanguage(name: string): boolean {
  const normalized = name.toLowerCase().trim()
  if (LANGUAGES.has(normalized)) return true
  const first = normalized.split('/')[0].trim()
  return LANGUAGES.has(first)
}