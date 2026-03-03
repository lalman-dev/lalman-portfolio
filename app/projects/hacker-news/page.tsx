import Container from "@/app/components/container";
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

        <section className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Hacker News Portal
          </h1>

          <p className="text-zinc-400 max-w-3xl">
            A production-grade Hacker News interface built using Next.js App
            Router, designed to explore SSR, hybrid rendering, and structured
            data fetching.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-zinc-400">
            Most Hacker News clones rely entirely on client-side rendering,
            which impacts performance and SEO. I wanted to build a version that
            prioritized rendering strategy and architecture decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Architecture Decisions</h2>
          <ul className="space-y-3 text-zinc-400">
            <li>• SSR for homepage to optimize first contentful paint.</li>
            <li>• Client-side search for responsive filtering.</li>
            <li>• Centralized API abstraction layer.</li>
            <li>• Loading & error boundaries using App Router conventions.</li>
            <li>• Server and client component separation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tradeoffs</h2>
          <p className="text-zinc-400">
            Fully static generation could improve caching, but real-time updates
            were prioritized for user experience. In future iterations,
            implementing incremental static regeneration would further optimize
            performance.
          </p>
        </section>
      </Container>
    </main>
  );
}
