import type { Locale, LocalizedList, LocalizedText } from "@/i18n/types";
import type { Project } from "../types/Project.type";

type LocalizedProject = Omit<
  Project,
  | "title"
  | "role"
  | "shortDescription"
  | "problem"
  | "solution"
  | "impact"
  | "architecture"
  | "keyFeatures"
  | "challenges"
  | "decisions"
  | "methodology"
  | "warning"
  | "tags"
> & {
  title: LocalizedText;
  role: LocalizedText;
  shortDescription: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  impact?: LocalizedText;
  architecture?: LocalizedText;
  keyFeatures: LocalizedList;
  challenges?: LocalizedList;
  decisions?: LocalizedList;
  methodology?: LocalizedText;
  warning?: LocalizedText;
  tags: LocalizedList;
};

const kananBase = "/projects/kanan";
const kananImages = [
  "dashboard",
  "dashboard",
  "login",
  "createPersonnel",
  "personnelDashboard",
  "createUsers",
  "usersDashboard",
  "addBrand",
  "brandDashboard",
  "addCategory",
  "categoryDashboard",
  "addAssets",
  "assetsDashboard",
  "addAssignments",
  "acceptAssignments",
  "assignment",
  "assetsDetails",
  "assetsDetails2",
  "personnelAssets",
  "createReport",
  "reportsDahsboard",
  "reports",
  "reportsDetails",
].map((name) => `${kananBase}/${name}.webp`);

const griotBase = "/projects/griot";
const griotImages = [
  "lenguagesDashboard",
  "lenguagesDashboard",
  "lenguagesTable",
  "login",
  "register",
  "gamesDashboard",
  "choseLanguage",
  "hangman",
  "hangmanCorrect",
  "Memory",
  "Memory2",
  "MemoryFinal",
  "mixedLetters",
  "mixedLettersCorrect",
  "multipleChoice",
  "multipleChoiceCorrect",
  "multipleChoiceIncorrect",
  "multipleChoiceResume",
  "speedRound",
  "speedRoundFInal",
  "speedRoundStart",
].map((name) => `${griotBase}/${name}.webp`);

const tesloBase = "/projects/tesloshop";
const tesloImages = [
  "dashboard",
  "dashboard",
  "DashboardFiltered",
  "login",
  "adminProducts",
  "adminProduct",
  "adminProduct2",
].map((name) => `${tesloBase}/${name}.webp`);

const siopBase = "/projects/siop";
const siopImages = [
  "Main",
  "Main",
  "Accion",
  "Accion2",
  "Accion3",
  "Accion4",
  "acta",
  "acta2",
  "agregarProyecto",
  "agregarProyecto2",
  "AsignarSupervisores",
  "AsignarSupervisores2",
  "AsignarSupervisores3",
  "Contratos",
  "Contratos2",
  "Contratos4",
  "Contratos5",
  "Contratos7",
  "Contratos8",
  "Contratos9",
  "obreBianual",
  "peticiones",
  "proyectoDashboard",
  "SEINFRAC",
  "SEINFRAC2",
  "SEINFRAC3",
  "SEINFRAC4",
  "SEINFRAC5",
  "SEINFRAC7",
  "SEINFRAC8",
  "SEINFRAC9",
  "SEINFRAC10",
  "SEINFRAC11",
  "SEINFRAC12",
  "SEINFRAC13",
  "SEINFRAC14",
  "SEINFRAC15",
].map((name) => `${siopBase}/${name}.webp`);

