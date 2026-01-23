export interface TechStackData {
  name: string;
  icon: string;
  color: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const techStackData: TechStackData[] = [
  // Backend
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
    category: "backend",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "#FF2D20",
    category: "backend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
    category: "backend",
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
    category: "database",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
    category: "database",
  },

  // Frontend
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
    category: "frontend",
  },
  {
    name: "Bootstrap 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    color: "#7952B3",
    category: "frontend",
  },

  // Tools
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
    category: "tools",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
    category: "tools",
  },
  {
    name: "Azure DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
    color: "#0078D7",
    category: "tools",
  },
];

export const backendTechStack = techStackData.filter((tech) =>
  ["backend", "database", "tools"].includes(tech.category),
);

export const frontendTechStack = techStackData.filter((tech) =>
  ["frontend"].includes(tech.category),
);
