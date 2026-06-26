import { about, contact, socials } from "../data/content";

const indexLinks = [
  { label: "Top", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-8 text-[clamp(2rem,6vw,5rem)] font-light leading-[1] tracking-[-0.03em]">
          Open to collaborations,
          <br />
          conversations, and
          <br />
          <span className="italic font-extralight">quiet introductions.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-4">
          <div id="about">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{about}</p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Direct
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-opacity hover:opacity-60"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="transition-opacity hover:opacity-60"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="text-muted-foreground">{contact.location}</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Index
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {indexLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:opacity-60">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex items-end justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 — All rights reserved</span>
          <a
            href="https://youtu.be/oH0MwGla_LQ?si=wdyT5LZ_emgPqeXu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60"
          >
            It's just math
          </a>
        </div>
      </div>
    </footer>
  );
}
