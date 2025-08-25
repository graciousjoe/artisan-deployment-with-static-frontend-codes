import Image from "next/image";
export default function HowToUse() {
  return (
    <div className="container mx-auto px-4 py-10 flex justify-center items-center gap-10 flex-col md:flex-row md:h-[400px]">
      <div className="p-6 border rounded-2xl flex flex-col gap-6 h-[300px] justify-between">
        <h2 className="text-xl font-bold">How to Use Artisan Linkup</h2>

          <li className="list-none flex items-center gap-2">
            {" "}
            <span className="text-sm px-4 py-3 bg-cream rounded-full">
              1
            </span>{" "}
            Choose an artisan by price, skills, or reviews
          </li>
          <li className="list-none flex items-center gap-2">
            {" "}
            <span className="text-sm px-4 py-3 bg-background-2 rounded-full">
              2
            </span>{" "}
            Schedule an artisan as early as today
          </li>
          <li className="list-none flex items-center gap-2">
            {" "}
            <span className="text-sm px-4 py-3 bg-green-200 rounded-full">
              3
            </span>{" "}
            Chat, pay, tip and review all in one place
          </li>
        
      </div>
      <div>
        <Image src="/Barbing.png" alt="Barbing" width={400} height={300} />
      </div>
    </div>
  );
}
