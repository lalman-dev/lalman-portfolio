import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-sm font-medium tracking-wide">
          Lalman
        </Link>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <a
            href="mailto:lalman.dev7@gmail.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
