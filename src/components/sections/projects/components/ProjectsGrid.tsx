// ProjectsGrid.tsx
import { memo } from "react";
import { Projects } from "../data/Projects.data";
import { ProjectsCard } from "./ProjectsCard";

export const ProjectsGrid = memo(() => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      {Projects.map((project) => (
        <a key={project.id} href={`/projects/${project.id}`} className="block">
          <ProjectsCard project={project} />
        </a>
      ))}
    </div>
  );
});

ProjectsGrid.displayName = "ProjectsGrid";
