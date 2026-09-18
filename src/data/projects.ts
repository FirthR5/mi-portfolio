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
        es: 'Noviembre – Diciembre 2025',
        en: 'November – December 2025',
      },
      category: { es: 'Proyecto Comercial', en: 'Commercial Project' },
      type: ProjectType.Commercial,
      description: [
        {
          es: 'Sistema completo de gestión para un negocio de servicios: citas, trabajos, clientes y pagos.',
          en: 'Complete management system for a service business: appointments, jobs, clients, and payments.',
        },
        {
          es: 'Administra citas, trabajos con estados y pagos, cotizaciones, facturas, clientes y evidencias fotográficas, expuesto a través de una API REST segura.',
          en: 'Manages appointments, jobs with statuses and payments, quotes, invoices, clients, and photo evidence, exposed through a secure REST API.',
        },
        {
          es: 'Panel con métricas, firma digital del cliente al terminar trabajos y seguimiento de pagos.',
          en: 'Metrics dashboard, digital client signatures when finishing jobs, and payment tracking.',
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
          es: 'Sistema de pedidos para restaurante: mesero, cocina y administración en una sola plataforma.',
          en: 'Restaurant ordering system: waiters, kitchen, and administration in one platform.',
        },
        {
          es: 'Los meseros toman pedidos en tablets, con modificaciones y cancelaciones.',
          en: 'Waiters take orders on tablets, with modifications and cancellations.',
        },
        {
          es: 'Los pedidos fluyen a la cocina y los chefs marcan su progreso.',
          en: 'Orders flow to the kitchen where chefs track progress.',
        },
        {
          es: 'Los administradores ven rendimiento del personal, platos populares y administran el menú.',
          en: 'Admins see staff performance, popular dishes, and manage the menu.',
        },
      ],
      technologies: 'C#, SQL Server, Windows Forms, ASP.NET, JavaScript, Entity Framework',
      mediaLayout: 'slides',
      showcaseComment: {
        es: 'Recorrido del pedido de principio a fin: mesero, cocina y caja.',
        en: 'End-to-end order journey: waiter, kitchen, and cash register.',
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
          es: 'Sistema de gestión de gimnasio: membresías, seguimiento de asistencia, inventario y ventas.',
          en: 'Gym management system: memberships, attendance tracking, inventory, and sales.',
        },
        {
          es: 'Funcionalidades: registro de nuevos miembros y membresías, asistencia según el tipo de membresía, e inventario (suplementos y bebidas) y ventas. Usa MVVM, Background Tasks, triggers de base de datos y Entity Framework.',
          en: 'Features: member and membership registration, attendance by membership type, and inventory (supplements and beverages) and sales. Uses MVVM, Background Tasks, DB triggers, and Entity Framework.',
        },
      ],
      technologies: 'C#, SQL Server, WPF XAML, Entity Framework',
      showcaseComment: {
        es: 'Sistema de gestión para gimnasios: membresías, asistencia, inventario y ventas.',
        en: 'Gym management system: memberships, attendance, inventory, and sales.',
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
          es: 'Monitorea el precio de productos a diario para detectar descuentos.',
          en: 'Monitors product prices daily to spot discounts.',
        },
        {
          es: 'Web Scraping para recopilar datos de Mercado Libre, Soriana y Coppel.',
          en: 'Web scraping to collect data from Mercado Libre, Soriana, and Coppel.',
        },
        {
          es: 'Objetivo: identificar descuentos y determinar el mejor precio disponible.',
          en: 'Identifies price drops and determines the best available discount.',
        },
      ],
      technologies: 'Python, Django, Beautiful Soup 4, SQLite, Design Patterns (Strategy, Repository)',
      mediaLayout: 'hero-strip',
      showcaseComment: {
        es: 'Monitoreo de precios diario vía web scraping en Mercado Libre, Soriana y Coppel.',
        en: 'Daily price monitoring via web scraping across Mercado Libre, Soriana, and Coppel.',
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
        technologies: 'Python',
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
        technologies: 'Kotlin',
      },
    ],
  },
}
