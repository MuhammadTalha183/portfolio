type Skill = { name: string; level: string; width: number };
type Group = { title: string; detail: string; color: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Frontend — my core",
    detail: "Where my projects and practice time go.",
    color: "bg-[#ff7a59]",
    skills: [
      { name: "React — components & state", level: "CORE", width: 90 },
      { name: "Next.js — routing & SSR basics", level: "CORE", width: 85 },
      { name: "JavaScript (ES6+)", level: "CORE", width: 80 },
      { name: "HTML5 & semantic markup", level: "STRONG", width: 75 },
    ],
  },
  {
    title: "Styling & UI",
    detail: "Where an interface becomes an experience.",
    color: "bg-[#ff7a59]",
    skills: [
      { name: "CSS3 — Flexbox, Grid, animations", level: "CORE", width: 90 },
      { name: "Tailwind CSS", level: "STRONG", width: 85 },
      { name: "Responsive & mobile-first design", level: "CORE", width: 90 },
      { name: "Bootstrap", level: "SOLID", width: 70 },
    ],
  },
  {
    title: "Tools & workflow",
    detail: "How work gets built, tracked and shipped in a team.",
    color: "bg-teal-400",
    skills: [
      { name: "Git & GitHub", level: "DAILY", width: 90 },
      { name: "VS Code", level: "DAILY", width: 90 },
      { name: "Figma — reading & matching designs", level: "WORKING", width: 70 },
      { name: "Vercel deployment", level: "WORKING", width: 75 },
    ],
  },
  {
    title: "Foundations & growing",
    detail: "The base under the frontend — and where I'm heading next.",
    color: "bg-teal-400",
    skills: [
      { name: "Python", level: "CERTIFIED · PITP", width: 85 },
      { name: "Node.js & REST API basics", level: "GROWING", width: 65 },
      { name: "PostgreSQL basics", level: "GROWING", width: 60 },
      { name: "CS fundamentals — OS, DB theory", level: "SOLID", width: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b1220] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-widest text-[#ff7a59]">STACK</p>
        <h2 className="mt-3 text-[clamp(1.9rem,6vw,3rem)] leading-tight font-extrabold tracking-tight text-balance text-white">
          What I bring to a frontend team.
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Depth in the core frontend stack, the tooling teams actually use, and CS foundations
          underneath it all.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{group.detail}</p>
              <div className="mt-6 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm font-semibold text-slate-200">{skill.name}</p>
                      <p className="shrink-0 text-[11px] font-bold tracking-widest text-slate-500">
                        {skill.level}
                      </p>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-slate-800">
                      <div className={`h-1.5 rounded-full ${group.color}`} style={{ width: `${skill.width}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
