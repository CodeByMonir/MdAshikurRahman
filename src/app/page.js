// app/page.js

import Hero from "@/Components/Home/Hero";
import HeroBackground from "@/Components/Home/HeroBG";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background layer */}
      <HeroBackground />

      {/* Hero content */}
      <Hero />
    </main>
  );
}
