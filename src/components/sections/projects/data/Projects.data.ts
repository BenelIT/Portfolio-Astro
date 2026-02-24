import type { Project } from "../types/Project.type";

const kananBase = "/src/assets/projects/kanan";
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

const griotBase = "/src/assets/projects/griot";
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

const tesloBase = "/src/assets/projects/tesloshop";
const tesloImages = [
  "dashboard",
  "dashboard",
  "DashboardFiltered",
  "login",
  "adminProducts",
  "adminProduct",
  "adminProduct2",
].map((name) => `${tesloBase}/${name}.webp`);

const siopBase = "/src/assets/projects/siop";
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

export const Projects: Project[] = [
  {
    id: "kanan",
    title: "Kanan",
    year: "2025",
    status: "completed",
    role: "Desarrollador Full Stack",

    shortDescription:
      "Sistema web para la gestión y trazabilidad de bienes gubernamentales, reemplazando procesos manuales en Excel por una plataforma centralizada con control de roles y bitácora de movimientos.",

    problem:
      "La gestión de activos gubernamentales se realizaba mediante hojas de Excel, generando errores humanos, falta de trazabilidad, inconsistencias en asignaciones y riesgos de seguridad en la manipulación de información.",

    solution:
      "Desarrollamos en equipo un sistema monolítico modular con Laravel 12 para centralizar la gestión de activos, implementando control de acceso por roles, bitácora histórica de movimientos y flujos diferenciados para asignación, mantenimiento y consulta.",

    impact:
      "Digitalización completa del inventario institucional, mejora en trazabilidad de bienes y reducción de errores humanos al automatizar asignaciones, movimientos y registros históricos.",

    stack: ["Laravel 12", "PHP 8.4", "JavaScript", "Bootstrap 5", "MySQL"],
    architecture:
      "Monolito modular basado en MVC con Eloquent ORM y Query Scopes personalizados, control de acceso mediante Spatie Laravel Permission y separación lógica por dominio.",

    keyFeatures: [
      "Gestión centralizada de activos y personal",
      "Sistema de roles",
      "Bitácora completa de movimientos",
      "Flujo de reportes de mantenimiento",
      "Asignación y reasignación de bienes",
      "Generación de PDFs institucionales",
    ],

    challenges: [
      "Diseño de control de acceso granular por rol y acción",
      "Implementación de trazabilidad histórica sin degradar rendimiento",
      "Implementación de entorno de desarrollo reproducible basado en Laravel Sail",
    ],

    decisions: [
      "Uso de arquitectura monolítica modular para mantener simplicidad operativa",
      "Implementación de Query Scopes para mantener controladores más limpios",
      "Eager Loading para optimizar consultas relacionales complejas",
    ],
    teamSize: 3,
    methodology: "Desarrollo incremental con entregas por módulo",

    githubUrl: "https://github.com/D-Amores/siape-gob",

    tags: ["Laravel", "PHP", "Blade"],
    mainImage: `${kananBase}/dashboard.webp`,
    images: kananImages,
  },
  {
    id: "griot",
    title: "Griot",

    // Contextual information
    year: 2026,
    status: "in-progress",
    role: "Desarrollador Frontend",
    teamSize: 1,

    // Detailed information
    shortDescription:
      "Una plataforma web interactiva para el aprendizaje de vocabulario multilingüe a través de juegos dinámicos",

    problem:
      "Los estudiantes de idiomas necesitan una forma atractiva y efectiva de practicar y retener vocabulario en múltiples idiomas. Los métodos tradicionales de memorización son poco motivantes y carecen de gamificación que mantenga el interés a largo plazo.",

    solution:
      "Griot ofrece 5 juegos interactivos (Ahorcado, Opción Múltiple, Memorama, Scramble y Ronda Rápida) donde los usuarios pueden practicar vocabulario en distintos idiomas. Los usuarios gestionan su propio diccionario personalizado con traducciones múltiples y etiquetas organizativas, mientras el sistema rastrea estadísticas de progreso.",

    impact:
      "Plataforma diseñada como MVP escalable que permite a estudiantes de idiomas practicar vocabulario de forma divertida y personalizada. El sistema de múltiples traducciones facilita el aprendizaje simultáneo de varios idiomas.",

    methodology:
      "Desarrollo incremental con enfoque en MVP, buscando mejorar la experiencia de aprendizaje.",
    // Technical details
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI / shadcn/ui",
    ],

    architecture:
      "Next.js App Router con arquitectura cliente-servidor. Utiliza route grouping para organizar secciones. Sistema de almacenamiento local para persistencia de datos. Componentes reutilizables con diseño atómico (UI components, features, layouts).",

    keyFeatures: [
      "Gestión de diccionario personalizado",
      "5 juegos interactivos con diferentes niveles de dificultad",
      "Sistema de estadísticas y visualización de progreso",
      "Interfaz totalmente responsive con diseño mobile-first",
      "Sistema de etiquetas para organización de palabras",
      "Soporte para múltiples traducciones por palabra",
    ],

    challenges: [
      "Compatibilidad de lógica de juegos con caracteres especiales y acentos de distintos idiomas.",
      "Estructurar el App Router para que cada juego sea independiente pero comparta la misma fuente de datos.",
      "Crear una interfaz responsive que funcione tanto en móvil como desktop manteniendo la experiencia de usuario",
    ],

    decisions: [
      "Uso de Next.js App Router para mejor estructura de rutas y layouts anidados",
      "Tipado completo con TypeScript para interfaces de Word, Translation, Game",
      "shadcn/ui para componentes UI consistentes y accesibles",
      "Separación clara entre lógica de juegos individuales",
    ],

    // Links and media
    githubUrl: "https://github.com/BenelIT/griot-frontend", // Ajustar con tu URL
    mainImage: `${griotBase}/lenguagesDashboard.webp`,
    images: griotImages,
    videoDemo: undefined,

    // Additional metadata
    tags: ["React", "TypeScript", "Shadcn/ui", "Multilingüe"],
  },
  {
    id: "tesloshop",
    title: "TesloShop",

    // Contextual information
    year: 2026,
    status: "in-progress", // O "completed" según el estado actual
    role: "Frontend Developer",

    // Detailed information
    shortDescription:
      "Plataforma de e-commerce moderna con panel de administración completo para la gestión de productos de una tienda de ropa",

    problem:
      "Las tiendas en línea necesitan separar claramente la experiencia del cliente de las herramientas administrativas, con accesos diferenciados y datos siempre sincronizados entre ambos contextos.",

    solution:
      "Desarrollo de SPA modular con separación por dominios (shop, admin, auth), implementando state isolation (Zustand) y server state management con TanStack Query. Sincronización de filtros con URL params para mantener estado navegable y compartible.",

    impact:
      "Sistema completo que permite gestión eficiente de productos con soporte para múltiples imágenes, tags, tallas, y filtros avanzados.",

    // Technical details
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

    methodology:
      "Proyecto personal nacido de la curiosidad. Sin metodología formal, cada feature surgió de experimentar, romper cosas y aprender del proceso.",

    architecture:
      "Arquitectura modular en capas: features separados (shop/admin/auth), cada uno con su propia estructura de pages, layouts, components, actions, hooks y stores. Lazy loading en rutas de admin y auth. Protected routes basadas en roles",

    keyFeatures: [
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

    challenges: [
      "Implementación de autenticación persistente con refresh de tokens automático",
      "Manejo eficiente de múltiples imágenes en productos con preview y drag & drop",
      "Sincronización de filtros con URL params para permitir compartir búsquedas",
      "Optimización de performance con lazy loading de rutas y code splitting",
      "Gestión de estado complejo entre formularios, filtros y autenticación",
    ],

    decisions: [
      "Usar Zustand en lugar de Redux por su simplicidad y menor boilerplate",
      "TanStack Query para manejar server state y caché automático",
      "React Router 7 con Hash Router para compatibilidad con hosting estático",
      "TailwindCSS 4 con Vite plugin para estilos ultra-rápidos",
      "Estructura modular por features en lugar de por tipo de archivo",
      "TypeScript estricto para prevenir errores en runtime",
    ],

    // Links and media
    githubUrl: "https://github.com/BenelIT/teslo-shop-frontend", // Agregar tu repositorio
    mainImage: `${tesloBase}/dashboard.webp`,
    images: tesloImages,

    // Additional metadata
    tags: ["React", "TypeScript", "Tanstack Query", "Zustand", "E-commerce"],
  },
  {
    id: "siop", // or your preferred ID
    title: "SIOP",

    // Contextual information
    year: "2025", // Adjust based on actual development year
    status: "completed", // or "completed" depending on current state
    role: "Full Stack Developer", // Adjust to your actual role

    // Detailed information
    shortDescription:
      "Sistema web para la gestión integral de obras públicas y contratos gubernamentales en México",

    problem:
      "La administración pública requería un sistema centralizado para gestionar el ciclo completo de proyectos de obras públicas, desde la solicitud COPLADE hasta estimaciones y pagos, reduciendo procesos manuales y mejorando la trazabilidad de contratos y presupuestos.",

    solution:
      "Desarrollo de una aplicación web con ASP.NET Web Forms que permite gestionar solicitudes COPLADE, anteproyectos, contratos, estimaciones, supervisión y pagos. Incluye búsqueda avanzada, filtros personalizables, exportación de datos y API RESTful para integración con otros sistemas.",

    impact:
      "Centralización de la información de obras públicas, reducción de tiempos en procesos administrativos, mejor seguimiento de contratos bianuales y obras relacionadas, y generación de reportes para auditorías.",

    // Technical details
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

    architecture:
      "Arquitectura en capas con separación entre presentación (Web Forms), API REST para integración externa y acceso a datos optimizado con Dapper sobre SQL Server.",

    keyFeatures: [
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

    challenges: [
      "Integración de múltiples módulos interdependientes (COPLADE → Anteproyectos → Contratos → Estimaciones → Pagos → etc )",
      "Gestión de grandes volúmenes de datos con búsqueda y filtrado eficiente",
      "Manejo de contratos bianuales y obras sin relación directa",
      "Implementación de API RESTful junto con Web Forms tradicional",
    ],

    decisions: [
      "Uso de Dapper para acceso a datos por su rendimiento en consultas complejas",
      "OWIN para middleware y redirección inicial",
      "Separación de Controllers para API y Code-behind para Web Forms",
      "Nomenclatura en español por requisitos gubernamentales",
    ],
    teamSize: 2,
    methodology: "Desarrollo incremental con entregas por módulo",
    warning:
      "Demo disponible con datos de prueba. El acceso a la base de datos de producción no está disponible por políticas del cliente, por lo que algunas vistas pueden aparecer sin datos.",

    // Links and media
    liveUrl: undefined, // Add if deployed
    githubUrl: undefined,
    isPrivate: true, // En frontend mostrar algo como Repositorio privado (proyecto gubernamental) o algo asi serio
    mainImage: `${siopBase}/Main.webp`,
    images: siopImages,
    videoDemo: undefined, // Add if you create a demo video

    // Additional metadata
    tags: ["ASP.NET", "SQL Server", "C#"],
  },
];
