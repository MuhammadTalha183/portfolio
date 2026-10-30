"use client";
import { useEffect, useState } from "react";

const rotatingWords = ["delight.", "just work.", "load fast.", "convert."];

type Tab = "E-commerce" | "Dashboard" | "Resume Builder";

const tabs: Tab[] = ["E-commerce", "Dashboard", "Resume Builder"];

const products = [
  { name: "Wireless Headphones", price: "Rs 4,999", color: "bg-[#ff7a59]" },
  { name: "Smart Watch", price: "Rs 12,999", color: "bg-teal-400" },
  { name: "Mech. Keyboard", price: "Rs 7,500", color: "bg-slate-200" },
  { name: "Running Shoes", price: "Rs 6,200", color: "bg-teal-400" },
  { name: "Backpack", price: "Rs 3,100", color: "bg-slate-200" },
  { name: "Sunglasses", price: "Rs 2,400", color: "bg-[#ff7a59]" },
];

const stats = [
  { value: "All", label: "Frontend projects" },
  { value: "React+ Next.js", label: "Core stack" },
  { value: "100%", label: "Responsive builds" },
  { value: "Internship", label: "Ready to start" },
];

const marquee = [
  "Git & GitHub", "Figma", "Vercel", "React", "Next.js", "JavaScript",
  "Tailwind CSS", "HTML5", "CSS3", "Responsive Design",
];

export default function Hero() {
  const [tab, setTab] = useState<Tab>("E-commerce");
  const [cart, setCart] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="bg-[#0b1220]"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to frontend internships · Karachi, PK
          </p>
          <p className="mt-8 text-lg text-slate-400 sm:text-xl">
            Muhammad Talha — CS @ SMIU, 5th Semester
          </p>
          <h1 className="mt-3 text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl">
            I build interfaces
            <br />
            that{" "}
            <span key={rotatingWords[wordIndex]} className="animate-fade-up text-[#ff7a59]">
              {rotatingWords[wordIndex]}
            </span>
            <span className="animate-pulse text-[#ff7a59]">|</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I&apos;m a <strong className="text-slate-200">Frontend Developer</strong> working in{" "}
            <strong className="text-slate-200">React, Next.js and modern CSS</strong> — I turn
            designs into fast, responsive, pixel-careful interfaces people actually enjoy using.
             projects, all on GitHub, .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-xl bg-[#ff7a59] px-6 py-3 text-center font-semibold text-white hover:bg-[#ff6a45]">
              See my projects ↓
            </a>
            <a href="https://github.com/Muhammadtalha183" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-center font-semibold text-white hover:border-slate-500">
              GitHub profile ↗
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3">
                <p className="text-sm font-bold text-white">{s.value}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="absolute -top-3 right-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs text-emerald-300">
              Responsive by default · Mobile — desktop, no breakage
            </div>
            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                talha.dev / {tab === "E-commerce" ? "ecommerce-app" : tab === "Dashboard" ? "dashboard" : "resume-builder"}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 px-4 pt-4">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${tab === t ? "bg-white text-slate-950" : "bg-slate-800 text-slate-300"}`}
                >
                  {t}
                </button>
              ))}
              <span className="ml-auto rounded-full bg-[#ff7a59]/20 px-3 py-1 text-xs text-[#ff7a59]">
                Cart {cart}
              </span>
            </div>

            {tab === "E-commerce" && (
              <div className="p-4">
                <p className="font-bold text-white">ShopHub</p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {products.map((p) => (
                    <div key={p.name} className="rounded-xl bg-slate-950 p-3">
                      <div className={`h-14 rounded-lg ${p.color}`} />
                      <p className="mt-2 text-xs font-semibold text-white">{p.name}</p>
                      <p className="text-xs text-slate-500">{p.price}</p>
                      <button onClick={() => setCart((c) => c + 1)} className="mt-2 w-full rounded-lg bg-white py-1.5 text-xs font-semibold text-slate-950">
                        Add to cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "Dashboard" && (
              <div className="p-4">
                <p className="font-bold text-white">Dashboard</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {["Users 1,240", "Sales Rs 84k", "Growth +18%"].map((d) => (
                    <div key={d} className="rounded-xl bg-slate-950 p-3 text-xs font-semibold text-white">{d}</div>
                  ))}
                </div>
                <div className="mt-3 flex h-28 items-end gap-2 rounded-xl bg-slate-950 p-3">
                  {[40, 70, 55, 90, 65, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded bg-teal-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            )}

            {tab === "Resume Builder" && (
              <div className="p-4">
                <p className="font-bold text-white">Resume Builder</p>
                <div className="mt-3 rounded-xl bg-slate-950 p-4">
                  <p className="font-bold text-white">Muhammad Talha</p>
                  <p className="text-xs text-slate-400">Frontend Developer · React / Next.js</p>
                  <div className="mt-3 space-y-2">
                    {["React 90%", "Next.js 85%", "Tailwind 90%"].map((s) => (
                      <div key={s} className="h-2 rounded bg-slate-800"><div className="h-2 rounded bg-[#ff7a59]" style={{ width: "85%" }} /></div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <p className="border-t border-slate-800 px-4 py-3 text-xs text-slate-500">
              Try it — It&apos;s live · Switch tabs, add to cart above
            </p>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            This preview is working UI, built with the same skills.
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-slate-800 py-3">
        <div className="flex w-max animate-marquee gap-8 text-sm text-slate-500">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="whitespace-nowrap">{m} <span className="text-[#ff7a59]">+</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
