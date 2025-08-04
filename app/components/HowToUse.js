export default function HowToUse() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="p-6 border rounded-2xl flex flex-col gap-6">
        <h2>How to Use Artisan Linkup</h2>
        <p>Follow these simple steps to get started:</p>
        <ol className="flex flex-col gap-4">
          <li>
            {" "}
            <span className="text-sm px-4 py-3 bg-cream rounded-full">1</span> Choose
            an artisan by price, skills, or reviews
          </li>
          <li>
            {" "}
            <span className="text-sm px-4 py-3 bg-background-2 rounded-full">
              2
            </span>{" "}
            Schedule an artisan as early as today
          </li>
          <li>
            {" "}
            <span className="text-sm px-4 py-3 bg-green-200 rounded-full">
              3
            </span>{" "}
            Chat, pay, tip and review all in one place
          </li>
        </ol>
      </div>
    </div>
  );
}
