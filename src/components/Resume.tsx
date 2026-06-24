import { education, experience, resumePdf, toolkit } from "../data/content";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Résumé</span>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          >
            <span>Download PDF</span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>

        <h2 className="mt-10 text-[clamp(2rem,6vw,5rem)] font-light leading-[1] tracking-[-0.03em]">
          Mathematician and
          <br />
          passionate educator
          <br />
          turned{" "}
          <span className="italic font-extralight">software engineer.</span>
        </h2>

        {/* Experience */}
        <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border pt-10">
          <p className="col-span-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:col-span-3">
            Experience
          </p>
          <div className="col-span-12 sm:col-span-9">
            {experience.map((role) => (
              <div
                key={`${role.title}-${role.org}`}
                className="border-b border-border py-10 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-light tracking-[-0.01em] sm:text-2xl">
                      {role.title}
                      <span className="text-muted-foreground">
                        {" · "}
                        {role.org}
                      </span>
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {role.location}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground tabular-nums">
                    {role.dates}
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-foreground/80">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4">
                      <span aria-hidden="true" className="text-muted-foreground">
                        —
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border pt-10">
          <p className="col-span-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:col-span-3">
            Education
          </p>
          <div className="col-span-12 sm:col-span-9">
            <h3 className="text-xl font-light tracking-[-0.01em] sm:text-2xl">
              {education.degree}
              <span className="text-muted-foreground"> · {education.school}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
              {education.detail}
            </p>
          </div>
        </div>

        {/* Toolkit */}
        <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border pt-10">
          <p className="col-span-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:col-span-3">
            Toolkit
          </p>
          <dl className="col-span-12 grid grid-cols-1 gap-8 sm:col-span-9 sm:grid-cols-3">
            {toolkit.map((group) => (
              <div key={group.label}>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {group.label}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed">{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
