"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { useIsOpen, useDashboardInfo } from "@/store/useGlobalStore";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const links = [
  { label: "Home", href: "/" },
  { label: "Hotkey-Action-Tracker", href: "/hotKeyActionTracker" },
];

function Navbar() {
  const isMenuOpen = useIsOpen((state) => state.isMenuOpen);
  const setMenuOpen = useIsOpen((state) => state.setMenuOpen);

  return (
    <>
      <nav className="flex items-center justify-between  px-2 py-3 border-b border-neutral-800 bg-black text-white text-sm ">
        <div className="flex items-center font-semibold text-base">
          <Link href="./">HotKey Action Tracker</Link>
        </div>

        <div className="hidden md:flex items-center gap-2 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xl">
          <a
            className="text-neutral-400 hover:text-white transition-colors p-1.5 text-center text-sm"
            href="https://github.com/artagnangabrielgutierrez-collab/Hotkey-Action-Task-Tracker"
            target="_blank"
          >
            Github
          </a>

          <button
            className="text-neutral-400 hover:text-white transition-colors p-1.5 md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <section className="flex flex-row items-center justify-center gap-10 md:hidden">
          {links.map((e, i) => (
            <Link key={i} href={e.href} className=" py-1 pl-5 ">
              {e.label}
            </Link>
          ))}
        </section>
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    useDashboardInfo.persist.rehydrate();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
