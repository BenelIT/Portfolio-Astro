import type { Project } from "../types/Project.type";

const kananBase = "/src/assets/projects/kanan";
const kananImages = [
  "acceptAssignments",
  "addAssets",
  "addAssignments",
  "addBrand",
  "addCategory",
  "assetsDashboard",
  "assetsDetails",
  "assetsDetails2",
  "assignment",
  "brandDashboard",
  "categoryDashboard",
  "createPersonnel",
  "createReport",
  "createUsers",
  "login",
  "personnelAssets",
  "personnelDashboard",
  "reports",
  "reportsDahsboard",
  "reportsDetails",
  "usersDashboard",
].map((name) => `${kananBase}/${name}.png`);

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
].map((name) => `${griotBase}/${name}.png`);

const tesloBase = "/src/assets/projects/tesloshop";
const tesloImages = [
  "dashboard",
  "dashboard",
  "DashboardFiltered",
  "login",
  "adminProducts",
  "adminProduct",
  "adminProduct2",
].map((name) => `${tesloBase}/${name}.png`);

const siopBase = "/src/assets/projects/siop";
const siopImages = [
  "Main",
  "Main",
  "Accion2",
  "acta",
  "Accion3",
  "agregarProyecto2",
  "Contratos2",
  "Contratos7",
  "obreBianual",
  "SEINFRAC12",
  "SEINFRAC3",
  "SEINFRAC8",
  "Accion4",
  "agregarProyecto",
  "Contratos3",
  "Contratos8",
  "peticiones",
  "SEINFRAC13",
  "SEINFRAC4",
  "SEINFRAC9",
  "Accion",
  "AsignarSupervisores2",
  "Contratos4",
  "Contratos9",
  "proyectoDashboard",
  "SEINFRAC14",
  "SEINFRAC5",
  "SEINFRAC",
  "acta2",
  "AsignarSupervisores3",
  "Contratos5",
  "Contratos",
  "SEINFRAC10",
  "SEINFRAC15",
  "SEINFRAC6",
].map((name) => `${siopBase}/${name}.png`);

