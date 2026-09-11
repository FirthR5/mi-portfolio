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
    es: "Bienvenido a mi sitio web. Soy Fernando, un Ingeniero en Sistemas que se especializa en el área de Desarrollo de Software con más de 2 años de experiencia en el que he trabajado en el desarrollo de aplicaciones móviles y sistemas Web (Full-Stack).",
    en: "Welcome to my website. I'm Fernando, a Computer Systems Engineer specializing in Software Development with over 2 years of experience working on mobile applications and web systems (Full-Stack).",
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
        es: 'Agosto 2024 – Junio 2026',
        en: 'August 2024 – June 2026',
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
              es: 'Desarrollé nuevas funcionalidades, corregí incidencias y mejoré la estabilidad de una app móvil social de apuestas con más de 70 mil usuarios en Android e iOS.',
              en: 'Developed new features, fixed bugs and improved the stability of a social betting mobile app with more than 70k users on Android and iOS.',
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
              es: 'Diseñé y desarrollé toda una aplicación web en React 18 desde cero, replicando funcionalidades clave de la app móvil social existente. Implementé lógica de negocio, navegación y estado global, con autenticación JWT, tiempo real con SignalR, web push notifications y autorización por perfiles; usé Lovable para acelerar el prototipado inicial de interfaces.',
              en: "Designed and developed an end-to-end React 18 web app from scratch, replicating key features of the existing social mobile app. Fully implemented business logic, navigation flows and global state, including JWT authentication, SignalR real-time communication, web push notifications and profile-based authorization; used Lovable to accelerate early UI prototyping.",
            },
            {
              es: 'En un equipo de 4 desarrolladores, colaboré en el desarrollo de un sistema web multi-tenant para gestión de inventario, compras, ventas y envíos. Trabajé en Web API y Frontend con React, cubriendo: onboarding de merchants, gestión de órdenes, control de inventario, flujo de devoluciones e incidencias, notificaciones, webhooks con Zapier y Shopify, y utilicé OData.',
              en: 'As part of a team of 4 developers, I collaborated in the development of a multi-tenant web system for inventory, purchasing, sales and shipping management. I worked on Web API and React frontend, covering: merchant onboarding, purchase and sales order management, inventory control, returns and incidents flow, notifications, webhooks with Zapier and Shopify, and used OData.',
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
                es: "Durante este proyecto estuve realizando muchas cosas como mencione en la sección de \"Experiencia Profesional\", pero aquí te muestro capturas de como quedo la aplicación durante mi tiempo. Primero comenzando como quedo la aplicación en diferentes secciones.",
                en: "In this project I was doing many things as I mention in the \"Experience\" section, but here I show you screenshots of how the application turned out during my time. First starting with how the application turned out."
              },
              layout: 'wide',
              items: [
                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_1738180101.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot 2025-12-11 at 10.07.08 AM.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Simulator Screenshot - iPhone 17 Pro - 2025-12-02 at 09.11.19.avif' },

                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Simulator Screenshot - iPhone 17 Pro - 2025-11-28 at 14.24.28.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_20250923-192626_Stadiobet.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_20250923-191829_Stadiobet.avif' },

                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Simulator Screenshot - iPhone 14 - 2025-11-13 at 10.29.12.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot 2025-08-04 141048.avif' },

                { src: '/media/jobs/Alset/stadio/Mobile/MAUI/Screenshot_20250602-173705_Stadiobet.avif' },

                { src: '/media/jobs/Alset/stadio/Screenshot from 2025-10-08 13-42-39.avif' },

              ]
            },

            {
              description: {
                es: "Continuamos... Algo que hice fue rediseñar y optimizar la aplicación para hacerlo moderno. Aquí una muestra del rediseño del antes y después (cada diapositiva está etiquetada como Antes o Después).",
                en: "One of the things I did was redesign and optimize the app to make it modern. Here's a sample of the before and after redesign I did. Each slide is labeled as Before or After."
              },
              layout: 'before-after',
              items: [
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Notifications1After.avif', caption: { es: "Notificationes (Después)", en: "Notifications (After)" }, badge: { es: "Después", en: "After" } },
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Notifications1Before.avif', caption: { es: "Notificationes (Antes)", en: "Notifications (Before)" }, badge: { es: "Antes", en: "Before" } },
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Profile1After.avif', caption: { es: "Perfil (Después)", en: "Profile (After)" }, badge: { es: "Después", en: "After" } },
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Profile1Before.avif', caption: { es: "Perfil (Antes)", en: "Profile (Before)" }, badge: { es: "Antes", en: "Before" } },
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Profile2Before.avif', caption: { es: "Perfil (Antes)", en: "Profile (Before)" }, badge: { es: "Antes", en: "Before" } },
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Chat1After.avif', caption: { es: "Chat (Después)", en: "Chat (After)" }, badge: { es: "Después", en: "After" } },
                { src: '/media/jobs/Alset/stadio/Mobile/BeforeAfter/Chat1Before.avif', caption: { es: "Chat (Antes)", en: "Chat (Before)" }, badge: { es: "Antes", en: "Before" } },
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
                es: "También recreé completamente la aplicación pero ahora para que estuviera en la Web. A continuación les muestro algunas capturas de pantalla que hice de como se ve la aplicación en la Web.",
                en: "Later I completely recreated the application but now for the Web. Below I show you some screenshots I took of how the application looks on the Web.",
              },
              layout: 'wide',
              items: [

                // TODO: Uncomment this when I already edit the video
                //{ src: '/media/jobs/Alset/stadio/Web/web-demo-2025-10-21.mov', size: MediaSize.Full },
                { src: '/media/jobs/Alset/stadio/Web/Screenshot_20251104-201718_Firefox.avif' },
                { src: '/media/jobs/Alset/stadio/Web/Screenshot_20251106-163316_Firefox.avif' },
                { src: '/media/jobs/Alset/stadio/Web/Screenshot_20251104-202236_Firefox.avif' },

                { src: '/media/jobs/Alset/stadio/Web/Screenshot 2025-10-21 at 9.49.59 AM.avif', size: MediaSize.Full },

              ]
            },
            {
              description: {
                es: "React Native: Para finalizar también readapte la app pero ahora usando React Native para móvil (Nota: no confundir con React web). Aquí algunas capturas de pantalla de como se ve la app en React Native.",
                en: ""
              },
              items: [
                { src: '/media/jobs/Alset/stadio/Mobile/Expo/Screenshot_20260310-152210_stadiobet.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/Expo/Screenshot_20260310-154037_stadiobet.avif' },
                { src: '/media/jobs/Alset/stadio/Mobile/Expo/Screenshot_20260317-115305.avif' },
                // TODO: Uncomment this when I already edit the video
                //{ src: '/media/jobs/Alset/stadio/Mobile/Expo/mobile-demo-2026-03-17.mov', size: MediaSize.Full },
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
                es: "También estuve involucrado en el desarrollo de un sistema para la gestión de inventario, pedidos y envíos. A continuación se muestran algunas capturas de pantalla del sistema.",
                en: "I was also involved in the development of a system for inventory, orders and shipments management. Below are some screenshots of the system."
              },
              layout: 'slides',
              items: [
                { src: '/media/jobs/Alset/3pl/3pl-20260303-122134.avif', size: MediaSize.Full },
                { src: '/media/jobs/Alset/3pl/3pl-20260413-093441.avif' },
                { src: '/media/jobs/Alset/3pl/3pl-20260429-155116.avif', },
                { src: '/media/jobs/Alset/3pl/3pl-20260410-144516.avif' },
                { src: '/media/jobs/Alset/3pl/3pl-20260318 130029.avif' },

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
              es: 'Contribuí al desarrollo de dos aplicaciones: un sistema web para cambios de precios y una aplicación Android para inventario de activos mediante códigos QR. Implementé la importación de datos desde archivos CSV a la base de datos, la visualización y edición de la información, así como ciclos de autorización y flujos de aprobación de cambios, junto con la funcionalidad de escaneo de códigos QR.',
              en: 'Contributed to the development of two applications: a web platform for product price updates and an Android app for QR-based asset inventory. Implemented CSV-to-database import flows, data visualization and editing features, approval workflows and QR scanning.',
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
                es: "Únicamente cuento con esta evidencia de la aplicación web de cambios de precios. Aquí se puede ver algunas fotos de como se ve la aplicación web.",
                en: "I only have this evidence of the web application for price changes. Here you can see some photos of how the web application looks."
              },
              layout: 'wide',
              items: [
                { src: '/media/jobs/Guajardo/IMG_20231020_163745.avif' },
                { src: '/media/jobs/Guajardo/IMG_20231020_163756.avif' },
                { src: '/media/jobs/Guajardo/IMG_20231103_154116.avif' },
                { src: '/media/jobs/Guajardo/IMG_20231103_154123.avif' },
                { src: '/media/jobs/Guajardo/IMG_20231103_154138.avif' },
                { src: '/media/jobs/Guajardo/IMG_20231103_154106.avif' },
                { src: '/media/jobs/Guajardo/IMG_20231103_154040.avif' },

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
              es: 'Formé parte de un equipo de desarrollo donde diseñamos y construimos sistemas desde cero para la institución, varios de ellos puestos en producción y utilizados en la operación diaria. Los más relevantes: un sistema de exámenes de egreso de inglés, un sistema de asistencia y agenda de visitas, un sistema de encuesta de satisfacción y un sistema de control académico.',
              en: 'Worked as part of the development team to design and build systems from scratch for the institution, several of which were deployed and actively used in daily operations. The most relevant were an English graduation exam system, an attendance and visit scheduling system, a student satisfaction survey system and an academic control system.',
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
              es: "Únicamente cuento evidencia del sistema del examen, y a continuación les muestro como esta puesto en acción en dos diferentes campus de la institución.",
              en: "I only have evidence of the exam system, and below I show you how it is put into action in two different campuses of the institution."
            },
            layout: 'slides',
            items: [
              { src: '/media/jobs/Cellap/IMG_20220913_173406_307.avif', size: MediaSize.Full },
              { src: '/media/jobs/Cellap/IMG_20221001_110428_270.avif', size: MediaSize.Full },
            ]
          }],
          items: [
          ],
        },
      ],
    },
  ],
}
