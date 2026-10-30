const now = [
  "React & Next.js — components, props, state, routing",
  "Modern CSS & Tailwind — layouts that hold up at every width",
  "Real project types: commerce, content, dashboards, tools",
  "Git & GitHub workflow, deployed on Vercel",
];

const ahead = [
  "Node.js & Express fundamentals",
  "PostgreSQL & REST API basics",
  "Python — certified at PITP, NED",
];

export default function About() {
  return (
    <section id="about" className="bg-[#0b1220] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-widest text-[#ff7a59]">ABOUT</p>
        <h2 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
          Frontend first.
          <br />
          Full-stack in the making.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I&apos;m entering professional life through frontend — the craft I can already prove
          with shipped projects — while I keep growing toward the server side.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#ff7a59] bg-slate-900/70 p-6 sm:p-8">
            <span className="rounded-full bg-[#ff7a59]/20 px-3 py-1 text-[11px] font-bold tracking-widest text-[#ff7a59]">
              NOW — FRONTEND DEVELOPER
            </span>
            <h3 className="mt-5 text-2xl leading-tight font-bold text-white">
              The developer
              <br />
              you&apos;d be hiring
            </h3>
            <p className="mt-3 text-slate-400">
              I build complete, responsive interfaces in React and Next.js — component-based,
              state-driven, and careful about the details users feel: spacing, speed, and how a
              page behaves on a phone.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {now.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#ff7a59]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold tracking-widest text-emerald-400">
              THE ROAD AHEAD
            </span>
            <h3 className="mt-5 text-2xl leading-tight font-bold text-white">
              Backend —
              <br />
              next step, on the job
            </h3>
            <p className="mt-3 text-slate-400">
              My plan, on my teacher&apos;s advice: start in frontend, then deepen backend skills
              on real team projects and grow into full-stack. The foundations are already there.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {ahead.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#ff7a59]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
