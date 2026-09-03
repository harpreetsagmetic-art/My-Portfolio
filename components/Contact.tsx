import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-28 border-t border-border"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs tracking-wide text-amber mb-4 uppercase">
          07 — Let&apos;s Work Together
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-offwhite max-w-2xl mx-auto leading-tight">
          Have a store, plugin, or automation that needs shipping?
        </h2>
        <p className="font-body text-muted mt-4">{profile.availability}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-base font-semibold px-7 py-3.5 bg-amber text-ink rounded-sm hover:bg-offwhite transition-colors"
          >
            Email Me
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="font-display text-base font-semibold px-7 py-3.5 border border-border text-offwhite rounded-sm hover:border-amber hover:text-amber transition-colors"
          >
            Call Me
          </a>
        </div>
        <p className="font-mono text-sm text-muted mt-6">
          {profile.email} · {profile.phone}
        </p>
      </div>
    </section>
  );
}
