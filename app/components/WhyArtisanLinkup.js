export default function WhyArtisanLinkup() {
  return (
    <section className="py-10 container mx-auto">
      <div className="px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold py-5">Why Choose Artisan Linkup?</h2>
      </div>

      {/* This is the dedicated scroll container.
    - overflow-x-scroll handles the horizontal scrolling.
    - px-4 adds padding to the left and right, ensuring the cards don't touch the edge.
    - md:px-0 removes this padding on medium screens and up, as the grid layout won't need it.
  */}
      <div className="overflow-x-scroll px-4 md:px-0">
        {/* This is the content container.
      - flex gap-4 arranges the cards horizontally with spacing.
      - w-fit ensures the flex container's width is only as wide as its content,
        which allows it to overflow the parent div.
      - md:grid md:grid-cols-3 md:w-full switches to a full-width grid on larger screens.
    */}
        <div className="flex gap-4 w-fit md:grid md:grid-cols-3 md:w-full md:max-w-[800px] md:mx-auto">
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
              We have our trusted and well trained staffs to attend and respond
              to all your question and ensure that all your needs are met.
            </p>
          </div>

          <div className="border p-4 rounded-lg shadow-md w-[200px] flex-shrink-0">
            <h4 className="my-4 font-medium">Verified Artisans</h4>
            <p>
              All artisans are always background checked before they can be
              recommended and recognized on our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
