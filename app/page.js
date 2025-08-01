import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ExploreArtisans from "./components/ExploreArtisans";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <HeroSection />
      <ExploreArtisans />
    </main>
  );
}
