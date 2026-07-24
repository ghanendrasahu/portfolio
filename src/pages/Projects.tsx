import { ArrowUpRight, GitBranch } from "lucide-react";
import projects from "../data/projects";
import CardTilt from "../components/3d/CardTilt";

export default function Projects() {
  return (
    <>
      <h2 className="page-title">Projects</h2>
      <p className="page-subtitle">Production-grade ML and AI applications</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <CardTilt key={project.id}>
            <article
              className="group relative h-full overflow-hidden rounded-[10px] border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent"
            >
              <img
                src="/bg-projects.jpg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="pointer-events-none absolute inset-0 bg-bg/70" aria-hidden="true" />
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent to-accent3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative">
            <span className="mb-3.5 block text-[28px]">{project.emoji}</span>
            <h3 className="mb-2.5 font-display text-[16.5px] font-semibold">{project.title}</h3>
            <p className="mb-4 text-[13.5px] leading-relaxed text-tsecondary">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-accent hover:underline"
              >
                <GitBranch size={14} />
                View on GitHub →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-accent hover:underline"
                >
                  <ArrowUpRight size={14} />
                  Live Demo
                </a>
              )}
            </div>
              </div>
          </article>
          </CardTilt>
        ))}
      </div>
    </>
  );
}
