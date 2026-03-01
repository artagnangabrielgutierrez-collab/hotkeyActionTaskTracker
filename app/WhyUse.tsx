import React from "react";

export default function WhyUse() {
  return (
    <section className="bg-[#0a0a0a] py-3 px-3  w-full mx-auto text-center flex flex-col">
      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        Features
      </span>
      <h2 className="mt-4 text-4xl font-bold text-white">HotKey Function</h2>
      <p className="mt-4 text-zinc-400 text-lg leading-relaxed  ">
        No additional actions needed — just press your keyboard keys to log
        completions of your chosen task.
      </p>
      <h3 className="text-[0.65rem] text-zinc-500">
        *Useful if you want to track your daily tasks efficintly while staying
        on your computer*
      </h3>
      <div className="mt-10 self-center inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4">
        <kbd className="px-3 py-1.5 text-sm font-mono font-semibold text-white bg-zinc-800 border border-zinc-700 rounded-md">
          Ctrl
        </kbd>
        <span className="text-zinc-600">+</span>
        <kbd className="px-3 py-1.5 text-sm font-mono font-semibold text-white bg-zinc-800 border border-zinc-700 rounded-md">
          L
        </kbd>
      </div>
      <span className="text-zinc-600 text-3xl py-3">=</span>
      <div className="self-center flex items-center gap-2">
        <div className="w-48 h-6 border-2 border-zinc-500 rounded-sm p-0.5 relative ml-9">
          <div className="h-full w-[10%] bg-green-500 rounded-sm"></div>
          <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-semibold">
            Progress Bar
          </span>
        </div>
        <span className="text-green-500 text-sm font-semibold ">+10%</span>
      </div>
    </section>
  );
}
