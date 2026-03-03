//@ts-ignore
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lalman | Full-Stack Engineer",
  description:
    "Full-stack engineer with a frontend focus, building production-grade systems using Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0b0b0c]`}>
        {children}
      </body>
    </html>
  );
}
