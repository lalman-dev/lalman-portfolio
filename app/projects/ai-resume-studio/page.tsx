import Container from "@/app/components/container";
import Link from "next/link";

export const metadata = {
  title: "AI Resume Studio | Lalman",
  description:
    "Full-stack resume builder with JWT authentication and AI-enhanced content.",
};

export default function AIResumeStudioPage() {
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
            AI Resume Studio
          </h1>

          <p className="text-zinc-400 max-w-3xl">
            A full-stack resume builder built with React, Node.js, Express, and
            MongoDB, featuring JWT authentication and AI-assisted resume
            enhancement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Core Features</h2>
          <ul className="space-y-3 text-zinc-400">
            <li>• Secure JWT-based authentication.</li>
            <li>• Resume persistence with MongoDB.</li>
            <li>• AI-powered content enhancement integration.</li>
            <li>• File upload handling with Multer.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Engineering Challenges</h2>
          <ul className="space-y-3 text-zinc-400">
            <li>• Authorization header mismatches.</li>
            <li>• API route structuring inconsistencies.</li>
            <li>• Resume rename persistence bug.</li>
            <li>• Multipart/form-data conflicts during image upload.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Lessons Learned</h2>
          <p className="text-zinc-400">
            This project strengthened my understanding of full-stack debugging,
            authentication flows, and frontend–backend integration in real-world
            conditions.
          </p>
        </section>
      </Container>
    </main>
  );
}
