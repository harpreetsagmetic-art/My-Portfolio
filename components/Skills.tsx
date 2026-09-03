import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="font-mono text-sm text-amberdim">02</span>
          <h2 className="font-display font-bold text-3xl text-offwhite">
            Core skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-ink p-6">
              <h3 className="font-mono text-xs text-amber mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm text-offwhite border border-border rounded-sm px-3 py-1.5"
                  >
                    {item}
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
