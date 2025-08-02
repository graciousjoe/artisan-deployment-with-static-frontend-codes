import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ExploreArtisans from "./components/ExploreArtisans";
import ChoseArtisans from "./components/ChoseArtisans";
import data from "@/app/data/chosertisans.js";

export default function Home() {
  const chooseArtisans = data.map((artisan) => {
    return <ChoseArtisans key={artisan.id} artisan={artisan} />;
  });
  return (
    <main className="flex flex-col ">
      <HeroSection />
      <ExploreArtisans />
      <div>{chooseArtisans}</div>
    </main>
  );
}
