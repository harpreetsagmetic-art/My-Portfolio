import { education } from "@/data/resume";

export default function Education() {
  return (
    <section className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="font-mono text-sm text-amberdim">06</span>
          <h2 className="font-display font-bold text-3xl text-offwhite">
            Education
          </h2>
        </div>
        {education.map((e) => (
          <div
            key={e.degree}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-l border-border pl-4"
          >
            <div>
              <p className="font-display font-bold text-lg text-offwhite">
                {e.degree}
              </p>
              <p className="font-body text-sm text-muted">{e.org}</p>
            </div>
            <p className="font-mono text-sm text-amber mt-2 sm:mt-0">
              {e.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
