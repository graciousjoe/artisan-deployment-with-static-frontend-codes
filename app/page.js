import HeroSection from "./components/HeroSection";
import ExploreArtisans from "./components/ExploreArtisans";
import ChoseArtisans from "./components/ChoseArtisans";
import data from "@/app/data/chosertisans.js";
import WhyArtisanLinkup from "./components/WhyArtisanLinkup";
import Review from "./components/Review"; // ✅ Correct import
import reviewData, { reviewofWeek } from "@/app/data/review.js";
import HowToUse from "./components/HowToUse";

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
      <div className="container bg-background-2 pt-5 pb-16 mx-auto flex flex-col items-center justify-center p-4 gap-4">
        <h2 className="text-xl font-bold text-start">
          Choose Your Artisan
        </h2>
        <p className="text-sm">
          Verified customers share their experience with Area Sabi artisans
        </p>
        <div className="grid grid-cols-2 gap-4">{chooseArtisans}</div>
      </div>

      <WhyArtisanLinkup />

      <section className=" container mx-auto px-4">
        {/* The main container div now has padding and centers the heading */}
        <div className="px-4 text-center">
          <h2 className="text-2xl font-bold py-5">Voices from the Street</h2>
          <p></p>
        </div>

        {/* The scrollable reviews container remains the same.
      Note that md:max-w-[800px] on the inner div may cause misalignment
      with the main container on some screen sizes.
  */}
        <div className="overflow-x-auto px-4 md:px-0">
          <div className="flex gap-4 w-fit md:grid md:grid-cols-3 md:w-full md:max-w-[800px] md:mx-auto">
            {reviews}
          </div>
        </div>

        {/* The "Review of the Week" container now has consistent padding
      and uses text-center to align its content.
  */}
        <div className="px-4 text-center max-w-[800px] mx-auto bg-background-dark text-white p-6 rounded-lg mt-8">
          <h2 className="text-lg font-medium inline px-2 py-1 bg-background-2 rounded">
            Review of the Week
          </h2>
          <p className="text-base mt-3">{reviewofWeek[0].text}</p>
          <p className="text-sm text-primary mt-3">{reviewofWeek[0].name}</p>
        </div>
      </section>

      <HowToUse />

    </main>
  );
}
