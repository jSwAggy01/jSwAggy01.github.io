import { navLinks } from "../data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <a
          href="#top"
          className="text-[11px] font-medium uppercase tracking-[0.2em]"
        >
          Jason De Leon
        </a>
        <nav className="hidden gap-10 text-[11px] font-medium uppercase tracking-[0.2em] sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-[11px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
