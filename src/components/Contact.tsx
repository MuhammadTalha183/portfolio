export default function Contact() {
  return (
    <footer id="contact" className="bg-[#0b1220]">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-xs font-bold tracking-widest text-[#ff7a59]">NEXT STEP</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-[clamp(1.9rem,6vw,3rem)] leading-tight font-extrabold tracking-tight text-balance text-white">
          Looking for a frontend intern who ships?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          I&apos;m ready to start, ready to learn your team&apos;s way of working, and happy to
          walk through any of these five projects line by line. The fastest way to judge my work
          is to read it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://github.com/Muhammadtalha183"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#ff7a59] px-6 py-3 font-semibold text-white hover:bg-[#ff6a45]"
          >
            Explore my GitHub ↗
          </a>
          <a
            href="#projects"
            className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white hover:border-slate-500"
          >
            Review the projects
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500">SMIU · Karachi, Pakistan · Asia/Karachi (PKT)</p>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© 2026 Muhammad Talha — Frontend Developer</p>
          <p>&quot;Code with purpose. Learn continuously. Build solutions that create impact.&quot;</p>
        </div>
      </div>
    </footer>
  );
}
