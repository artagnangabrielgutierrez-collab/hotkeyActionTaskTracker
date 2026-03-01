"use client";
import { useState, useEffect } from "react";

export default function Features() {
  const features = [
    { name: "Next.js", logo: "▲" },
    { name: "Tailwind CSS", logo: "🎨" },
    { name: "TypeScript", logo: "🟦" },
    { name: "JavaScript", logo: "🟨" },
    { name: "HTML", logo: "🟧" },
    { name: "Vercel", logo: "⚡" },
  ];

  

  const [window, setWindow] = useState({ start: 0, end: 3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setWindow((prev) =>
        prev.end >= features.length
          ? { start: 0, end: 3 }
          : { start: prev.start + 1, end: prev.end + 1 },
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <>
      <hr />
      <section className="pt-4 pb-4 bg-[#0a0a0a]">
        <p className="flex-auto self-center text-balance text-center text-base/6 text-muted-foreground">
          Built with
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-4  items-center ">
          {features.slice(window.start, window.end).map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-2 rounded-full bg-muted/40 px-4 py-2 w-40 justify-start "
            >
              <span>{f.logo}</span>
              <span className="text-sm font-medium">{f.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
