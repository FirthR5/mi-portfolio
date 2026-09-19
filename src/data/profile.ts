import { MediaSize } from './types'
import type {
  Contact,
  Summary,
  EducationItem,
  Experience,
} from './types'

export const contact: Contact = {
  name: 'Fernando Fernández Ríos',
  location: {
    es: 'Reynosa, Tamaulipas, México',
    en: 'Reynosa, Tamaulipas, Mexico',
  },
  email: {
    user: 'FernandoFdzRios7',
    host: ['Outlook', 'com'].join('.'),
  },
  //phone: '',
  linkedin: 'https://www.linkedin.com/in/fernando-f-rios',
  github: 'https://github.com/FirthR5',
  gitlab: 'https://gitlab.com/FirthR5/',
  codeberg: '',
  codeforces: '',
  downloadCvLabel: {
    es: 'Descargar CV',
    en: 'Download CV',
  },
}

export const summary: Summary = {
  roles: [
    {
      es: 'Ingeniero en Sistemas',
      en: 'Computer Systems Engineer',
    },
    {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    {
      es: '.NET Full-Stack',
      en: '.NET Full-Stack',
    },
  ],
  paragraph: {
    // Hola, me llamo Fernando.
    es: "Bienvenido a mi sitio web. Soy Fernando, un Ingeniero en Sistemas que se especializa en el área de Desarrollo de Software con más de 3 años de experiencia. He trabajado como Full Stack con .NET desarrollando sistemas web y en desarrollo de aplicaciones móviles.",
    en: "Welcome to my website. I'm Fernando, a Computer Systems Engineer specializing in Software Development with over 3 years of experience. I've worked as a Full Stack developer with .NET, building backend/frontend systems and mobile applications.",
  },
  objective: {
    es: 'Quiero sumarme a un equipo donde el software resuelva problemas de verdad, donde me reten cada día y donde cada producto lleve mi marca.',
    en: 'I want to join a team where software truly solves problems, where I\'m challenged every day, and where every product carries my mark.',
  },
  about_me: {
    /*
    es: 'Soy Ingeniero en Sistemas y desarrollador .NET Full-Stack: tomo ideas desde cero hasta producción. Mi código ha llegado a más de 70 mil usuarios, desde interfaces modernas y sincronización en tiempo real en móvil hasta la misma experiencia recreada en la web con React.',
    en: "I'm a Computer Systems Engineer and .NET Full-Stack developer who takes ideas from zero to production. My code has reached 70k+ users — from modern UIs and real-time sync on mobile to that same experience recreated on the web with React.",
    */
    es: 'Hola, soy Fernando, un Ingeniero en sistemas computacionales y profesionalmente me enfoco en el área de Desarrollo de Software. Tengo experiencia en el desarrollo de aplicaciones móviles y sistemas Web Full-Stack, en los cuales he trabajado en desarrollar diferentes sistemas y aplicaciones en mi trayectoria profesional, los cuales puede comprobar en la sección de \"Experiencia Profesional\" y \"Portafolio\".',
    en: "Hello, I'm Fernando, a Computer Systems Engineer and professionally I focus on Software Development. I have experience in developing mobile applications and Full-Stack Web systems, in which I have worked on developing different systems and applications throughout my professional career, which you can see in the \"Professional Experience\" and \"Portfolio\" sections.",
  }
}

export const education: EducationItem[] = [
  {
    institution: 'Universidad Autónoma de Tamaulipas (UAT)',
    location: 'Reynosa, Tamaulipas',
    degree: {
      es: 'Ingeniería en Sistemas Computacionales',
      en: "Bachelor's in Computer Systems Engineering",
    },
    period: {
      es: 'Agosto 2019 – Diciembre 2023',
      en: 'August 2019 – December 2023',
    },
    details: [
      { es: 'Promedio: 9.3', en: 'Overall GPA: 9.3' },
      { es: 'Testimonio EGEL: Satisfactorio', en: 'EGEL Testimony: Satisfactory' },
      { es: 'Titulación por Tesis: 12 de Mayo 2024', en: 'Thesis Completion: May 2024' },
    ],
  },
  {
    institution: 'Centro Universitario de Idiomas (CeUI, antes CELLAP)',
    location: 'Reynosa, Tamaulipas',
    degree: {
      es: 'Curso Avanzado de Inglés',
      en: 'Advanced English Course',
    },
    period: {
      es: 'Enero 2022 – Julio 2022',
      en: 'January 2022 – July 2022',
    },
    details: [{ es: 'Promedio: 9.8', en: 'Overall GPA: 9.8' }],
  },
]

export const experience: Experience = {
  heading: { es: 'Experiencia Profesional', en: 'Professional Experience' },
  jobs: [
    {
      title: {
        es: 'Desarrollador .NET Full-Stack',
        en: '.NET Full-Stack Developer',
      },
      company: 'ALSET',
      location: { es: 'Remoto', en: 'Remote' },
      period: {
        es: 'Agosto 2024 – Mayo 2026',
        en: 'August 2024 – May 2026',
      },
      technologies: [
        'C#',
        '.NET MAUI (MVVM)',
        'ASP.NET Web API',
        'ASP.NET MVC',
        'Syncfusion',
        'TypeScript',
        'Angular 18',
        'React 18',
        'Lovable',
        'SQL Server',
        'Entity Framework',
        'Azure Functions',
        'RabbitMQ',
        'SignalR',
        'Firebase',
        'React Native Expo',
        'Git',
        'Figma',
        'Scrum',
      ],
      groups: [
        {
          title: {
            es: 'Desarrollo Móvil con .NET MAUI',
            en: 'Mobile Development with .NET MAUI',
          },
          bullets: [
            {
              es: 'Trabajé como full-stack en una plataforma social de apuestas con +70 mil usuarios: móvil, web y backend, aportando funcionalidades, APIs y estabilidad en toda la plataforma.',
              en: 'Worked full-stack on a social betting platform with 70k+ users — mobile, web, and backend — delivering features, APIs, and stability across the stack.',
            },
            {
              es: 'Integré Firebase y Appsflyer para analítica y mensajería, implementé soporte multilingüe y optimicé SignalR para el chat y la sincronización en tiempo real de saldo, estado de apuestas y otros datos críticos.',
              en: 'Integrated Firebase and Appsflyer for analytics and messaging, implemented multilingual support and optimized SignalR for real-time chat plus synchronization of balance, bet status and other critical app data.',
            },
            {
              es: 'Modernicé la interfaz de la app en .NET MAUI a partir de prototipos en Figma, mejorando la experiencia de usuario y la consistencia visual.',
              en: 'Modernized the .NET MAUI app UI from Figma prototypes, improving user experience and visual consistency.',
            },
            {
              es: 'Migré una aplicación y sus proyectos Web de .NET 8 a .NET 9, resolviendo incompatibilidades de paquetes y manteniendo la continuidad operativa.',
              en: 'Migrated an application and its web projects from .NET 8 to .NET 9, resolving package incompatibilities and maintaining operational continuity.',
            },
            {
              es: 'Desarrollé una app móvil con React Native Expo, migrando funcionalidades clave de la app principal e integrando Expo Notifications y Google Analytics para notificaciones push y analítica de uso.',
              en: 'Developed a mobile app with React Native Expo, migrating key features from the main app and integrating Expo Notifications and Google Analytics for push notifications and usage analytics.',
            },
          ],
        },
        {
          title: {
            es: 'Desarrollo Backend, APIs y Gestión de Datos',
            en: 'Backend Development, APIs and Data Management',
          },
          bullets: [
            {
              es: 'Diseñé, desarrollé y mantuve APIs REST con ASP.NET; creé nuevos endpoints para la app móvil e integré OAuth para autenticación segura desde aplicaciones externas.',
              en: 'Designed, developed and maintained REST APIs with ASP.NET; created new endpoints for the mobile app and integrated OAuth for secure authentication from external applications.',
            },
            {
              es: 'Implementé integraciones con servicios externos mediante webhooks para automatizar flujos conectados a la API del sistema.',
              en: 'Implemented external service integrations through webhooks to automate workflows connected to the system API.',
            },
            {
              es: 'Creé y mantuve servicios serverless con Azure Functions para tareas asíncronas y procesos en segundo plano; utilicé RabbitMQ para gestionar colas de mensajes.',
              en: 'Created and maintained serverless services with Azure Functions for asynchronous and background tasks; used RabbitMQ for queue management.',
            },
            {
              es: 'Extendí el modelo de datos en SQL Server con Entity Framework, gestioné migraciones de esquema, optimicé índices y ejecuté scripts de actualización de datos.',
              en: 'Extended the SQL Server data model with Entity Framework, managed schema migrations, optimized indexes and executed scripts for data updates.',
            },
          ],
        },
        {
          title: {
            es: 'Desarrollo Web',
            en: 'Web Development',
          },
          bullets: [
            {
              es: 'Diseñé y desarrollé una app web en React 18 desde cero, replicando la app móvil: lógica de negocio, estado global, autenticación JWT, tiempo real con SignalR y notificaciones push; usé Lovable para prototipar las interfaces.',
              en: "Designed and built a React 18 web app from scratch replicating the mobile app: business logic, global state, JWT auth, SignalR real-time and push notifications; used Lovable for early UI prototyping.",
            },
            {
              es: 'En un equipo de 4, colaboré en un sistema web multi-tenant para inventario, compras, ventas y envíos (Web API + React): onboarding de merchants, gestión de órdenes, devoluciones e incidencias, notificaciones y webhooks con Zapier y Shopify; usé OData.',
              en: 'On a team of 4, collaborated on a multi-tenant web system for inventory, purchasing, sales and shipping (Web API + React): merchant onboarding, order management, returns and incidents, notifications and Zapier/Shopify webhooks; used OData.',
            },
            {
              es: 'Desarrollé y mejoré paneles de Backoffice con ASP.NET MVC, integrando OData y componentes de Syncfusion.',
              en: 'Developed and improved a backoffice web app with ASP.NET MVC, integrating OData queries and Syncfusion components.',
            },
            {
              es: 'Desarrollé desde cero un módulo de autenticación en Angular 18 con login, registro, recuperación de contraseña y verificación OTP para acceso seguro a un portal externo.',
              en: 'Built an authentication module in Angular 18 from scratch, including login, registration, password recovery and OTP verification for secure access to an external portal.',
            },
          ],
        },
      ],
      evidence: [
        {
          title: { es: 'StadioBet — Móvil (.NET MAUI)', en: 'StadioBet — Mobile (.NET MAUI)' },
          content: [
            {
              description: {
                es: "Aquí te muestro capturas de las diferentes secciones de la aplicación móvil durante el tiempo que estuve trabajando en ella.",
                en: "I'm going to show you some screenshots of the different sections of the mobile application during the time I was working on it."
              },
              layout: 'wide',
              items: [
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_1738180101.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot 2025-12-11 at 10.07.08 AM.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Simulator Screenshot - iPhone 17 Pro - 2025-12-02 at 09.11.19.avif' },

                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Simulator Screenshot - iPhone 17 Pro - 2025-11-28 at 14.24.28.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_20250923-192626_Stadiobet.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_20250923-191829_Stadiobet.avif' },

                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Simulator Screenshot - iPhone 14 - 2025-11-13 at 10.29.12.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot 2025-08-04 141048.avif' },

                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_20250602-173705_Stadiobet.avif' },

                { src: '/mi-portfolio/media/jobs/Alset/stadio/Screenshot from 2025-10-08 13-42-39.avif' },

              ]
            },

            {
              description: {
                es: "Modernización total de la interfaz. Compara antes y después arrastrando el slider.",
                en: "Complete interface modernization. Compare before and after by dragging the slider.",
              },
              layout: 'before-after',
              items: [
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/BeforeAfter/Notifications1After.avif', caption: { es: "Notificationes (Después)", en: "Notifications (After)" }, badge: { es: "Después", en: "After" } },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/BeforeAfter/Notifications1Before.avif', caption: { es: "Notificationes (Antes)", en: "Notifications (Before)" }, badge: { es: "Antes", en: "Before" } },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/BeforeAfter/Profile1After.avif', caption: { es: "Perfil (Después)", en: "Profile (After)" }, badge: { es: "Después", en: "After" } },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/BeforeAfter/Profile1Before.avif', caption: { es: "Perfil (Antes)", en: "Profile (Before)" }, badge: { es: "Antes", en: "Before" } },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/BeforeAfter/Chat1After.avif', caption: { es: "Chat (Después)", en: "Chat (After)" }, badge: { es: "Después", en: "After" } },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/BeforeAfter/Chat1Before.avif', caption: { es: "Chat (Antes)", en: "Chat (Before)" }, badge: { es: "Antes", en: "Before" } },
              ]
            },

          ],
          items: [
          ],
        },
        {
          title: { es: 'StadioBet — Web (React)', en: 'StadioBet — Web (React)' },
          content: [
            {
              description: {
                es: "La misma app, ahora para la Web: recreación completa en React con la misma experiencia de usuario.",
                en: "The same app, now for the Web: a full React recreation with the same user experience.",
              },
              layout: 'wide',
              items: [

                // TODO: Uncomment this when I already edit the video
                //{ src: '/mi-portfolio/media/jobs/Alset/stadio/Web/web-demo-2025-10-21.mov', size: MediaSize.Full },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Web/Screenshot_20251104-201718_Firefox.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Web/Screenshot_20251106-163316_Firefox.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Web/Screenshot_20251104-202236_Firefox.avif' },

                { src: '/mi-portfolio/media/jobs/Alset/stadio/Web/Screenshot 2025-10-21 at 9.49.59 AM.avif', size: MediaSize.Full },

              ]
            },
            {
description: {
                es: "Versión móvil desarrollada con React Native, independiente de la versión web.",
                en: "Mobile version built with React Native, separate from the web version.",
              },
              items: [
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/Expo/Screenshot_20260310-152210_stadiobet.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/Expo/Screenshot_20260310-154037_stadiobet.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/Expo/Screenshot_20260317-115305.avif' },
                // TODO: Uncomment this when I already edit the video
                //{ src: '/mi-portfolio/media/jobs/Alset/stadio/Mobile/Expo/mobile-demo-2026-03-17.mov', size: MediaSize.Full },
              ]
            },

          ],
          items: [
          ],
        },
        {
          title: { es: 'Sistema de inventario y pedidos', en: 'Inventory and Orders System' },
          content: [
            {
              description: {
                es: "Capturas del sistema que gestiona el flujo logístico completo: inventario, pedidos y envíos.",
                en: "Screenshots of the system managing the full logistics flow: inventory, orders and shipments.",
              },
              layout: 'slides',
              items: [
                { src: '/mi-portfolio/media/jobs/Alset/3pl/3pl-20260303-122134.avif', size: MediaSize.Full },
                { src: '/mi-portfolio/media/jobs/Alset/3pl/3pl-20260413-093441.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/3pl/3pl-20260429-155116.avif', },
                { src: '/mi-portfolio/media/jobs/Alset/3pl/3pl-20260410-144516.avif' },
                { src: '/mi-portfolio/media/jobs/Alset/3pl/3pl-20260318 130029.avif' },

              ],
            }
          ],
          items: [
          ],
        },
      ],
    },
    {
      title: {
        es: 'Innovación TI | Practicante',
        en: 'Innovation IT, Internship',
      },
      company: 'CENTRO COMERCIAL GUAJARDO SA DE CV',
      location: { es: 'Reynosa, Tamaulipas', en: 'Reynosa, Tamaulipas' },
      period: {
        es: 'Agosto 2023 – Diciembre 2023',
        en: 'August 2023 – December 2023',
      },
      technologies: ['C#', 'ASP.NET', 'IIS', 'SQL Server', 'JavaScript', 'jQuery', 'Kotlin', 'Android Studio'],
      groups: [
        {
          title: null,
          bullets: [
            {
              es: 'Desarrollé dos aplicaciones: un sistema web para cambios de precios y una app Android para inventario de activos por código QR.',
              en: 'Built two applications: a web system for price changes and an Android app for QR-based asset inventory.',
            },
            {
              es: 'En el sistema web implementé la importación de datos desde CSV, la visualización y edición de la información, y ciclos de autorización con flujos de aprobación de cambios.',
              en: 'On the web system I implemented CSV data imports, data visualization and editing, and authorization cycles with change approval workflows.',
            },
            {
              es: 'En la app Android desarrollé el inventario de activos mediante el escaneo de códigos QR.',
              en: 'On the Android app I built asset inventory through QR code scanning.',
            },
          ],
        },
      ],
      evidence: [
        {
          title: { es: 'Sistema web de precios y escaneo QR', en: 'Price system and QR scanning' },
          items: [
          ],
          content: [
            {
              description: {
                es: "Comparto algunas capturas del sistema web de cambios de precios que desarrollé.",
                en: "A few screenshots of the price-change web system I built.",
              },
              layout: 'wide',
              items: [
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231020_163745.avif' },
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231020_163756.avif' },
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231103_154116.avif' },
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231103_154123.avif' },
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231103_154138.avif' },
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231103_154106.avif' },
                { src: '/mi-portfolio/media/jobs/Guajardo/IMG_20231103_154040.avif' },

              ],
            }
          ]
        },
      ],
    },
    {
      title: {
        es: 'Desarrollador de Software | Servicio Social',
        en: 'Software Developer, Social Service',
      },
      company: 'CELLAP',
      location: { es: 'Reynosa, Tamaulipas', en: 'Reynosa, Tamaulipas' },
      period: {
        es: 'Julio 2022 – Febrero 2023',
        en: 'July 2022 – February 2023',
      },
      technologies: [
        'C#',
        'ASP.NET MVC',
        '.NET 7',
        'HTML',
        'CSS/SCSS',
        'JavaScript',
        'jQuery',
        'SQL Server',
        'Git',
        'GitHub',
      ],
      groups: [
        {
          title: null,
          bullets: [
            {
              es: 'Formé parte del equipo que diseñó y construyó varios sistemas desde cero, estos utilizados en operación diaria. Los más relevantes: exámenes de egreso de inglés, asistencia y agenda de visitas, encuestas de satisfacción y control académico.',
              en: 'Part of a team that designed and built systems from scratch, several in production. Most relevant: English graduation exams, attendance and visit scheduling, satisfaction surveys, and academic control.',
            },
            {
              es: 'Mejoré la mantenibilidad y continuidad operativa de un sistema de exámenes de egreso de inglés reconstruyéndolo desde cero en ASP.NET MVC (.NET 7) a partir de un sistema legado en ASP.NET Web Forms.',
              en: 'Improved maintainability and operational continuity of an English graduation exam system by rebuilding it from scratch in ASP.NET MVC (.NET 7) based on a legacy ASP.NET Web Forms system.',
            },
          ],
        },
      ],
      evidence: [
        {
          title: { es: 'Sistemas para la institución', en: 'Systems for the institution' },
          content: [{
            description: {
              es: "Comparto el sistema de exámenes funcionando en dos campus de la institución. Única evidencia que puedo compartir.",
              en: "The English exam system running in two campuses of the institution. The only evidence I can share."
            },
            layout: 'slides',
            items: [
              { src: '/mi-portfolio/media/jobs/Cellap/IMG_20220913_173406_307.avif', size: MediaSize.Full },
              { src: '/mi-portfolio/media/jobs/Cellap/IMG_20221001_110428_270.avif', size: MediaSize.Full },
            ]
          }],
          items: [
          ],
        },
      ],
    },
  ],
}
