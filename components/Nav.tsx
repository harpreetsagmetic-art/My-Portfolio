"use client";

import { useState } from "react";
import { profile } from "@/data/resume";

const links = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#deliver", label: "What I Deliver" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop rail */}
      <nav className="hidden md:flex md:flex-col md:justify-between fixed left-0 top-0 h-screen w-20 border-r border-border bg-panel/60 backdrop-blur-sm z-40">
        <div className="flex flex-col items-center pt-6 gap-6">
          <a
            href="#top"
            className="h-10 w-10 rounded-full border border-amberdim flex items-center justify-center font-mono text-sm text-amber"
            aria-label="Back to top"
          >
            HS
          </a>
          <div className="flex flex-col gap-5 mt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                title={l.label}
                className="font-mono text-[11px] text-muted hover:text-amber transition-colors [writing-mode:vertical-rl] rotate-180 py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center pb-6 gap-3 font-mono text-[10px] text-muted">
          <span className="[writing-mode:vertical-rl] rotate-180">
            {profile.location}
          </span>
          <span className="h-2 w-2 rounded-full bg-amber" aria-hidden />
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-ink/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#top" className="font-mono text-sm text-amber">
            HS
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="font-mono text-xs text-offwhite border border-border rounded px-3 py-1.5"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
        {open && (
          <div className="flex flex-col border-t border-border">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-5 py-3 border-b border-border font-mono text-sm text-offwhite"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
