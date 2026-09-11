import type { Skills } from './types'

export const skills: Skills = {
  heading: { es: 'Habilidades', en: 'Skills' },
  groups: [
    {
      label: { es: 'Lenguajes', en: 'Languages' },
      value: ['C#', 'Python', 'Kotlin', 'TypeScript', 'JavaScript', 'Bash', 'SQL', 'C/C++', 'Dart'],
    },
    {
      label: { es: 'Backend', en: 'Backend' },
      value: [
        '.NET',
        'ASP.NET MVC & Web API',
        'Entity Framework',
        'OData',
        'OAuth',
        'Azure Functions',
        'RabbitMQ',
      ],
    },
    {
      label: { es: 'Frontend', en: 'Frontend' },
      value: ['React 18', 'Angular 18', 'HTML', 'CSS/SCSS', 'Bootstrap', 'Tailwind', 'Syncfusion'],
    },
    {
      label: { es: 'Móvil', en: 'Mobile' },
      value: [
        '.NET MAUI XAML',
        'Kotlin/Java Android Studio',
        'React Native Expo Go',
        'Firebase',
        'Flutter',
      ],
    },
    {
      label: { es: 'Desktop', en: 'Desktop' },
      value: ['WinForms', 'WPF', 'Tkinter'],
    },
    {
      label: { es: 'Bases de Datos', en: 'Databases' },
      value: ['SQL Server', 'SQLite', 'Diseño de BD', 'Migraciones de esquema', 'Optimización de índices'],
    },
    {
      label: { es: 'Data/AI', en: 'Data/AI' },
      value: ['Django', 'Beautiful Soup 4', 'NLP', 'Machine Learning', 'Deep Learning', 'Ollama'],
    },
  ],
  languages: [
    {
      label: { es: 'Conceptos', en: 'Concepts' },
      value: [
        'MVVM',
        'MVC',
        'REST APIs',
        'Webhooks',
        'JWT',
        'SignalR',
        'Web push notifications',
        'Scrum',
      ],
    },
    {
      label: { es: 'Herramientas y Entorno', en: 'Tools & Environment' },
      value: ['Git', 'Unix (Mac/Linux)', 'Shell scripting', "NeoVim", 'LaTeX', 'Postman', 'Figma', 'GitHub Actions', 'Cursor', 'Copilot', 'Lovable', 'OpenCode', 'Claude'],
    },
  ],
  soft: [
    {
      label: { es: 'Idiomas', en: 'Languages' },
      value: [
        'Español nativo',
        'Inglés conversacional (B2)',
      ],
    },
    {
      label: { es: 'Habilidades Blandas', en: 'Soft Skills' },
      value: ['Aprendizaje continuo', 'Resolución de problemas', 'Orientación al detalle'],
    },
  ],
}
