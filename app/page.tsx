import Container from "@/app/components/container";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen py-24">
      <Container className="space-y-32">
        <Hero />
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
    <section className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Full-stack engineer with a frontend focus, building production-grade
        systems with Next.js & TypeScript.
      </h1>

      <p className="text-lg text-zinc-400 max-w-2xl">
        I specialize in performant UI systems, SSR/CSR hybrid rendering, and
        clean API integration — with hands-on backend experience in Node.js and
        MongoDB.
      </p>

      <div className="flex gap-6 pt-4">
        <a
          href="#work"
          className="text-sm text-indigo-400 hover:text-indigo-300 transition"
        >
          View Work →
        </a>

        <a
          href="mailto:your@email.com"
          className="text-sm text-zinc-400 hover:text-white transition"
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
        <Link
          href="/projects/hacker-news"
          className="block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition"
        >
          <h3 className="text-lg font-medium">Hacker News Portal</h3>
          <p className="text-zinc-400 mt-2">
            Production-grade Hacker News interface built with Next.js App
            Router, leveraging SSR for homepage performance and client-side
            search for interactive filtering.
          </p>
        </Link>

        <Link
          href="/projects/ai-resume-studio"
          className="block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition"
        >
          <h3 className="text-lg font-medium">AI Resume Studio</h3>
          <p className="text-zinc-400 mt-2">
            Full-stack resume builder with JWT authentication, AI-assisted
            content enhancement, and robust API integration using Node.js and
            MongoDB.
          </p>
        </Link>
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

      <p className="text-zinc-400">
        Open to remote startups and full-stack roles.
      </p>
    </section>
  );
}
