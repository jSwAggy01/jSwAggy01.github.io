import { projects } from "../data/content";

export default function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        {/* Column header row */}
        <div className="grid grid-cols-12 gap-6 border-b border-border py-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="col-span-1">Index</span>
          <span className="col-span-5 sm:col-span-4">Project</span>
          <span className="hidden sm:col-span-3 sm:block">Category</span>
          <span className="col-span-3 sm:col-span-2">Role</span>
          <span className="col-span-3 sm:col-span-2 text-right">Year</span>
        </div>

        {projects.map((project) => (
          <a
            key={project.index}
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group block border-b border-border last:border-b-0"
          >
            <div className="grid grid-cols-12 items-baseline gap-6 py-10 sm:py-14">
              <span className="col-span-1 text-xs tabular-nums text-muted-foreground">
                {project.index}
              </span>
              <div className="col-span-11 sm:col-span-4">
                <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-light leading-[1.02] tracking-[-0.03em] transition-opacity group-hover:opacity-60">
                  {project.title}
                </h2>
              </div>
              <span className="col-span-6 hidden text-sm text-muted-foreground sm:col-span-3 sm:block">
                {project.category}
              </span>
              <span className="col-span-6 text-sm text-muted-foreground sm:col-span-2">
                {project.role}
              </span>
              <span className="col-span-6 text-right text-sm tabular-nums text-muted-foreground sm:col-span-2">
                {project.year}
              </span>
            </div>

            <div className="grid grid-cols-12 gap-6 pb-10 sm:pb-14">
              <div className="col-span-1" />
              <p className="col-span-11 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:col-span-7">
                {project.description}
              </p>
              <div className="col-span-12 mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] sm:col-span-4 sm:mt-0 sm:justify-end">
                <span className="transition-opacity group-hover:opacity-60">
                  Visit project
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
