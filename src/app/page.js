// app/page.js

import HeroBackground from "@/Components/Home/HeroBG";
import HomeContainer from "@/Components/Home/HomeContainer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background layer */}
      <HeroBackground />

      {/* Home content */}
      <HomeContainer />
    </main>
  );
}
