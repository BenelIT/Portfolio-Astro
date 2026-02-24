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
} from "lucide-react";
import type { Project } from "../types/Project.type";
import { Button } from "@/components/ui/button";

interface ProjectDetailPageProps {
  project: Project;
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
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
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 rounded-full p-2
          bg-white/10 border border-white/20 text-white
          hover:bg-white/25 transition-colors cursor-pointer"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tabular-nums">
        {current + 1} / {images.length}
      </span>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 z-10 rounded-full p-3
            bg-white/10 border border-white/20 text-white
            hover:bg-white/25 transition-colors cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-16
          rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <picture key={current}>
          <source srcSet={images[current]} type="image/webp" />
          <img
            src={images[current]}
            alt={`Screenshot ${current + 1}`}
            className="w-full h-full object-contain"
            style={{ maxHeight: "85vh", imageRendering: "crisp-edges" }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 z-10 rounded-full p-3
            bg-white/10 border border-white/20 text-white
            hover:bg-white/25 transition-colors cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export const ProjectDetailPage = ({ project }: ProjectDetailPageProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = project.images?.slice(1) ?? [];

  return (
    <div className="relative min-h-screen text-neutral-900">
      <div className="relative z-10">
        {/* HERO */}
        <section className="max-w-7xl mx-auto mt-12 mb-12 ">
          {/* Back button row */}
          <div className="mb-6">
            <a href="/">
              <Button
                className="group inline-flex items-center gap-2 rounded-xl backdrop-blur-xl bg-white/15
                 border border-white/30 text-sm font-medium text-neutral-900 hover:bg-white/25 hover:scale-103"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Volver
              </Button>
            </a>
          </div>

          {/* Hero Card */}
          <div
            className="grid md:grid-cols-2 gap-12 items-center rounded-3xl p-10 backdrop-blur-2xl bg-white/20
               border border-white/30 shadow-2xl ring-1 ring-white/40"
          >
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
                    ? "Completado"
                    : project.status === "in-progress"
                      ? "En progreso"
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
                  alt="Project preview"
                  className="rounded-2xl border border-white/40 shadow-2xl w-full h-auto"
                  loading="lazy"
                  decoding="async"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </picture>
            )}
          </div>
        </section>

        {/* TECHNICAL DETAILS */}
        <section className="max-w-7xl mx-auto pb-12">
          <div className="rounded-2xl p-6 backdrop-blur-xl bg-white/20 border border-white/30 ring-1 ring-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden">
              {/* Stack */}
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

              {/* Team */}
              {project.teamSize && (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={14} className="text-neutral-600" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                      Team
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-800 font-medium">
                    {project.teamSize}{" "}
                    <span className="font-normal text-neutral-600">
                      {project.teamSize === 1
                        ? "desarrollador"
                        : "desarrolladores"}
                    </span>
                  </p>
                </div>
              )}

              {/* Methodology */}
              {project.methodology && (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch size={14} className="text-neutral-600" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                      Methodology
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-800">
                    {project.methodology}
                  </p>
                </div>
              )}

              {/* Repository */}
              {project.githubUrl ? (
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink size={14} className="text-neutral-500" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                      Repository
                    </h3>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 underline underline-offset-2 hover:text-neutral-600 transition-colors flex items-center gap-1"
                  >
                    View on GitHub
                    <ExternalLink size={11} />
                  </a>
                </div>
              ) : project.isPrivate ? (
                <div className="bg-white/5 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock size={14} className="text-neutral-500" />
                    <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                      Repository
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 flex items-center gap-1.5">
                    <Lock size={12} className="shrink-0" />
                    Private — government project
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="max-w-7xl mx-auto pb-12 grid md:grid-cols-2 gap-10">
          {[project.problem, project.solution].map(
            (content, i) =>
              content && (
                <div
                  key={i}
                  className="rounded-2xl p-8 backdrop-blur-xl bg-white/15 border border-white/30
                  shadow-2xl ring-1 ring-white/30"
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
                      {i === 0 ? "Problema" : "Solución"}
                    </h2>
                  </div>
                  <p className="text-neutral-800 leading-7 text-sm">
                    {content}
                  </p>
                </div>
              ),
          )}
        </section>

        {/* FEATURES */}
        {project.keyFeatures && (
          <section className="max-w-7xl mx-auto pb-12">
            <div className="flex items-center gap-3 mb-5">
              <Sparkles size={18} className="text-neutral-600" />
              <h2 className="text-2xl font-semibold tracking-tight">
                Características clave
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {project.keyFeatures.map((f) => (
                <div
                  key={f}
                  className="group relative rounded-2xl p-6 backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-white/30 
                  ring-1 ring-white/20 shadow-2xl duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-neutral-600 group-hover:text-neutral-700 transition-colors"
                    />
                    <p className="text-neutral-800 text-sm leading-6 relative z-10">
                      {f}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ARCHITECTURE / IMPACT */}
        {(project.architecture || project.impact) && (
          <section className="max-w-7xl mx-auto pb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {project.architecture && (
                <div className="rounded-3xl p-10 backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Network size={18} className="text-neutral-600 shrink-0" />
                    <h2 className="text-xl font-semibold">
                      Arquitectura del sistema
                    </h2>
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
                    <h2 className="text-xl font-semibold">Impacto</h2>
                  </div>
                  <p className="text-neutral-800 leading-7">{project.impact}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Challenges */}
        <section className="max-w-7xl mx-auto pb-12 grid md:grid-cols-2 gap-10">
          {project.challenges && (
            <div className="rounded-3xl p-10 backdrop-blur-2xl bg-white/15 border border-white/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={16} className="text-neutral-600 shrink-0" />
                <h2 className="text-xl font-semibold">Desafíos técnicos</h2>
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
                  Decisiones técnicas clave
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

        {/* GALLERY */}
        {galleryImages.length > 0 && (
          <section className="max-w-7xl mx-auto pb-12">
            <div className="flex items-center gap-3 mb-5">
              <LayoutDashboard
                size={18}
                className="text-neutral-600 shrink-0"
              />
              <h2 className="text-2xl font-semibold">
                Vista previa de la interfaz
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative rounded-2xl p-3 cursor-zoom-in
                    bg-white/10 backdrop-blur-sm
                    border border-white/30 ring-1 ring-white/30
                    shadow-2xl transition-transform hover:scale-[1.015]"
                >
                  <picture>
                    <source srcSet={img} type="image/webp" />
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i === 0 ? "high" : "auto"}
                      className="w-full h-full rounded-xl object-contain"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </picture>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-3 rounded-xl flex items-center justify-center
                    bg-black/0 group-hover:bg-black/25 transition-colors"
                  >
                    <div
                      className="opacity-0 group-hover:opacity-100 transition-opacity
                      bg-white/20 backdrop-blur-sm border border-white/30
                      rounded-full p-3 shadow-lg"
                    >
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};
