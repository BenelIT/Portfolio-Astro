import { type FC } from "react";

import { ExternalLink, Github } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import type { Project } from "../types/Project.type";

interface Props {
  project: Project;
}

export const ProjectsCard: FC<Props> = ({ project }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="
              bg-white/40 relative border border-white/50 
                transition-all duration-400 w-full h-auto rounded-3xl p-6 
                hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.4)]
              "
      >
        <CardItem
          translateZ="100"
          rotateX={5}
          rotateZ={-4}
          className="
                  w-full mb-6 relative rounded-2xl overflow-hidden
                  shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]
                  group-hover/card:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.55)]
                  transition-all duration-700 ease-out
                "
        >
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${project.gradient} z-10 mix-blend-overlay transition-opacity duration-700`}
          />

          {/* Image */}
          <img
            src={project.image}
            className="
                    h-52 w-full object-cover 
                    group-hover/card:scale-[1.15] 
                    transition-transform duration-700 ease-out"
            alt={project.title}
          />
        </CardItem>

        {/* Title */}
        <CardItem
          translateZ="100"
          className="
                  text-2xl font-bold text-neutral-900 dark:text-white
                  transition-all duration-1000 ease-out mb-3
                "
        >
          {project.title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="80"
          className="
                  text-neutral-600 dark:text-neutral-300 text-sm mb-4
                  transition-all duration-1000 ease-out leading-relaxed
                "
        >
          {project.description}
        </CardItem>

        {/* Tags */}
        <CardItem
          translateZ="80"
          className="flex flex-wrap gap-2 mb-6 transition-all duration-700 ease-out"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                      px-3 py-1 bg-blue-100/80 border border-blue-200/60 
                      text-blue-700 rounded-full text-xs font-semibold
                      hover:scale-110 transition-transform duration-400
                    "
            >
              {tag}
            </span>
          ))}
        </CardItem>

        {/* Actions */}
        <div className="flex gap-3">
          <CardItem
            translateZ={50}
            translateX={-20}
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
                    flex-1 flex items-center justify-center gap-2 py-2.5 
                  bg-blue-600 hover:bg-blue-800 text-white rounded-xl 
                    font-semibold hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.5)]
                    transition-all duration-700 ease-out group/btn text-sm
                  "
          >
            <span>View Live</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </CardItem>
          <CardItem
            translateZ={50}
            translateX={20}
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
                    p-2.5 bg-white/50 border-white/60  
                    hover:scale-110 hover:shadow-lg rounded-xl
                    transition-all duration-700 ease-out group/icon
                  "
          >
            <Github className="w-5 h-5 text-neutral-700 group-hover/icon:rotate-12 transition-transform duration-300" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
