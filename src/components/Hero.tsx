export default function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-24 sm:px-10 sm:pb-32 sm:pt-40">
        <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Jason De Leon — Software Engineer</span>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6 sm:gap-10">
          <h1 className="col-span-12 text-[clamp(2.75rem,9vw,9rem)] font-light leading-[0.95] tracking-[-0.04em] sm:col-span-8">
            Building tools
            <br />
            where <span className="italic font-extralight">math, maps, and</span>
            <br />
            <span className="italic font-extralight">people</span> meet.
          </h1>

          <figure className="col-span-12 flex flex-col gap-4 sm:col-span-4">
            <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
              <img
                src={`${import.meta.env.BASE_URL}jason-deleon.jpg`}
                alt="Portrait of Jason De Leon"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <figcaption className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Jason De Leon</span>
              <span>Software Engineer</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3">
          <p className="col-span-1 max-w-md text-sm leading-relaxed text-muted-foreground sm:col-span-2">
            A small archive of work across AI-native SaaS, GIS research, and
            full-stack engineering. Each project chosen for its clarity of
            intent.
          </p>
          <div className="flex items-end justify-start sm:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              <span>View the work</span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
