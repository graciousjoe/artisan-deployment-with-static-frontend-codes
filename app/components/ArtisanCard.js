import Image from "next/image";

export default function ArtisanCard({ artisan }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative w-full h-48">
        <Image
          src={artisan.image}
          alt={artisan.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h4 className="font-bold text-lg">{artisan.name}</h4>
        <p className="text-gray-600">{artisan.specialty}</p>
        <p className="text-sm text-gray-500 mt-1">{artisan.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-orange-300 font-semibold">{artisan.price}</span>
          <span className="text-sm text-gray-500">⭐ {artisan.rating}</span>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            {artisan.category}
          </span>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            {artisan.duration}
          </span>
        </div>
        <button className="mt-4 w-full bg-orange-300 text-white py-2 rounded-lg hover:bg-orange-400 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}