export const Projects: Project[] = [
  {
    id: 1,
    title: "Kanan",
    year: "2025",
    status: "completed",
    role: "Full Stack Developer",

    shortDescription:
      "Sistema web para la gestión y trazabilidad de bienes gubernamentales, reemplazando procesos manuales en Excel por una plataforma centralizada con control de roles y bitácora de movimientos.",

    problem:
      "La gestión de activos gubernamentales se realizaba mediante hojas de Excel, generando errores humanos, falta de trazabilidad, inconsistencias en asignaciones y riesgos de seguridad en la manipulación de información.",

    solution:
      "Diseñé y desarrollé un sistema monolítico modular basado en Laravel 12 que centraliza la gestión de activos, implementando control de acceso por roles, bitácora histórica de movimientos y flujos diferenciados para asignación, mantenimiento y consulta.",

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
      "Endpoints API internos para DataTables",
    ],

    challenges: [
      "Diseño de control de acceso granular por rol y acción",
      "Implementación de trazabilidad histórica sin degradar rendimiento",
      "Configuración de servidor Linux para múltiples versiones de PHP",
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

    tags: ["Government", "Role-Based System", "Fullstack"],
    mainImage: `${kananBase}/dashboard.png`,
    images: kananImages,
  },
  {
    id: 2,
    title: "Griot",

    // Contextual information
    year: 2026,
    status: "in-progress",
    role: "Frontend Developer",
    teamSize: 1,

    // Detailed information
    shortDescription:
      "Una plataforma web interactiva para el aprendizaje de vocabulario multilingüe a través de juegos dinámicos",

    problem:
      "Los estudiantes de idiomas necesitan una forma atractiva y efectiva de practicar y retener vocabulario en múltiples idiomas. Los métodos tradicionales de memorización son poco motivantes y carecen de gamificación que mantenga el interés a largo plazo.",

    solution:
      "Griot ofrece 5 juegos interactivos (Ahorcado, Opción Múltiple, Memorama, Scramble y Ronda Rápida) donde los usuarios pueden practicar vocabulario en 10+ idiomas. Los usuarios gestionan su propio diccionario personalizado con traducciones múltiples y etiquetas organizativas, mientras el sistema rastrea estadísticas de progreso.",

    impact:
      "Plataforma diseñada como MVP escalable que permite a estudiantes de idiomas practicar vocabulario de forma divertida y personalizada. El sistema de múltiples traducciones facilita el aprendizaje simultáneo de varios idiomas.",

    methodology:
      "Desarrollo incremental con enfoque en MVP, utilizando feedback de usuarios para iterar en características y mejorar la experiencia de aprendizaje.",
    // Technical details
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI / shadcn/ui",
    ],

    architecture:
      "Next.js App Router con arquitectura cliente-servidor. Utiliza route grouping para organizar secciones (auth), (word). Sistema de almacenamiento local para persistencia de datos. Componentes reutilizables con diseño atómico (UI components, features, layouts).",

    keyFeatures: [
      "Gestión de vocabulario multilingüe",
      "5 juegos interactivos con diferentes niveles de dificultad (fácil, medio, difícil)",
      "Sistema de estadísticas y visualización de progreso con gráficos",
      "Interfaz totalmente responsive con diseño mobile-first",
      "Sistema de etiquetas para organización de palabras",
      "Selector de idiomas con banderas de países",
      "Almacenamiento persistente en navegador",
      "Tema visual personalizado 'Griot' con paleta de colores warm (cream, teal, sand)",
    ],

    challenges: [
      "Implementar lógica de juegos que funcione correctamente con múltiples idiomas y sistemas de escritura diferentes",
      "Crear una interfaz responsive que funcione tanto en móvil como desktop manteniendo la experiencia de usuario",
      "Persistencia de datos usando localStorage sin backend",
    ],

    decisions: [
      "Uso de Next.js App Router para mejor estructura de rutas y layouts anidados",
      "Tipado completo con TypeScript para interfaces de Word, Translation, Game",
      "LocalStorage para MVP sin requerir backend inicialmente",
      "shadcn/ui para componentes UI consistentes y accesibles",
      "Separación clara entre lógica de juegos individuales (cada juego en su propia página)",
      "Fuentes personalizadas: Lora (serif) para títulos, Nunito Sans (sans-serif) para cuerpo",
    ],

    // Links and media
    githubUrl: "https://github.com/BenelIT/griot-frontend", // Ajustar con tu URL
    mainImage: `${griotBase}/lenguagesDashboard.png`,
    images: griotImages,
    videoDemo: undefined,

    // Additional metadata
    tags: ["Education", "Language Learning", "Vocabulary", "Multilingual"],
  },
  {
    id: 3, // O el número que corresponda
    title: "TesloShop",

    // Contextual information
    year: 2026,
    status: "in-progress", // O "completed" según el estado actual
    role: "Frontend Developer",

    // Detailed information
    shortDescription:
      "Plataforma de e-commerce moderna con panel de administración completo para la gestión de productos de una tienda de ropa",

    problem:
      "Simulación de un entorno e-commerce real que requiere separación clara entre experiencia de cliente y panel administrativo, con autenticación basada en roles y manejo eficiente de estado asíncrono.",

    solution:
      "Desarrollo de SPA modular con separación por dominios (shop, admin, auth), implementando state isolation (Zustand) y server state management con TanStack Query. Sincronización de filtros con URL params para mantener estado navegable y compartible.",

    impact:
      "Sistema completo que permite gestión eficiente de productos con soporte para múltiples imágenes, tags, tallas, y filtros avanzados.",

    // Technical details
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TailwindCSS",
      "Zustand",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Radix UI",
      "Sonner",
    ],

    architecture:
      "Arquitectura modular en capas: features separados (shop/admin/auth), cada uno con su propia estructura de pages, layouts, components, actions, hooks y stores. Lazy loading en rutas de admin y auth. Protected routes basadas en roles",

    keyFeatures: [
      "Sistema de autenticación con JWT y gestión de roles (admin/user)",
      "Catálogo de productos con filtros avanzados (género, talla, precio)",
      "Panel administrativo con dashboard de métricas",
      "CRUD completo de productos con gestión de imágenes drag & drop",
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
    mainImage: `${tesloBase}/dashboard.png`,
    images: tesloImages,

    // Additional metadata
    tags: ["E-commerce", "React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 4, // or your preferred ID
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
      "C#",
      "ASP.NET Web Forms",
      "ASP.NET Web API",
      ".NET Framework 4.7.2",
      "SQL Server",
      "Dapper",
      "OWIN",
      "JavaScript",
      "HTML/CSS",
      "Bootstrap",
    ],

    architecture:
      "Arquitectura en capas con separación entre presentación (Web Forms), API REST para integración externa y acceso a datos optimizado con Dapper sobre SQL Server. Autenticación implementada con OWIN.",

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
      "Integración de múltiples módulos interdependientes (COPLADE → Anteproyectos → Contratos → Estimaciones → Pagos)",
      "Gestión de grandes volúmenes de datos con búsqueda y filtrado eficiente",
      "Manejo de contratos bianuales y obras sin relación directa",
      "Implementación de API RESTful junto con Web Forms tradicional",
    ],

    decisions: [
      "Uso de Dapper para acceso a datos por su rendimiento en consultas complejas",
      "OWIN para middleware y redirección inicial",
      "Separación de Controllers para API y Code-behind para Web Forms",
      "Nomenclatura en español por requisitos del cliente gubernamental",
    ],
    teamSize: 3,
    methodology: "Desarrollo incremental con entregas por módulo",

    // Links and media
    liveUrl: undefined, // Add if deployed
    githubUrl: undefined,
    isPrivate: true, // En frontend mostrar algo como Repositorio privado (proyecto gubernamental) o algo asi serio
    mainImage: `${siopBase}/Main.png`,
    images: siopImages,
    videoDemo: undefined, // Add if you create a demo video

    // Additional metadata
    tags: [
      "Enterprise",
      "Government",
      "Construction Management",
      "Public Works",
      "ASP.NET",
      "Web API",
      "SQL Server",
      "CRUD",
      "Spanish",
    ],
  },
];
