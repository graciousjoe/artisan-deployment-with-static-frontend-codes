import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ExploreArtisans from "./components/ExploreArtisans";
import ChoseArtisans from "./components/ChoseArtisans";
import data from "@/app/data/chosertisans.js";  {/*Data for the selected artisns on the hme page*/}
import WhyArtisanLinkup from "./components/WhyArtisanLinkup";
import Review from "./components/WhyArtisanLinkup";

export default function Home() {
  const chooseArtisans = data.map((data) => {
    return <ChoseArtisans key={data.id} artisan={data} />;
  });
  return (
    <main className="flex flex-col ">
      <HeroSection />
      <ExploreArtisans />
      <div className="container bg-background-2 pt-5 pb-16 mx-auto flex flex-col align-center items-center justify-center p-4 gap-6">
        <h2 className="text-xl font-bold flex justify-start">Choose Your Artisan</h2>
        <div className="grid grid-cols-2 gap-4 ">{chooseArtisans}</div>
      </div>
      <WhyArtisanLinkup />
      <Review />
    </main>
  );
}
