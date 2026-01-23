import { type TechStackData } from "@/components/sections/about/data/techStackData";
import { Layers, Monitor } from "lucide-react";
import React, { useState, type FC } from "react";

interface Props {
  techStack: TechStackData[];
  title: string;
  iconName: "layers" | "monitor";
}

export const TechStackCarousel: FC<Props> = ({
  techStack,
  title,
  iconName,
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Mapeo de iconos
  const iconMap = {
    layers: <Layers className="w-5 h-5 text-blue-600 inline-block mr-1" />,
    monitor: <Monitor className="w-5 h-5 text-blue-600 inline-block mr-1" />,
  };

  const icono = iconMap[iconName];

  return (
    <div className="overflow-hidden">
      <h4 className="text-lg font-bold text-neutral-900 mb-6 text-center">
        {icono} {title}
      </h4>

      <div className="relative">
        {/* Carousel - Ahora con 2 copias completas */}
        <div className="flex gap-8 animate-scroll-infinite">
          {/* Primera copia */}
          {techStack.map((tech) => (
            <div
              key={`first-${tech.name}`}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className="
                w-16 h-16 flex items-center justify-center bg-white/50 backdrop-blur-sm 
                border border-white/60 rounded-2xl hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer
                "
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              </div>

              {hoveredTech === tech.name && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 animate-in fade-in zoom-in duration-200">
                  <div
                    className="px-3 py-1.5 bg-neutral-900 text-white text-sm font-semibold rounded-lg shadow-xl whitespace-nowrap"
                    style={{
                      borderBottom: `3px solid ${tech.color}`,
                    }}
                  >
                    {tech.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Segunda copia - idéntica */}
          {techStack.map((tech) => (
            <div
              key={`second-${tech.name}`}
              className="relative shrink-0"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className="
                w-16 h-16 flex items-center justify-center bg-white/50 backdrop-blur-sm 
                border border-white/60 rounded-2xl hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer
                "
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              </div>

              {hoveredTech === tech.name && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 animate-in fade-in zoom-in duration-200">
                  <div
                    className="px-3 py-1.5 bg-neutral-900 text-white text-sm font-semibold rounded-lg shadow-xl whitespace-nowrap"
                    style={{
                      borderBottom: `3px solid ${tech.color}`,
                    }}
                  >
                    {tech.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
