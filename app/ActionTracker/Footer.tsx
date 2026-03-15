"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <p className="text-white font-semibold tracking-tight">HotKey Tracker</p>

        <div className="flex gap-6 text-sm text-white/50">
          <Link href="#" className="hover:text-white/80 transition-colors">Home</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Docs</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Contact</Link>
        </div>

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} HotKey Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}