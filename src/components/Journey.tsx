const left = [
  {
    tag: "NOW · 5TH SEMESTER",
    title: "BS Computer Science — SMIU",
    detail:
      "Sindh Madressatul Islam University, Karachi: Core CS — operating systems, databases and the theory behind the interfaces I build.",
  },
  {
    tag: "CURRENT FOCUS",
    title: "Frontend internship & professional growth",
    detail:
      "Applying for frontend internships to learn team workflows, code review and production standards — then growing toward backend and full-stack on the job.",
  },
  {
    tag: "PITP · NED UNIVERSITY",
    title: "People's IT Program trainee",
    detail:
      "Software engineering and programming training at NED University alongside my degree — where my Python and data science foundations were certified.",
  },
  {
    tag: "IN PUBLIC",
    title: "D CODES — content creator",
    detail:
      "Running an Instagram page teaching CS through short videos. Explaining interfaces and systems in public keeps my fundamentals sharp.",
  },
];

const certs = [
  { title: "Python Programming", detail: "People's IT Program (PITP) — NED University" },
  { title: "Data Science", detail: "People's IT Program (PITP) — NED University" },
  { title: "BS Computer Science — in progress", detail: "SMIU · Section VB · 5th Semester" },
];

const next = ["Node.js", "Express", "PostgreSQL", "REST APIs", "TypeScript"];

export default function Journey() {
  return (
    <section id="journey" className="bg-[#0b1220] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-widest text-[#ff7a59]">JOURNEY & CREDENTIALS</p>
        <h2 className="mt-3 text-[clamp(1.9rem,6vw,3rem)] leading-tight font-extrabold tracking-tight text-balance text-white">
          Where I am, honestly.
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Fifth semester of a CS degree, two PITP certifications from NED, five frontend projects
          shipped — and ready for my first professional team.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            {left.map((item) => (
              <div key={item.title} className="flex gap-4 pb-8 last:pb-0">
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#ff7a59]" />
                <div>
                  <p className="text-[11px] font-bold tracking-widest text-[#ff7a59]">{item.tag}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-950">Certifications</h3>
              <div className="mt-4 space-y-4">
                {certs.map((c) => (
                  <div key={c.title} className="border-b border-slate-300 pb-4 last:border-0 last:pb-0">
                    <p className="font-bold text-slate-950">{c.title}</p>
                    <p className="text-sm text-slate-600">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-teal-400/60 bg-slate-900 p-6">
              <h3 className="font-bold text-white">Growing toward full-stack</h3>
              <p className="mt-1 text-sm text-slate-400">
                The long-term path: frontend now, backend depth on the job, full-stack next.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {next.map((n) => (
                  <span key={n} className="rounded-md bg-slate-800 px-3 py-1 text-xs font-semibold text-white">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
