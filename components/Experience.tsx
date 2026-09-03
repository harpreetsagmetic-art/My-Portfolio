import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-16 py-24 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="font-mono text-sm text-amberdim">03</span>
          <h2 className="font-display font-bold text-3xl text-offwhite">
            Experience
          </h2>
        </div>

        <div className="space-y-14">
          {experience.map((job) => (
            <div
              key={job.role + job.org}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="md:col-span-1">
                <p className="font-mono text-sm text-amber">{job.period}</p>
                <p className="font-display font-bold text-lg text-offwhite mt-1">
                  {job.role}
                </p>
                <p className="font-body text-sm text-muted">{job.org}</p>
              </div>
              <ul className="md:col-span-3 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="font-body text-sm text-offwhite/90 leading-relaxed pl-4 border-l border-border"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
