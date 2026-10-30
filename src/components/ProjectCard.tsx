import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-500 bg-slate-800 shadow-xl shadow-black/50 ring-1 ring-slate-600 transition hover:-translate-y-1 hover:border-[#ff7a59] hover:shadow-2xl">
      <div className="h-1.5 bg-[#ff7a59]" />
      <div className="p-5">
        <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-slate-200">{project.description}</p>
        <p className="mt-3 text-sm text-slate-300">Shows: {project.whatItShows}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-600 pt-4">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="font-bold text-[#ff8a6b] hover:text-white">
              Live Demo ↗
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" className="font-bold text-white hover:text-[#ff8a6b]">
            View code →
          </a>
        </div>
      </div>
    </article>
  );
}
