import Image from "next/image";

export default function Review({ review }) {
  const { name, occupation, image, rating, text } = review;

  return (
    <div className="border px-4 py-6 rounded-lg shadow-md w-[250px] h-[300px] flex-shrink-0">
      <div className="flex items-center gap-4">
        <Image
          src={image.src}
          alt={image.alt}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{occupation}</p>
        </div>
      </div>
      <Image
        src={rating.src}
        alt={rating.alt}
        width={100}
        height={20}
        className="mt-4"
      />
      <p className="mt-2">{text}</p>
    </div>
  );
}
