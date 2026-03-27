// ProjectsGrid.tsx
import { memo } from "react";
import { getProjects } from "../data/Projects.data";
import { ProjectsCard } from "./ProjectsCard";
import type { Locale } from "@/i18n/types";

interface ProjectsGridProps {
  locale: Locale;
}

export const ProjectsGrid = memo(({ locale }: ProjectsGridProps) => {
  const projects = getProjects(locale);
  const basePath = locale === "en" ? "/en/projects" : "/projects";

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <a
          key={project.id}
          href={`${basePath}/${project.id}`}
          className="block"
        >
          <ProjectsCard project={project} locale={locale} />
        </a>
      ))}
    </div>
  );
});

ProjectsGrid.displayName = "ProjectsGrid";
