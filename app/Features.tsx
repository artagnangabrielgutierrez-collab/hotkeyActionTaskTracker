"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: "Custom Hotkey Bindings",
    desc: "Assign any keyboard key to any task. Use those keys to quickly log task completions. Log your day-to-day tasks fast and effortlessly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z" />
      </svg>
    ),
    title: "Dashboard-like Interface",
    desc: "Track your task progress with the built-in tools. View total task completions, dates of completion, and much more.",
  },
];

export default function Features() {
  return (
    <section className="flex flex-col items-center bg-[#0a0a0a] relative overflow-hidden px-6 py-24">
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl font-bold text-center text-balance max-w-lg"
      >
        <span className="text-white">Turn scattered tasks into </span>
        <span className="text-blue-400">clear progress</span>
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="mt-4 text-white/60 text-center text-base max-w-md leading-relaxed text-pretty"
      >
        Stop losing track of what you've done. One keypress logs your work
        instantly — organized, searchable, and always visible.
      </motion.p>

      <div className="mt-12 flex flex-col gap-4 w-full max-w-lg">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            {...fadeUp(0.15 * (i + 1))}
            className="flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 p-3">
              {f.icon}
            </div>
            <h3 className="text-white font-semibold text-base">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
