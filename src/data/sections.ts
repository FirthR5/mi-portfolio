import type { Interests, Publications, Training } from './types'

export const interests: Interests = {
  heading: { es: 'Intereses & Hobbies', en: 'Interests & Hobbies' },
  items: [
    {
      title: { es: 'Software & Sistemas', en: 'Software & Systems' },
      description: {
        es: 'Programación, IT, sistemas y Desarrollo de Software, con especial interés en el desarrollo móvil.',
        en: 'Programming, IT, systems and software development, with a special interest in mobile development.',
      },
    },
    {
      title: { es: 'Ecosistema Linux', en: 'Linux Ecosystem' },
      description: {
        es: 'Open source, automatización de procesos, scripting, self-hosting, tooling para terminal y desarrollo de utilidades para optimizar flujos de trabajo.',
        en: 'Open source, process automation, scripting, self-hosting, terminal tooling and building utilities to optimize workflows.',
      },
    },
    {
      title: { es: 'Desarrollo Móvil', en: 'Mobile Development' },
      description: {
        es: 'Me gusta mucho modificar aplicaciones móviles Open Source porque los puedo modificar a mi gusto y aportar a la comunidad.',
        en: 'I really enjoy modifying Open Source mobile applications because I can customize them to my liking and contribute to the community.',
      },
    },
    {
      title: { es: 'AI & Tooling', en: 'AI & Tooling' },
      description: {
        es: 'Despliegue de AI tooling self-hosted (Ollama), fundamentos de DNS, VPN y seguridad.',
        en: 'Self-hosted AI tooling (Ollama), foundational DNS, VPN and security skills.',
      },
    },
    /*
    {
      title: { es: 'Datos curiosos', en: 'More about me' },
      description: {
        // Desde niño me gusta mucho la programacion.
        // En la prepa estuve en una carrera tecnica de Redes y Telecopnunicaciones, donde aprendi mucho sobre redes y seguridad con Cisco.
        // Soy inquieto y me gusta aprender cosas nuevas, por eso me gusta mucho la tecnologia y la programacion.
        es: "",
        en: ""
      },
      // Size: Two Boxes
    },
    */
    {
      title: { es: 'Reparación de Hardware', en: 'Hardware Repair', },
      description: {
        es: "En mis tiempos libres me gusta reparar celulares y laptops, normalmente lo mio.",
        en: "In my free time I like to repair cell phones and laptops, usually my own.",
      },
    },
    {
      title: { es: 'Open Source', en: 'Open Source' },
      description: {
        es: "Me gusta mucho el Open Source y la comunidad de software libre porque puedo leer el codigo fuente, puedo usar su software sin restricciones y puedo contribuir a la comunidad. y aparte aprender de otros desarrolladores.",
        en: "I really like Open Source and the free software community because I can read the source code, I can use their software without restrictions and I can contribute to the community. and also learn from other developers.",
      },
    },

  ],
}

export const publications: Publications = {
  heading: { es: 'Publicaciones', en: 'Publications' },
  items: [
    {
      authors: {
        es: 'Fernando Fernandez Rios, Jose L. Martinez-Rodriguez, Melesio Crespo-Sanchez, Ana B. Rios-Alvarado, Fernando Ortiz-Rodriguez y Tania Y. Guerrero-Melendez.',
        en: 'Fernando Fernandez Rios, Jose L. Martinez-Rodriguez, Melesio Crespo-Sanchez, Ana B. Rios-Alvarado, Fernando Ortiz-Rodriguez, and Tania Y. Guerrero-Melendez.',
      },
      title: {
        es: 'Exploring Text Vectorization on the Polarity Detection of Spanish Comments',
        en: 'Exploring Text Vectorization on the Polarity Detection of Spanish Comments',
      },
      venue: {
        es: 'En Electronic Governance with Emerging Technologies, Springer, 2025, pp. 185–197.',
        en: 'In Electronic Governance with Emerging Technologies, Springer, 2025, pp. 185–197.',
      },
      doiUrl: 'https://doi.org/10.1007/978-3-031-77029-6_15',
      doi: '10.1007/978-3-031-77029-6_15',
    },
  ],
}

export const training: Training = {
  heading: {
    es: 'Formación Continua Profesional',
    en: 'Professional Training',
  },
  items: [
    {
      provider: 'Platzi',
      name: {
        es: 'Curso de Principios SOLID en C# y .NET',
        en: 'SOLID Principles in C# and .NET Course',
      },
      hours: {
        es: '16 horas',
        en: '16 hours',
      },
      detail: {
        es: 'Aprobado el 15 de junio de 2026',
        en: 'Passed on June 15, 2026',
      },
      url: 'https://platzi.com/p/ferdfr_dev/curso/4761-solid-csharp-net/diploma/detalle/',
    },
    {
      provider: 'Udemy',
      name: {
        es: 'Jetpack Compose: Curso definitivo desde 0',
        en: 'Jetpack Compose: Definitive Course from 0',
      },
      hours: {
        es: '27.5 horas',
        en: '27.5 hours',
      },
      detail: {
        es: 'Aprobado el 5 de abril de 2026',
        en: 'Passed on April 5, 2026',
      },
      url: 'https://www.udemy.com/certificate/UC-7283e356-d94b-4fac-afc7-2e7d9d6ae3d8/',
    },
    {
      provider: 'Platzi',
      name: {
        es: 'Curso de Scrum Profesional',
        en: 'Professional Scrum Course',
      },
      hours: {
        es: '14 horas',
        en: '14 hours',
      },
      detail: {
        es: 'Aprobado el 29 de marzo de 2026',
        en: 'Passed on March 29, 2026',
      },
      url: 'https://platzi.com/p/ferdfr_dev/curso/12146-course/diploma/detalle/',
    },
    {
      provider: 'Platzi',
      name: {
        es: 'Curso de Buenas Prácticas y Código Limpio en C#',
        en: 'Clean Code and Best Practices in C# Course',
      },

      hours: {
        es: '10 horas',
        en: '10 hours',
      },

      detail: {
        es: 'Aprobado el 22 de marzo de 2026',
        en: 'Passed on March 22, 2026',
      },
      url: 'https://platzi.com/p/ferdfr_dev/curso/4788-course/diploma/detalle/',
    },
    {
      provider: 'Udemy',
      name: {
        es: 'Microsoft Azure for .NET Developers',
        en: 'Microsoft Azure for .NET Developers',
      },
      hours: {
        es: '13 horas',
        en: '13 hours',
      },

      detail: {
        es: 'Expedición, junio 2025',
        en: 'Issued, June 2025',
      },
      url: 'https://www.udemy.com/certificate/UC-92eccb91-20ad-48f6-9202-8e5ad259eaa8/',
    },
    {
      provider: 'Udemy',
      name: {
        es: 'Complete Linux Training Course to Get Your Dream IT Job',
        en: 'Complete Linux Training Course to Get Your Dream IT Job',
      },
      hours: {
        es: '41 horas',
        en: '41 hours',
      },
      detail: {
        es: 'Completado el 31 de mayo de 2025',
        en: 'Completed on May 31, 2025',
      },
      url: 'https://www.udemy.com/certificate/UC-45be5034-96d8-436d-a853-34aa00f9841b/',
    },
    {
      provider: 'Mendix',
      name: {
        es: 'Rapid Developer - Low Code',
        en: 'Rapid Developer - Low Code',
      },
      detail: {
        es: 'Expedición, marzo 2024 · ID 70685',
        en: 'Issued, March 2024 · ID 70685',
      },
      url: 'https://www.linkedin.com/in/fernando-f-rios/details/certifications/',
    },
  ],
}
