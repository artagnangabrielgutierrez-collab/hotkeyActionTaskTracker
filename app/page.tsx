import Features from "./Features";
import Hero from "./Hero";
import WhyUse from "./WhyUse";

export default function Home() {
  return (
    <div className="flex flex-col justify-start font-sans bg-gray-100 min-h-screen">
      <Hero />
      <Features/>
      <WhyUse/>
    </div>
  );
}