const projects: LocalizedProject[] = [
  {
    id: "kanan",
    title: { es: "Kanan", en: "Kanan" },
    year: "2025",
    status: "completed",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    shortDescription: {
      es: "Sistema web para la gestión y trazabilidad de bienes gubernamentales, reemplazando procesos manuales en Excel por una plataforma centralizada con control de roles y bitácora de movimientos.",
      en: "Web system for government asset management and traceability, replacing manual Excel processes with a centralized platform featuring role control and movement logging.",
    },
    problem: {
      es: "La gestión de activos gubernamentales se realizaba mediante hojas de Excel, generando errores humanos, falta de trazabilidad, inconsistencias en asignaciones y riesgos de seguridad en la manipulación de información.",
      en: "Government asset management was handled through Excel spreadsheets, leading to human errors, lack of traceability, inconsistencies in asset allocation, and security risks in information handling.",
    },
    solution: {
      es: "Desarrollamos en equipo un sistema monolítico modular con Laravel 12 para centralizar la gestión de activos, implementando control de acceso por roles, bitácora histórica de movimientos y flujos diferenciados para asignación, mantenimiento y consulta.",
      en: "As a team, we developed a modular monolithic system using Laravel 12 to centralize asset management, implementing role-based access control, historical activity logging, and distinct workflows for allocation, maintenance, and consultation.",
    },
    impact: {
      es: "Digitalización completa del inventario institucional, mejora en trazabilidad de bienes y reducción de errores humanos al automatizar asignaciones, movimientos y registros históricos.",
      en: "Complete digitization of the institutional inventory, improved asset traceability, and reduced human error through the automation of allocations, movements, and historical records.",
    },
    stack: ["Laravel 12", "PHP 8.4", "JavaScript", "Bootstrap 5", "MySQL"],
    architecture: {
      es: "Monolito modular basado en MVC con Eloquent ORM y Query Scopes personalizados, control de acceso mediante Spatie Laravel Permission y separación lógica por dominio.",
      en: "Modular monolith based on MVC architecture, leveraging Eloquent ORM with custom query scopes, role-based access control via Spatie Laravel Permission, and logical separation by domain.",
    },
    keyFeatures: {
      es: [
        "Gestion centralizada de activos y personal",
        "Sistema de roles",
        "Bitácora completa de movimientos",
        "Flujo de reportes de mantenimiento",
        "Asignación y reasignación de bienes",
        "Generación de PDFs institucionales",
      ],
      en: [
        "Centralized management of assets and personnel",
        "Role-based access system",
        "Comprehensive activity logging",
        "Maintenance reporting workflow",
        "Asset assignment and reassignment",
        "Generation of institutional PDFs",
      ],
    },
    challenges: {
      es: [
        "Diseño de control de acceso granular por rol y acción",
        "Implementación de trazabilidad histórica sin degradar rendimiento",
        "Implementación de entorno de desarrollo reproducible basado en Laravel Sail",
      ],
      en: [
        "Design of granular access control by role and action",
        "Implementation of historical traceability without performance degradation",
        "Setup of a reproducible development environment based on Laravel Sail",
      ],
    },
    decisions: {
      es: [
        "Uso de arquitectura monolítica modular para mantener simplicidad operativa",
        "Implementación de Query Scopes para mantener controladores más limpios",
        "Eager Loading para optimizar consultas relacionales complejas",
      ],
      en: [
        "Adoption of a modular monolithic architecture to maintain operational simplicity",
        "Use of Query Scopes to keep controllers clean and focused",
        "Eager loading to optimize complex relational queries",
      ],
    },
    teamSize: 3,
    methodology: {
      es: "Desarrollo incremental con entregas por modulo",
      en: "Incremental development with module-based deliveries",
    },
    githubUrl: "https://github.com/D-Amores/siape-gob",
    tags: {
      es: ["Laravel", "PHP", "Blade"],
      en: ["Laravel", "PHP", "Blade"],
    },
    mainImage: `${kananBase}/dashboard.webp`,
    images: kananImages,
  },
  {
    id: "griot",
    title: { es: "Griot", en: "Griot" },
    year: 2026,
    status: "in-progress",
    role: { es: "Desarrollador Frontend", en: "Frontend Developer" },
    teamSize: 1,
    shortDescription: {
      es: "Una plataforma web interactiva para el aprendizaje de vocabulario multilingüe a través de juegos dinámicos",
      en: "An interactive web platform for learning multilingual vocabulary through dynamic, game-based experiences",
    },
    problem: {
      es: "Los estudiantes de idiomas necesitan una forma atractiva y efectiva de practicar y retener vocabulario en múltiples idiomas. Los métodos tradicionales de memorización son poco motivantes y carecen de gamificación que mantenga el interés a largo plazo.",
      en: "Language learners need an engaging and effective way to practice and retain vocabulary across multiple languages. Traditional memorization methods are often unmotivating and lack the gamification needed to sustain long-term interest.",
    },
    solution: {
      es: "Griot ofrece 5 juegos interactivos (Ahorcado, Opción Múltiple, Memorama, Scramble y Ronda Rápida) donde los usuarios pueden practicar vocabulario en distintos idiomas. Los usuarios gestionan su propio diccionario personalizado con traducciones múltiples y etiquetas organizativas, mientras el sistema rastrea estadísticas de progreso.",
      en: "Griot features five interactive games (Hangman, Multiple Choice, Memory Match, Scramble, and Rapid Round) where users can practice vocabulary across different languages. Users manage their own personalized dictionary with multiple translations and organizational tags, while the system tracks progress statistics.",
    },
    impact: {
      es: "Plataforma diseñada como MVP escalable que permite a estudiantes de idiomas practicar vocabulario de forma divertida y personalizada. El sistema de múltiples traducciones facilita el aprendizaje simultáneo de varios idiomas.",
      en: "A platform designed as a scalable MVP that enables language learners to practice vocabulary in a fun and personalized way. The multi-translation system supports simultaneous learning across multiple languages.",
    },
    methodology: {
      es: "Desarrollo incremental con enfoque en MVP, buscando mejorar la experiencia de aprendizaje.",
      en: "Incremental development with an MVP-focused approach, aimed at enhancing the learning experience.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI / shadcn/ui",
    ],
    architecture: {
      es: "Next.js App Router con arquitectura cliente-servidor. Utiliza route grouping para organizar secciones. Sistema de almacenamiento local para persistencia de datos. Componentes reutilizables con diseño atómico (UI components, features, layouts).",
      en: "Next.js App Router with a client-server architecture. Uses route grouping to organize sections. Local storage system for data persistence. Reusable components built with an atomic design approach (UI components, features, layouts).",
    },
    keyFeatures: {
      es: [
        "Gestión de diccionario personalizado",
        "5 juegos interactivos con diferentes niveles de dificultad",
        "Sistema de estadísticas y visualización de progreso",
        "Interfaz totalmente responsive con diseño mobile-first",
        "Sistema de etiquetas para organización de palabras",
        "Soporte para múltiples traducciones por palabra",
      ],
      en: [
        "Custom dictionary management",
        "Five interactive games with varying difficulty levels",
        "Statistics system with progress visualization",
        "Fully responsive interface with a mobile-first design",
        "Tagging system for word organization",
        "Support for multiple translations per word",
      ],
    },
    challenges: {
      es: [
        "Compatibilidad de lógica de juegos con caracteres especiales y acentos de distintos idiomas.",
        "Estructurar el App Router para que cada juego sea independiente pero comparta la misma fuente de datos.",
        "Crear una interfaz responsive que funcione tanto en móvil como desktop manteniendo la experiencia de usuario",
      ],
      en: [
        "Ensuring game logic compatibility with special characters and accents across different languages",
        "Structuring the App Router so each game operates independently while sharing the same data source",
        "Designing a responsive interface that delivers a consistent user experience across both mobile and desktop",
      ],
    },
    decisions: {
      es: [
        "Uso de Next.js App Router para mejor estructura de rutas y layouts anidados",
        "Tipado completo con TypeScript para interfaces de Word, Translation, Game",
        "shadcn/ui para componentes UI consistentes y accesibles",
        "Separación clara entre lógica de juegos individuales",
      ],
      en: [
        "Use of Next.js App Router for better route structure and nested layouts",
        "Full TypeScript typing for Word, Translation, and Game interfaces",
        "shadcn/ui for consistent and accessible UI components",
        "Clear separation between individual game logic",
      ],
    },
    githubUrl: "https://github.com/BenelIT/griot-frontend",
    mainImage: `${griotBase}/lenguagesDashboard.webp`,
    images: griotImages,
    videoDemo: undefined,
    tags: {
      es: ["React", "TypeScript", "Shadcn/ui", "Multilingüe"],
      en: ["React", "TypeScript", "Shadcn/ui", "Multilingual"],
    },
  },
  {
    id: "tesloshop",
    title: { es: "TesloShop", en: "TesloShop" },
    year: 2026,
    status: "in-progress",
    role: { es: "Desarrollador Frontend", en: "Frontend Developer" },
    shortDescription: {
      es: "Plataforma de e-commerce moderna con panel de administración completo para la gestión de productos de una tienda de ropa",
      en: "Modern e-commerce platform with a comprehensive admin panel for managing products in a clothing store",
    },
    problem: {
      es: "Las tiendas en línea necesitan separar claramente la experiencia del cliente de las herramientas administrativas, con accesos diferenciados y datos siempre sincronizados entre ambos contextos.",
      en: "Online stores require a clear separation between the customer experience and administrative tools, with distinct access controls and consistently synchronized data across both contexts.",
    },
    solution: {
      es: "Desarrollo de SPA modular con separación por dominios (shop, admin, auth), implementando state isolation (Zustand) y server state management con TanStack Query. Sincronización de filtros con URL params para mantener estado navegable y compartible.",
      en: "Development of a modular SPA with domain-based separation (shop, admin, auth), implementing state isolation with Zustand and server state management using TanStack Query. Filter synchronization with URL parameters ensures a navigable and shareable state.",
    },
    impact: {
      es: "Sistema completo que permite gestión eficiente de productos con soporte para múltiples imágenes, tags, tallas, y filtros avanzados.",
      en: "A comprehensive system that enables efficient product management with support for multiple images, tags, sizes, and advanced filtering.",
    },
    stack: [
      "React",
      "TypeScript",
      "React Router",
      "Zustand",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Radix UI",
      "Sonner",
    ],
    teamSize: 1,
    methodology: {
      es: "Proyecto personal nacido de la curiosidad. Sin metodología formal, cada feature surgió de experimentar, romper cosas y aprender del proceso.",
      en: "A personal project driven by curiosity. Without a formal methodology, each feature emerged through experimentation, breaking things, and learning throughout the process.",
    },
    architecture: {
      es: "Arquitectura modular en capas: features separados (shop/admin/auth), cada uno con su propia estructura de pages, layouts, components, actions, hooks y stores. Lazy loading en rutas de admin y auth. Protected routes basadas en roles",
      en: "Layered modular architecture with separated features (shop/admin/auth), each with its own structure of pages, layouts, components, actions, hooks, and stores. Lazy loading applied to admin and auth routes. Role-based protected routes.",
    },
    keyFeatures: {
      es: [
        "Sistema de autenticación con JWT y gestión de roles (admin/user)",
        "Catálogo de productos con filtros avanzados (género, talla, precio)",
        "Paginación y navegación optimizada con URL params",
        "Sistema de tags dinámicos para productos",
        "Protección de rutas según autenticación y roles",
        "Formularios validados con React Hook Form",
        "Gestión de estado global con Zustand",
        "Server state caching con TanStack Query",
        "UI components con Radix UI y TailwindCSS modern",
      ],
      en: [
        "Authentication system using JWT with role management (admin/user)",
        "Product catalog with advanced filtering (gender, size, price)",
        "Optimized pagination and navigation using URL parameters",
        "Dynamic tagging system for products",
        "Route protection based on authentication and roles",
        "Form validation using React Hook Form",
        "Global state management with Zustand",
        "Server state caching with TanStack Query",
        "UI components built with Radix UI and modern Tailwind CSS",
      ],
    },
    challenges: {
      es: [
        "Implementación de autenticación persistente con refresh de tokens automático",
        "Manejo eficiente de múltiples imágenes en productos con preview y drag & drop",
        "Sincronización de filtros con URL params para permitir compartir búsquedas",
        "Optimización de performance con lazy loading de rutas y code splitting",
        "Gestión de estado complejo entre formularios, filtros y autenticación",
      ],
      en: [
        "Implementation of persistent authentication with automatic token refresh",
        "Efficient handling of multiple product images with preview and drag-and-drop support",
        "Filter synchronization with URL parameters to enable shareable searches",
        "Performance optimization through lazy loading of routes and code splitting",
        "Management of complex state across forms, filters, and authentication",
      ],
    },
    decisions: {
      es: [
        "Usar Zustand en lugar de Redux por su simplicidad y menor boilerplate",
        "TanStack Query para manejar server state y caché automático",
        "React Router 7 con Hash Router para compatibilidad con hosting estático",
        "TailwindCSS 4 con Vite plugin para estilos ultra-rápidos",
        "Estructura modular por features en lugar de por tipo de archivo",
        "TypeScript estricto para prevenir errores en runtime",
      ],
      en: [
        "Using Zustand instead of Redux for its simplicity and reduced boilerplate",
        "TanStack Query for server state management and automatic caching",
        "React Router 7 with Hash Router for compatibility with static hosting",
        "Tailwind CSS 4 with the Vite plugin for ultra-fast styling",
        "Feature-based modular structure instead of file-type-based organization",
        "Strict TypeScript to prevent runtime errors",
      ],
    },
    githubUrl: "https://github.com/BenelIT/teslo-shop-frontend",
    mainImage: `${tesloBase}/dashboard.webp`,
    images: tesloImages,
    tags: {
      es: ["React", "TypeScript", "TanStack Query", "Zustand", "E-commerce"],
      en: ["React", "TypeScript", "TanStack Query", "Zustand", "E-commerce"],
    },
  },
  {
    id: "siop",
    title: { es: "SIOP", en: "SIOP" },
    year: "2025",
    status: "completed",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    shortDescription: {
      es: "Sistema web para la gestión integral de obras públicas y contratos gubernamentales en México",
      en: "Web-based system for the comprehensive management of public works and government contracts in Mexico",
    },
    problem: {
      es: "La administración pública requería un sistema centralizado para gestionar el ciclo completo de proyectos de obras públicas, desde la solicitud COPLADE hasta estimaciones y pagos, reduciendo procesos manuales y mejorando la trazabilidad de contratos y presupuestos.",
      en: "Public administration required a centralized system to manage the full lifecycle of public works projects—from COPLADE requests to estimates and payments—reducing manual processes and improving traceability of contracts and budgets.",
    },
    solution: {
      es: "Desarrollo de una aplicación web con ASP.NET Web Forms que permite gestionar solicitudes COPLADE, anteproyectos, contratos, estimaciones, supervisión y pagos. Incluye búsqueda avanzada, filtros personalizables, exportación de datos y API RESTful para integración con otros sistemas.",
      en: "Development of a web application using ASP.NET Web Forms to manage COPLADE requests, preliminary projects, contracts, estimates, supervision, and payments. Includes advanced search, customizable filters, data export, and a RESTful API for integration with other systems.",
    },
    impact: {
      es: "Centralización de la información de obras públicas, reducción de tiempos en procesos administrativos, mejor seguimiento de contratos bianuales y obras relacionadas, y generación de reportes para auditorías.",
      en: "Centralization of public works information, reduced administrative processing times, improved tracking of multi-year contracts and related projects, and generation of reports for audits.",
    },
    stack: [
      "ASP.NET Web Forms",
      "ASP.NET Web API",
      ".NET Framework 4.7.2",
      "SQL Server",
      "C#",
      "Dapper",
      "JavaScript",
      "Bootstrap",
    ],
    architecture: {
      es: "Arquitectura en capas con separación entre presentación (Web Forms), API REST para integración externa y acceso a datos optimizado con Dapper sobre SQL Server.",
      en: "Layered architecture with separation between presentation (Web Forms), a REST API for external integration, and optimized data access using Dapper over SQL Server.",
    },
    keyFeatures: {
      es: [
        "Gestión de solicitudes COPLADE por sector, subcomité y municipio",
        "Administración de anteproyectos y conversión a proyectos",
        "Registro y control de contratos con diferenciación de contratos bianuales",
        "Sistema de estimaciones vinculadas a contratos",
        "Módulo de supervisión de obras",
        "Control de pagos y presupuestos",
        "Filtros dinámicos por año, municipio, tipo de proyecto",
        "Búsqueda en tiempo real",
        "API RESTful para integración",
      ],
      en: [
        "Management of COPLADE requests by sector, subcommittee, and municipality",
        "Administration of preliminary projects with conversion into formal projects",
        "Contract registration and control, including support for multi-year contracts",
        "Estimation system linked to contracts",
        "Public works supervision module",
        "Payment and budget control",
        "Dynamic filtering by year, municipality, and project type",
        "Real-time search",
        "RESTful API for integration",
      ],
    },
    challenges: {
      es: [
        "Integración de múltiples módulos interdependientes (COPLADE → Anteproyectos → Contratos → Estimaciones → Pagos → etc )",
        "Gestión de grandes volúmenes de datos con búsqueda y filtrado eficiente",
        "Manejo de contratos bianuales y obras sin relación directa",
        "Implementación de API RESTful junto con Web Forms tradicional",
      ],
      en: [
        "Integration of multiple interdependent modules (COPLADE → Preliminary Projects → Contracts → Estimates → Payments → etc.)",
        "Handling large data volumes with efficient search and filtering",
        "Managing multi-year contracts and projects without direct relationships",
        "Implementing a RESTful API alongside traditional Web Forms",
      ],
    },
    decisions: {
      es: [
        "Uso de Dapper para acceso a datos por su rendimiento en consultas complejas",
        "OWIN para middleware y redirección inicial",
        "Separación de Controllers para API y Code-behind para Web Forms",
        "Nomenclatura en español por requisitos gubernamentales",
      ],
      en: [
        "Use of Dapper for data access due to its performance in complex queries",
        "OWIN for middleware and initial request redirection",
        "Separation of API Controllers and Web Forms code-behind",
        "Spanish naming conventions due to government requirements",
      ],
    },
    teamSize: 2,
    methodology: {
      es: "Desarrollo incremental con entregas por módulo",
      en: "Incremental development with module-based deliveries",
    },
    warning: {
      es: "Demo disponible con datos de prueba. El acceso a la base de datos de producción no está disponible por políticas del cliente, por lo que algunas vistas pueden aparecer sin datos.",
      en: "Demo available with sample data. Access to the production database is restricted due to client policies, so some views may appear without data.",
    },
    githubUrl: undefined,
    isPrivate: true,
    mainImage: `${siopBase}/Main.webp`,
    images: siopImages,
    videoDemo: undefined,
    tags: {
      es: ["ASP.NET", "SQL Server", "C#"],
      en: ["ASP.NET", "SQL Server", "C#"],
    },
  },
];

function localizeProject(project: LocalizedProject, locale: Locale): Project {
  return {
    ...project,
    title: project.title[locale],
    role: project.role[locale],
    shortDescription: project.shortDescription[locale],
    problem: project.problem[locale],
    solution: project.solution[locale],
    impact: project.impact?.[locale],
    architecture: project.architecture?.[locale],
    keyFeatures: project.keyFeatures[locale],
    challenges: project.challenges?.[locale],
    decisions: project.decisions?.[locale],
    methodology: project.methodology?.[locale],
    warning: project.warning?.[locale],
    tags: project.tags[locale],
  };
}

export function getProjects(locale: Locale): Project[] {
  return projects.map((project) => localizeProject(project, locale));
}

export function getProjectById(
  id: string,
  locale: Locale,
): Project | undefined {
  const project = projects.find((item) => item.id === id);
  return project ? localizeProject(project, locale) : undefined;
}

export function getProjectIds(): string[] {
  return projects.map((project) => project.id);
}
