"use client";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0b1220]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff7a59] text-sm font-extrabold text-white">
            MT
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-white">Muhammad Talha</span>
            <span className="block text-[11px] font-semibold tracking-widest text-slate-400">
              FRONTEND DEVELOPER
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Muhammadtalha183"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-4 py-2 font-semibold text-slate-950 hover:bg-slate-200"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-lg border border-slate-700 px-3 py-2 text-lg text-white lg:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-4 pb-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Muhammadtalha183"
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-white px-4 py-2 text-center font-semibold text-slate-950"
          >
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  );
}
