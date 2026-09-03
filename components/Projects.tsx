import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-16 py-24 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="font-mono text-sm text-amberdim">04</span>
          <h2 className="font-display font-bold text-3xl text-offwhite">
            Key projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-border rounded-sm p-6 hover:border-amberdim transition-colors"
            >
              <h3 className="font-display font-bold text-lg text-offwhite">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-muted mt-3 leading-relaxed">
                {project.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
