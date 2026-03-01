"use client";
//@ts-nocheck

import { useIsOpen } from "@/store/useGlobalStore";
import { links } from "@/app/layout";
import Link from "next/link";
import React from "react";
export default function Hero() {
  const isMenuOpen = useIsOpen((state) => state.isMenuOpen);

  return (
    <>
      {/* Hamburger Menu items */}
      {isMenuOpen && (
        <section className="flex flex-row items-center justify-center gap-10 md:hidden">
          {links.map((e, i) => (
            <Link key={i} href={e.href} className=" py-1 pl-5 ">
              {e.label}
            </Link>
          ))}
        </section>
      )}
      <section className="flex flex-col justify-end items-center bg-[#0a0a0a] relative overflow-hidden pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <h1 className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative text-center text-balance font-bold tracking-tight pt-12 text-4xl w-full p-1 pb-2">
          Track and log everything
        </h1>

        <h2 className="relative text-lg max-w-[75%] text-center pb-6 text-white/40 leading-relaxed tracking-wide text-pretty">
          Use your{" "}
          <span className="text-blue-400/80 font-semibold">Keyboard keys</span>{" "}
          to quickly log{" "}
          <span className="text-blue-400/80 font-semibold">task</span>{" "}
          completions and{" "}
          <span className="text-blue-400/80 font-semibold">track</span> them
          with the built-in tools.
        </h2>
        <p className="relative text-white/60 text-xl font-medium">
          Never miss a task again
        </p>
        <Link
          href="./hotKeyActionTracker"
          className="px-9 mt-4 group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-gradient-to-r from-blue-700 to-cyan-700 text-white ring-blue-400"
        >
          Start Using Now
        </Link>
      </section>
    </>
  );
}
