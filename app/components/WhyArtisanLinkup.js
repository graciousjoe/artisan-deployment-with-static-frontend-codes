export default function WhyArtisanLinkup() {
  return (
    <section className="py-10 px-4 container mx-auto flex flex-col items-center justify-center">

      <h2 className="text-2xl font-bold block py-5">Why Choose Artisan Linkup?</h2>
      <div className="flex md:grid md:grid-cols-3 md:gap-4 overflow-x-scroll sm:w-full gap-4 md:max-w-[800px]">
        <div className="border p-4 rounded-lg shadow-md w-[200px] flex-shrink-0">
          <h4 className="my-4 font-medium">Transparency</h4>
          <p>
            Area sabi solve all your search for a local artisans easily with
            comfort and no stress.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md w-[200px] flex-shrink-0">
          <h4 className="my-4 font-medium">Swift Response</h4>
          <p>
            We have our trusted and well trained staffs to attend and respond to all your question and ensure that all your needs are met.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md w-[200px] flex-shrink-0">
          <h4 className="my-4 font-medium">Verified Artisans</h4>
          <p>
            All artisans are always background checked before they can be recommended and recognized on our platform.
          </p>
        </div>
      </div>
    </section>
  );
}
