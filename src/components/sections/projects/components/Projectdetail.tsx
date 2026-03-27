"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  Code2,
  Users,
  GitBranch,
  Lock,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Network,
  Wrench,
  GitMerge,
  LayoutDashboard,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  TriangleAlert,
} from "lucide-react";
import type { Project } from "../types/Project.type";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/types";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";

interface ProjectDetailPageProps {
  project: Project;
  locale: Locale;
  onBack: string;
  switchToPath: string;
}

function Lightbox({
  images,
  startIndex,
  onClose,
  screenshotLabel,
  swipeHint,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
  screenshotLabel: string;
  swipeHint: string;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full p-2 bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors cursor-pointer"
      >
        <X size={20} />
      </button>

      <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tabular-nums">
        {current + 1} / {images.length}
      </span>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-2 sm:left-4 z-10 rounded-full p-2 sm:p-3 bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div
        className="relative w-full mx-8 sm:mx-16 max-w-5xl rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <picture key={current}>
          <source srcSet={images[current]} type="image/webp" />
          <img
            src={images[current]}
            alt={`${screenshotLabel} ${current + 1}`}
            className="w-full h-full object-contain"
            style={{
              maxHeight: "80vh",
              imageRendering: "crisp-edges",
            }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-2 sm:right-4 z-10 rounded-full p-2 sm:p-3 bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs sm:hidden">
        {swipeHint}
      </p>
    </div>
  );
}

export const ProjectDetailPage = ({
  project,
  locale,
  onBack,
  switchToPath,
}: ProjectDetailPageProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = project.images?.slice(1) ?? [];

  const t =
    locale === "es"
      ? {
          swipeHint: "Usa los botones para navegar",
          back: "Volver",
          statusCompleted: "Completado",
          statusInProgress: "En progreso",
          team: "Equipo",
          developerSingular: "desarrollador",
          developerPlural: "desarrolladores",
          methodology: "Metodología",
          repository: "Repositorio",
          viewOnGithub: "Ver en GitHub",
          privateRepo: "Privado - Proyecto gubernamental",
          problem: "Problema",
          solution: "Solución",
          keyFeatures: "Características clave",
          architecture: "Arquitectura del sistema",
          impact: "Impacto",
          technicalChallenges: "Desafíos técnicos",
          technicalDecisions: "Decisiones técnicasw clave",
          interfacePreview: "Vista previa de la interfaz",
          screenshotLabel: "Captura",
          previewAlt: "Vista previa del proyecto",
        }
      : {
          swipeHint: "Use the buttons to navigate",
          back: "Back",
          statusCompleted: "Completed",
          statusInProgress: "In Progress",
          team: "Team",
          developerSingular: "developer",
          developerPlural: "developers",
          methodology: "Methodology",
          repository: "Repository",
          viewOnGithub: "View on GitHub",
          privateRepo: "Private - Government Project",
          problem: "Problem",
          solution: "Solution",
          keyFeatures: "Key Features",
          architecture: "System Architecture",
          impact: "Impact",
          technicalChallenges: "Technical Challenges",
          technicalDecisions: "Key Technical Decisions",
          interfacePreview: "Interface Preview",
          screenshotLabel: "Screenshot",
          previewAlt: "Project preview",
        };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 relative min-h-screen text-neutral-900">
      <div className="relative z-10">
        <section className="max-w-7xl mx-auto mt-12 mb-12">
          <div className="mb-6 flex items-center justify-between gap-3">
            <a href={onBack}>
              <Button className="group inline-flex items-center gap-2 rounded-xl backdrop-blur-xl bg-white/15 border border-white/30 text-sm font-medium text-neutral-900 hover:bg-white/25 hover:scale-103">
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                {t.back}
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl p-10 backdrop-blur-2xl bg-white/20 border border-white/30 shadow-2xl ring-1 ring-white/40">
            <div>
              <div className="flex items-center gap-2 mb-3 text-sm text-neutral-800">
                <span>
                  {project.role} · {project.year}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    project.status === "completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : project.status === "in-progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {project.status === "completed"
                    ? t.statusCompleted
                    : project.status === "in-progress"
                      ? t.statusInProgress
                      : project.status}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                {project.title}
              </h1>

              <p className="mt-6 text-lg text-neutral-800 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {project.images?.[0] && (
              <picture>
                <source srcSet={project.images[0]} type="image/webp" />
                <img
                  src={project.images[0]}
                  alt={t.previewAlt}
                  className="rounded-2xl border border-white/40 shadow-2xl w-full h-auto"
                  loading="lazy"
                  decoding="async"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </picture>
            )}
          </div>
        </section>

        <section className="max-w-7xl mx-auto pb-12">
          <div className="rounded-2xl p-6 backdrop-blur-xl bg-white/20 border border-white/30 ring-1 ring-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden">
              {project.stack && (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={14} className="text-neutral-600" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                      Stack
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-white/20 border border-white/30 text-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.teamSize && (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={14} className="text-neutral-600" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                      {t.team}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-800 font-medium">
                    {project.teamSize}{" "}
                    <span className="font-normal text-neutral-600">
                      {project.teamSize === 1
                        ? t.developerSingular
                        : t.developerPlural}
                    </span>
                  </p>
                </div>
              )}

              {project.methodology && (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch size={14} className="text-neutral-600" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                      {t.methodology}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-800">
                    {project.methodology}
                  </p>
                </div>
              )}

              {project.githubUrl ? (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink size={14} className="text-neutral-500" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                      {t.repository}
                    </h3>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 underline underline-offset-2 hover:text-neutral-600 transition-colors flex items-center gap-1"
                  >
                    {t.viewOnGithub}
                    <ExternalLink size={11} />
                  </a>
                </div>
              ) : project.isPrivate ? (
                <div className="bg-white/5 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock size={14} className="text-neutral-500" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                      {t.repository}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 flex items-center gap-1.5">
                    <Lock size={12} className="shrink-0" />
                    {t.privateRepo}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto pb-12 grid md:grid-cols-2 gap-10">
          {[project.problem, project.solution].map(
            (content, i) =>
              content && (
                <div
                  key={i}
                  className="rounded-2xl p-8 backdrop-blur-xl bg-white/15 border border-white/30 shadow-2xl ring-1 ring-white/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {i === 0 ? (
                      <AlertTriangle
                        size={16}
                        className="text-neutral-500 shrink-0"
                      />
                    ) : (
                      <Lightbulb
                        size={16}
                        className="text-neutral-500 shrink-0"
                      />
                    )}
                    <h2 className="text-xl font-semibold">
                      {i === 0 ? t.problem : t.solution}
                    </h2>
                  </div>
                  <p className="text-neutral-800 leading-7 text-sm">
                    {content}
                  </p>
                </div>
              ),
          )}
        </section>

        {project.keyFeatures && (
          <section className="max-w-7xl mx-auto pb-12">
            <div className="flex items-center gap-3 mb-5">
              <Sparkles size={18} className="text-neutral-600" />
              <h2 className="text-2xl font-semibold tracking-tight">
                {t.keyFeatures}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {project.keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="group relative rounded-2xl p-6 backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-white/30 ring-1 ring-white/20 shadow-2xl duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-neutral-600 group-hover:text-neutral-700 transition-colors"
                    />
                    <p className="text-neutral-800 text-sm leading-6 relative z-10">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(project.architecture || project.impact) && (
          <section className="max-w-7xl mx-auto pb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {project.architecture && (
                <div className="rounded-3xl p-10 backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Network size={18} className="text-neutral-600 shrink-0" />
                    <h2 className="text-xl font-semibold">{t.architecture}</h2>
                  </div>
                  <p className="text-neutral-800 leading-7">
                    {project.architecture}
                  </p>
                </div>
              )}

              {project.impact && (
                <div className="rounded-3xl p-10 backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp
                      size={18}
                      className="text-neutral-600 shrink-0"
                    />
                    <h2 className="text-xl font-semibold">{t.impact}</h2>
                  </div>
                  <p className="text-neutral-800 leading-7">{project.impact}</p>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto pb-12 grid md:grid-cols-2 gap-10">
          {project.challenges && (
            <div className="rounded-3xl p-10 backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={16} className="text-neutral-600 shrink-0" />
                <h2 className="text-xl font-semibold">
                  {t.technicalChallenges}
                </h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-2 text-sm text-neutral-800"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.decisions && (
            <div className="rounded-3xl p-10 backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <GitMerge size={16} className="text-neutral-600 shrink-0" />
                <h2 className="text-xl font-semibold">
                  {t.technicalDecisions}
                </h2>
              </div>
              <ul className="space-y-3">
                {project.decisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex items-start gap-2 text-sm text-neutral-800"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {project.warning && (
          <div className="max-w-7xl mx-auto pb-6">
            <div className="flex items-start gap-3 rounded-xl border border-white/30 bg-white/15 backdrop-blur-xl px-4 py-3 text-amber-600 text-sm">
              <TriangleAlert size={16} className="shrink-0 mt-0.5" />
              <p>{project.warning}</p>
            </div>
          </div>
        )}

        {galleryImages.length > 0 && (
          <section className="max-w-7xl mx-auto pb-12">
            <div className="flex items-center gap-3 mb-5">
              <LayoutDashboard
                size={18}
                className="text-neutral-600 shrink-0"
              />
              <h2 className="text-2xl font-semibold">{t.interfacePreview}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative rounded-2xl p-3 cursor-zoom-in bg-white/10 backdrop-blur-sm border border-white/30 ring-1 ring-white/30 shadow-2xl transition-transform hover:scale-[1.015]"
                >
                  <picture>
                    <source srcSet={img} type="image/webp" />
                    <img
                      src={img}
                      alt={`${t.screenshotLabel} ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i === 0 ? "high" : "auto"}
                      className="w-full h-full rounded-xl object-contain"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </picture>
                  <div className="absolute inset-3 rounded-xl flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 shadow-lg">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          screenshotLabel={t.screenshotLabel}
          swipeHint={t.swipeHint}
        />
      )}
    </div>
  );
};
