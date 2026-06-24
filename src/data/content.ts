/**
 * Site content extracted verbatim from the recovered Lovable export.
 * Keeping it here (separate from markup) makes the components declarative and
 * the content easy to edit without touching layout.
 */

export interface Project {
  index: string;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  href: string;
}

export interface Experience {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface ToolkitGroup {
  label: string;
  items: string;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "OneKit",
    category: "AI-Native SaaS Suite",
    role: "Co-Launch · E-Sign Lead",
    year: "2026",
    description:
      "Co-launched an AI-native SaaS product suite with an integrated knowledge base. Owned end-to-end development of the E-Sign tool — from architecture to release.",
    href: "https://onekit.co",
  },
  {
    index: "02",
    title: "Data-Driven Communities",
    category: "GIS · Urban Planning",
    role: "Cartography · Research",
    year: "2026",
    description:
      "A GIS portfolio analyzing urban planning and equity through ArcGIS Pro and StoryMaps — translating spatial data into civic narrative.",
    href: "https://arcg.is/01vXSa1",
  },
  {
    index: "03",
    title: "Filipino Artist Gallery",
    category: "Static Site · Editorial",
    role: "Design · Build",
    year: "2026",
    description:
      "A static gallery built in vanilla HTML, CSS, and JavaScript — a quiet stage for contemporary Filipino musical artists.",
    href: "https://jswaggy01.github.io/filam-artists/",
  },
  {
    index: "04",
    title: "Community Hot Spots",
    category: "Full-Stack · GIS",
    role: "Engineering",
    year: "2026",
    description:
      "A full-stack GIS application mapping third places across the Inland Empire — built with JavaScript and Supabase.",
    href: "https://jswaggy01.github.io/Community-Hot-Spots/",
  },
];

export const experience: Experience[] = [
  {
    title: "Software Engineer Intern",
    org: "AI Squads",
    location: "Irvine, CA",
    dates: "Feb 2026 — Jun 2026",
    bullets: [
      "Implemented AI PDF detection with Claude Vision to auto-place e-sign fields, reaching 70% placement accuracy.",
      "Engineered an IDP pipeline with multimodal LLM bounding boxes, cutting manual e-sign field placement by 40%.",
      "Automated tracking for 400+ users via Docker, Supabase, PostgreSQL, and TypeScript as a founding SWE intern.",
      "Migrated web E-Sign and content tools to desktop with React/Vite; shipped 5 AI-powered productivity tools.",
    ],
  },
  {
    title: "AI Teaching Assistant",
    org: "Campus.edu",
    location: "Sacramento, CA",
    dates: "Dec 2025 — Mar 2026",
    bullets: [
      "Authored 5-minute tutorials guiding students through migrating Replit projects to GitHub.",
      "Partnered with 7 adjunct faculty to align student learning objectives and weekly office hours.",
    ],
  },
  {
    title: "Section Leader",
    org: "Stanford University · Code in Place",
    location: "Stanford, CA",
    dates: "Apr 2025 — Jun 2025",
    bullets: [
      "Led 10+ students through 8 weeks of Stanford's Intro to Python course.",
      "Collaborated with 1,400+ volunteer instructors supporting 20,000+ learners worldwide.",
    ],
  },
];

export const education = {
  degree: "B.S. Computational Mathematics",
  school: "University of California, Riverside",
  detail:
    "Coursework across GIS, full-stack web development, AI, data structures, relational databases, linear algebra, numerical analysis, and game theory.",
};

export const toolkit: ToolkitGroup[] = [
  {
    label: "Languages",
    items: "Python · C# · C++ · JavaScript · TypeScript · SQL",
  },
  {
    label: "Tools",
    items: "Docker · Supabase · PostgreSQL · Git · Azure · Figma",
  },
  {
    label: "AI",
    items: "Claude Code · OpenAI · Antigravity · Replit · v0 · Bolt",
  },
];

// Prefix public assets with the Vite base ("/portfolio/") so they resolve
// correctly on GitHub Pages — a leading-slash literal would hit the domain root.
export const resumePdf = `${import.meta.env.BASE_URL}jdeleon-2026-resume.pdf`;

export const about =
  "Product and engineering across AI-native software, geographic information systems, and civic technology.";

export const contact = {
  email: "jasondeleon2432@gmail.com",
  phoneDisplay: "909.904.1794",
  phoneHref: "tel:+19099041794",
  location: "Highland, CA",
};

export const socials: LinkItem[] = [
  {
    label: "LinkedIn ↗",
    href: "https://linkedin.com/in/jasondeleon2432",
    external: true,
  },
  { label: "GitHub ↗", href: "https://github.com/jSwAggy01", external: true },
  { label: "OneKit ↗", href: "https://onekit.co", external: true },
];

export const navLinks: LinkItem[] = [
  { label: "Work", href: "#work" },
  { label: "Résumé", href: "#resume" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
