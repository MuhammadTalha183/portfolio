"use client";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Next.js", "React", "JavaScript"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-[#0b1220] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-widest text-[#ff7a59]">PROJECTS</p>
        <h2 className="mt-3 text-[clamp(1.9rem,6vw,3rem)] leading-tight font-extrabold tracking-tight text-balance text-white">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Real projects, live on Vercel, code on GitHub. Filter by stack.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                filter === f
                  ? "bg-[#ff7a59] text-white"
                  : "border border-slate-700 text-slate-300 hover:border-[#ff7a59]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
