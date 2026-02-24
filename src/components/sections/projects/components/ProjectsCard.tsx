// ProjectsCard.tsx
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/Project.type";

interface Props {
  project: Project;
}

export const ProjectsCard = ({ project }: Props) => {
  return (
    <div
      className="bg-white/40 border border-white/50 rounded-3xl p-6 w-full h-full flex flex-col duration-300 ease-out 
                  hover:scale-[1.03] hover:shadow-xl hover:bg-white/50"
    >
      <div className="w-full mb-6 relative rounded-2xl shadow-2xl">
        <img
          src={project.mainImage}
          className="w-full object-cover rounded-2xl"
          alt={project.title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-3">
        {project.title}
      </h3>
      <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100/80 border border-blue-200/60 text-blue-700 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={`/projects/${project.id}`}
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl font-semibold transition-colors duration-200 group/btn text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View More</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/50 border border-white/60 rounded-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg group/icon"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5 text-neutral-700 transition-transform duration-200 ease-out group-hover/icon:rotate-12" />
          </a>
        )}
      </div>
    </div>
  );
};
