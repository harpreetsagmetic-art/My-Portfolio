import { profile } from "@/data/resume";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "25+", label: "Projects Delivered" },
  { value: "8+", label: "Trading & Betting Sites" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center px-6 md:px-16 pt-28 md:pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="font-mono text-xs tracking-wide text-amber mb-5 uppercase">
          Available for Freelance &amp; Full-Time Remote Roles
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-offwhite">
          {profile.name}
        </h1>
        <p className="font-display text-xl sm:text-2xl text-muted mt-4 max-w-2xl">
          {profile.title} — 4+ years shipping stores, plugins, and
          automations that clients depend on.
        </p>
        <p className="font-body text-base text-muted mt-6 max-w-content leading-relaxed">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#contact"
            className="font-display text-base font-semibold px-7 py-3.5 bg-amber text-ink rounded-sm hover:bg-offwhite transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="font-display text-base font-semibold px-7 py-3.5 border border-border text-offwhite rounded-sm hover:border-amber hover:text-amber transition-colors"
          >
            View My Work
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg border-t border-border pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-3xl text-amber">
                {s.value}
              </p>
              <p className="font-body text-xs text-muted mt-1 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
