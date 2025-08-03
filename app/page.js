import HeroSection from "./components/HeroSection";
import ExploreArtisans from "./components/ExploreArtisans";
import ChoseArtisans from "./components/ChoseArtisans";
import data from "@/app/data/chosertisans.js";
import WhyArtisanLinkup from "./components/WhyArtisanLinkup";
import Review from "./components/Review"; // ✅ Correct import
import reviewData from "@/app/data/review.js";

export default function Home() {
  const chooseArtisans = data.map((data) => (
    <ChoseArtisans key={data.id} artisan={data} />
  ));

  const reviews = reviewData.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return (
    <main className="flex flex-col">
      <HeroSection />
      <ExploreArtisans />
      <div className="container bg-background-2 pt-5 pb-16 mx-auto flex flex-col items-center justify-center p-4 gap-6">
        <h2 className="text-xl font-bold w-full text-start">
          Choose Your Artisan
        </h2>
        <div className="grid grid-cols-2 gap-4">{chooseArtisans}</div>
      </div>

      <WhyArtisanLinkup />

      <section className="py-10 container mx-auto">
        <div className="px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold py-5">
            Why Choose Artisan Linkup?
          </h2>
        </div>
        <div className="overflow-x-auto px-4 md:px-0">
          <div className="flex gap-4 w-fit md:grid md:grid-cols-3 md:w-full md:max-w-[800px] md:mx-auto">
            {reviews}
          </div>
        </div>
      </section>
    </main>
  );
}
