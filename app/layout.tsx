//@ts-ignore
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Lalman | Full-Stack Engineer",
  description:
    "Full-stack engineer with frontend focus building production-grade systems with Next.js and TypeScript.",
  openGraph: {
    title: "Lalman | Full-Stack Engineer",
    description: "Full-stack engineer building production-grade web systems.",
    url: "https://lalman.dev",
    siteName: "Lalman Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0b0b0c]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
