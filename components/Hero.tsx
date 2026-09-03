import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center px-6 md:px-16 pt-24 md:pt-0"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <p className="font-mono text-sm text-amber mb-4">
            available for freelance &amp; full-time remote roles
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-offwhite">
            {profile.name}
          </h1>
          <p className="font-display text-xl sm:text-2xl text-muted mt-4 max-w-xl">
            {profile.title} — 4+ years shipping stores, plugins, and
            automations that clients depend on.
          </p>
          <p className="font-body text-base text-muted mt-6 max-w-content leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="font-mono text-sm px-5 py-3 bg-amber text-ink font-medium rounded-sm hover:bg-offwhite transition-colors"
            >
              get in touch
            </a>
            <a
              href="#projects"
              className="font-mono text-sm px-5 py-3 border border-border text-offwhite rounded-sm hover:border-amber hover:text-amber transition-colors"
            >
              see the work
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-md border border-border bg-panel overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-panel2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E85D5D]" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#6DBE7C]" />
              <span className="font-mono text-[11px] text-muted ml-2">
                whoami.sh
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7">
              <p className="text-muted">
                <span className="text-amber">$</span> whoami
              </p>
              <p className="text-offwhite">harpreet-singh</p>
              <p className="text-muted mt-2">
                <span className="text-amber">$</span> cat role.txt
              </p>
              <p className="text-offwhite">
                Senior WordPress &amp; WooCommerce Developer
              </p>
              <p className="text-muted mt-2">
                <span className="text-amber">$</span> ls stack/
              </p>
              <p className="text-offwhite">
                wordpress&nbsp;&nbsp;woocommerce&nbsp;&nbsp;ghl&nbsp;&nbsp;bigcommerce&nbsp;&nbsp;make.com
              </p>
              <p className="text-muted mt-2">
                <span className="text-amber">$</span> echo $PROJECTS_SHIPPED
              </p>
              <p className="text-offwhite">25+</p>
              <p className="mt-2 text-offwhite type-line border-r-2 border-amber pr-1">
                <span className="text-amber">$</span> _
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
