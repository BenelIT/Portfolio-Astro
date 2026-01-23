import { ProjectsMock } from "../data/Projects.data";
import { ProjectsCard } from "./ProjectsCard";

export const ProjectsGrid = () => {
  const projects = ProjectsMock;

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectsCard project={project} key={project.id} />
      ))}
    </div>
  );
};
