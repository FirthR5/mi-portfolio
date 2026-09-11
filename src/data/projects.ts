import { MediaSize, ProjectType, type Projects } from './types'

export const projects: Projects = {
  heading: { es: 'Proyectos', en: 'Projects' },
  heading2: { es: 'Proyectos Personales y de Código Abierto', en: 'Personal and Open Source Projects' },
  items: [
    {
      name: {
        es: 'Handyman – Sistema de Gestión de Negocio',
        en: 'Handyman – Business Management System',
      },
      startDate: '2025-11',
      period: {
        es: 'Noviembre – Diciembre 2025 (Proyecto Comercial)',
        en: 'November – December 2025 (Commercial Project)',
      },
      category: { es: 'Proyecto Comercial', en: 'Commercial Project' },
      type: ProjectType.Commercial,
      description: [
        {
          es: 'Desarrollé una plataforma completa de gestión para un negocio de manitas (handyman). El sistema administra citas, trabajos con estados y pagos, cotizaciones, facturas, clientes y evidencias fotográficas, todo expuesto a través de una API REST segura con autenticación.',
          en: 'Built a full management platform for a handyman business. The system manages appointments, jobs with statuses and payments, quotes, invoices, clients, and photo evidence, all exposed through a secure REST API with authentication.',
        },
        {
          es: 'Incluye un panel con métricas (trabajos por semana, pagos pendientes, pipeline), firma digital del cliente al terminar trabajos, y seguimiento de pagos y cobros.',
          en: 'Includes a dashboard with metrics (jobs per week, pending payments, pipeline), digital client signatures when finishing jobs, and payment/collection tracking.',
        },
      ],
      technologies: '.NET 8, C#, Entity Framework Core, SQL Server, React, TypeScript, Tailwind CSS, shadcn-ui, JWT',
      showcaseComment: {
        es: 'Plataforma de gestión comercial: citas, trabajos, pagos y facturas.',
        en: 'Commercial management platform: appointments, jobs, payments, and invoices.',
      },
      media: [
        { src: '/mi-portfolio/media/proj/handy/h264_2026-02-04 23-05-14.mp4', size: MediaSize.Full },
        { src: '/mi-portfolio/media/proj/handy/h264_2026-02-04 23-19-16.mp4', size: MediaSize.Full },
      ],
    },
    {
      name: {
        es: 'Restaurant PoS – Sistema de Pedidos',
        en: 'Restaurant PoS – Ordering System',
      },
      startDate: '2021-03',
      period: {
        es: 'Marzo 2021 – Abril 2021 (Proyecto Universitario)',
        en: 'March 2021 – April 2021 (College Project)',
      },
      category: { es: 'Proyecto Universitario', en: 'College Project' },
      type: ProjectType.College,
      description: [
        {
          es: 'Desarrollé un sistema de gestión de restaurante que agiliza los pedidos, pagos y tareas administrativas. Los meseros toman pedidos en tablets mediante la WebApp, permitiendo modificaciones y cancelaciones; los pedidos fluyen a la cocina, donde los chefs marcan el progreso. Los administradores acceden a datos de rendimiento del personal y platos populares, y pueden administrar el menú.',
          en: 'Built a restaurant management program to streamline orders, payments, and admin tasks. Waiters take orders on their tablets using the WebApp, allowing modifications and cancellations. Orders flow to the kitchen for preparation, where chefs track progress. Admins access employee performance and popular dish data, and can manage menus.',
        },
      ],
      technologies: 'C#, SQL Server, Windows Forms, ASP.NET, JavaScript, Entity Framework',
      mediaLayout: 'slides',
      showcaseComment: {
        es: 'Flujo completo de pedidos: mesero, cocina y caja, en videoclips.',
        en: 'Full ordering flow — waiter, kitchen, and cash register — in clips.',
      },
      media: [
        { src: '/mi-portfolio/media/poS/WorkFlow_Admin.mp4', size: MediaSize.Full },
        { src: '/mi-portfolio/media/poS/WorkFlow_Waiter-Chef-CashReg.mp4', size: MediaSize.Full },
      ],
    },
    {
      name: {
        es: 'GYM Management System',
        en: 'GYM Management System',
      },
      startDate: '2024',
      period: {
        es: '2024',
        en: '2024',
      },
      category: { es: 'Proyecto Personal', en: 'Personal Project' },
      type: ProjectType.Personal,
      description: [
        {
          es: 'Desarrollé un sistema de gestión de gimnasio para administrar membresías, ventas e inventario. Funcionalidades: registro de nuevos miembros y membresías, seguimiento de asistencia según el tipo de membresía, y gestión de inventario (suplementos y bebidas) y ventas. Usa el patrón de arquitectura MVVM, Background Tasks y triggers de base de datos, con Entity Framework.',
          en: 'Developed a gym management system to streamline member management, sales, and inventory. Functions: register new members and memberships, track attendance based on membership type, and manage inventory (supplements and beverages) and sales. Uses the MVVM architecture pattern, Background Tasks and DB triggers, fully with Entity Framework.',
        },
      ],
      technologies: 'C#, SQL Server, WPF XAML, Entity Framework',
      showcaseComment: {
        es: 'Membresías, asistencia, inventario y ventas en una app de escritorio.',
        en: 'Memberships, attendance, inventory, and sales in a desktop app.',
      },
      media: [{ src: '/mi-portfolio/media/gym/SecondProject.mp4', size: MediaSize.Full }],
    },
    {
      name: {
        es: 'Tracker de Precios de Productos en Línea',
        en: 'Online Store Price Tracker',
      },
      startDate: '2024-06',
      period: {
        es: 'Junio 2024 – Diciembre 2024',
        en: 'June 2024 – December 2024',
      },
      category: { es: 'Proyecto Personal', en: 'Personal Project' },
      type: ProjectType.Personal,
      description: [
        {
          es: 'Desarrollé una herramienta web de monitoreo de precios para uso personal utilizando técnicas de Web Scraping para recopilar diariamente datos de productos en Mercado Libre, Soriana y Coppel.',
          en: 'Developed a web-based price monitoring tool using Web Scraping to collect daily product data from Mercado Libre, Soriana, and Coppel.',
        },
        {
          es: 'Objetivo: identificar descuentos y determinar el mejor precio disponible.',
          en: 'Identifies price drops and determines the best available discount.',
        },
      ],
      technologies: 'Python, Django, Beautiful Soup 4, SQLite, Design Patterns (Strategy, Repository)',
      mediaLayout: 'hero-strip',
      showcaseComment: {
        es: 'Precios diarios por web scraping desde Mercado Libre, Soriana y Coppel.',
        en: 'Daily prices via web scraping from Mercado Libre, Soriana, and Coppel.',
      },
      media: [
        { src: '/mi-portfolio/media/proj/tracker/code-project.avif', size: MediaSize.Full },
        { src: '/mi-portfolio/media/proj/tracker/price-history-wallet.avif' },
        { src: '/mi-portfolio/media/proj/tracker/price-history-dumbbells.avif' },
        { src: '/mi-portfolio/media/proj/tracker/discounts-table.avif' },
        { src: '/mi-portfolio/media/proj/tracker/discounts-cards.avif' },
        { src: '/mi-portfolio/media/proj/tracker/product-list-1.avif' },
        { src: '/mi-portfolio/media/proj/tracker/products-list.avif' },
        { src: '/mi-portfolio/media/proj/tracker/search-results.avif' },
        { src: '/mi-portfolio/media/proj/tracker/search-no-results.avif' },

      ]
    },
    {
      name: {
        es: 'Sistema de Minería de Opiniones en Español',
        en: 'Opinion Mining System in Spanish',
      },
      startDate: '2023-02',
      period: {
        es: 'Febrero 2023 – Mayo 2024',
        en: 'February 2023 – May 2024',
      },
      category: {
        es: 'Tesis Universitaria',
        en: 'University Thesis',
      },
      type: ProjectType.Thesis,
      links: [
        {
          label: 'Titulación por Tesis de Universidad',
          url: 'https://www.facebook.com/photo/?fbid=1346231086317975',
        },
      ],
      description: [
        {
          es: 'Desarrollé diferentes modelos de clasificación automática de opiniones a partir de estrategias de vectorización híbridas y modelos de clasificación supervisados utilizando como base el Machine Learning y Deep Learning.',
          en: 'Developed multiple automatic opinion classification models based on hybrid vectorization strategies and supervised Machine Learning and Deep Learning models.',
        },
        {
          es: 'Propósito: identificar y analizar opiniones en tweets en español sobre política en México para entender la percepción pública. También experimenté comparando modelos de vectorización híbrida contra vectorizaciones normales para conocer cuál daba mejores resultados.',
          en: 'Purpose: identify and analyze Spanish-language tweets about politics in Mexico to understand public perception. I also experimented comparing hybrid vectorization models against normal vectorizations to see which performed better.',
        },
      ],
      technologies: 'Python, Scikit-Learn, Keras, Gensim, SpaCy, NLTK',
      mediaLayout: 'hero-strip',
      showcaseComment: {
        es: 'Clasificación de opiniones en tweets sobre política mexicana con ML / Deep Learning.',
        en: 'Classifies opinion tweets about Mexican politics using ML / Deep Learning.',
      },
      media: [
        { src: '/mi-portfolio/media/proj/opinion/dms-screenshot-1788861969985.avif', size: MediaSize.Full },
        { src: '/mi-portfolio/media/proj/opinion/IMG_20230410_210139546.avif' },
        { src: '/mi-portfolio/media/proj/opinion/Screenshot from 2023-06-08 16-12-02.avif' },
        { src: '/mi-portfolio/media/proj/opinion/Screenshot from 2023-06-09 00-41-32.avif' },

      ]
    },
  ],
  openSource: {
    heading: { es: 'Código Abierto', en: 'Open Source' },
    items: [
      {
        name: {
          es: 'Linux-NitroSense',
          en: 'Linux-NitroSense',
        },
        startDate: '2026-06',
        period: {
          es: 'Mayo – Junio 2026',
          en: 'May – June 2026',
        },
        category: { es: 'Contribución', en: 'Contribution' },
        type: ProjectType.OpenSource,
        repoUrl: 'https://github.com/Packss/Linux-NitroSense',
        description: [
          {
            es: 'Agregué soporte para el modelo Nitro "AN515-53", permitiendo que el controlador funcione en laptops de este modelo como la que poseo.',
            en: 'Added support for Nitro "AN515-53" model, enabling the driver to work on machines like mine.',
          },
        ],
        technologies: 'Python (Linux kernel drivers)',
      },
      {
        name: {
          es: 'LibreTube',
          en: 'LibreTube',
        },
        startDate: '2026-05',
        period: {
          es: 'Mayo 2026',
          en: 'May 2026',
        },
        category: { es: 'Contribución', en: 'Contribution' },
        type: ProjectType.OpenSource,
        repoUrl: 'https://github.com/libre-tube/LibreTube',
        description: [
          {
            es: 'Identifiqué y corregí un bug en dispositivo tablet, mejorando la experiencia de usuario.',
            en: 'Identified and fixed a bug on tablet devices, improving user experience.',
          },
        ],
        technologies: 'Kotlin (Android Development)',
      },
    ],
  },
}
