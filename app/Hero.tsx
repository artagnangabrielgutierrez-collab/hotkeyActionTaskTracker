"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[#0a0a0a] relative overflow-hidden pb-8 h-[95vh] min-h-150">
        <div className="pointer-events-none absolute left-0 top-0 w-[80%] h-[65%] bg-[radial-gradient(ellipse_at_top_left,_rgba(168,85,247,0.2)_0%,_rgba(59,130,246,0.15)_30%,_rgba(236,72,153,0.08)_60%,_transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />

        <motion.div
          {...fadeUp(0)}
          className="relative mb-6 flex items-center gap-1.5 rounded-full border border-blue-500/50 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21" />
          </svg>
          Log Your Tasks Completions With Your Keyboard Key
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-white bg-clip-text text-transparent relative text-center text-balance font-bold tracking-tight pt-12 text-4xl w-full p-1 pb-2"
        >
          Track and log everything
        </motion.h1>

        <motion.h2
          {...fadeUp(0.2)}
          className="relative text-lg max-w-[75%] text-center pb-6 text-white/80 leading-relaxed tracking-wide text-pretty"
        >
          Use your{" "}
          <span className="text-blue-400/80 font-semibold">Keyboard keys</span>{" "}
          to quickly log{" "}
          <span className="text-blue-400/80 font-semibold">task</span>{" "}
          completions and{" "}
          <span className="text-blue-400/80 font-semibold">track</span> them
          with the built-in tools.
        </motion.h2>

        <motion.p
          {...fadeUp(0.6)}
          className="relative text-white text-xl font-medium"
        >
          Never miss a task again
        </motion.p>

        <motion.div {...fadeUp(0.6)}>
          <Link
            href="./hotKeyActionTracker"
            className="px-3 mt-4 group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] ring-1 bg-gradient-to-r from-blue-700 to-cyan-700 text-white ring-blue-400"
          >
            Start Using Now
          </Link>
        </motion.div>
      </section>
    </>
  );
}
