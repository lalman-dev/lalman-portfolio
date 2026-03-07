import Container from "@/app/components/container";
import { projects } from "@/app/lib/projects";

import Link from "next/link";
import FadeIn from "./components/fade-in";

export default function HomePage() {
  return (
    <main className="min-h-screen py-24">
      <Container className="space-y-32">
        <FadeIn>
          <Hero />
        </FadeIn>
        <SelectedWork />
        <EngineeringPrinciples />
        <About />
        <Contact />
      </Container>
    </main>
  );
}

function Hero() {
  return (
    <section className="space-y-8">
      <p className="text-sm text-zinc-500 tracking-wide uppercase">Lalman</p>

      <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
        Full-stack engineer with a frontend focus, building production-grade
        systems.
      </h1>

      <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
        I build performant UI systems using Next.js and TypeScript, with
        hands-on backend experience in Node.js and MongoDB. Focused on
        architecture, rendering strategy, and clean API integration.
      </p>

      <div className="flex gap-8 pt-4 text-sm">
        <a
          href="#work"
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          View Work →
        </a>

        <a
          href="mailto:your@email.com"
          className="text-zinc-400 hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="space-y-8">
      <h2 className="text-2xl font-semibold">Selected Work</h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition"
          >
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              {project.stack.join(" · ")}
            </p>

            <p className="text-zinc-400 mt-3">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function EngineeringPrinciples() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Engineering Principles</h2>

      <ul className="space-y-3 text-zinc-400">
        <li>
          • Server Components by default; client components only when necessary.
        </li>
        <li>• Rendering strategy defined before component structure.</li>
        <li>• Performance budgets considered early.</li>
        <li>• Centralized API abstraction for maintainability.</li>
        <li>• Accessibility integrated from the start.</li>
      </ul>
    </section>
  );
}

function About() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">About</h2>

      <p className="text-zinc-400 max-w-2xl">
        I am an early-career engineer focused on building scalable,
        production-ready frontend systems. I enjoy working in startup
        environments where I can take ownership of features end-to-end, from UI
        implementation to API integration.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="flex gap-6 text-sm text-zinc-400">
        <a
          href="https://github.com/lalman-dev"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/lalman-dev"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:lalman.dev7@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
      </div>
      <p className="text-zinc-400">
        Open to remote startups and full-stack roles.
      </p>
    </section>
  );
}
