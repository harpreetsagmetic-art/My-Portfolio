import { deliverables, platforms } from "@/data/resume";

export default function Deliverables() {
  return (
    <section
      id="deliver"
      className="px-6 md:px-16 py-24 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="font-mono text-sm text-amberdim">05</span>
          <h2 className="font-display font-bold text-3xl text-offwhite">
            What I deliver
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {deliverables.map((d) => (
            <div key={d.title} className="p-6 bg-panel rounded-sm">
              <h3 className="font-display font-bold text-base text-offwhite mb-2">
                {d.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {d.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-3 mb-8">
          <span className="font-mono text-sm text-amberdim">05.1</span>
          <h3 className="font-display font-bold text-xl text-offwhite">
            Platforms &amp; tools
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {Object.entries(platforms).map(([label, items]) => (
            <div key={label}>
              <p className="font-mono text-xs text-amber mb-2">{label}</p>
              <p className="font-body text-sm text-offwhite/90">
                {items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
