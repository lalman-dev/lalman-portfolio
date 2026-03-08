import Container from "@/app/components/container";
import ProjectHero from "@/app/components/project-hero";
import Architecture from "@/app/components/architecture";
import Link from "next/link";

export const metadata = {
  title: "Hacker News Portal | Lalman",
  description:
    "Architecture-focused Hacker News interface built using Next.js App Router with SSR and hybrid rendering.",
};

export default function HackerNewsPage() {
  return (
    <main className="min-h-screen py-24">
      <Container className="space-y-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-white transition"
        >
          ← Back
        </Link>

        <ProjectHero
          title="Hacker News Portal"
          description="Architecture-focused Hacker News interface exploring SSR and hybrid rendering with Next.js App Router."
          image="/projects/hacker-news.png"
        />
        <div className="flex gap-6 pt-2">
          <a
            href="https://hn-news-two.vercel.app/"
            target="_blank"
            className="px-4 py-2 border border-zinc-700 rounded-lg text-sm hover:border-zinc-500 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/lalman-dev/hn-news"
            target="_blank"
            className="px-4 py-2 border border-zinc-700 rounded-lg text-sm hover:border-zinc-500 transition"
          >
            GitHub
          </a>
        </div>
        <Architecture
          items={[
            "Server-side rendering for homepage performance",
            "Client-side search for instant filtering",
            "App Router loading and error boundaries",
            "Centralized API abstraction layer",
            "Server and client component separation",
          ]}
        />
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Engineering Decisions</h2>

          <p className="text-zinc-400">
            Instead of relying entirely on client-side rendering, the homepage
            is rendered on the server to improve first contentful paint and SEO
            performance.
          </p>
        </section>
      </Container>
    </main>
  );
}
