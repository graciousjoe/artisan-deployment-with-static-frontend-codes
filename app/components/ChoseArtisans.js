import React from "react";
import Image from "next/image";
export default function ChoseArtisans(props) {
  const { name, description, image } = props.artisan;
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md ">
      <Image
        width={400}
        height={300}
        className="rounded-lg w-full h-[220px] md:h-[200px] lg:h-[350px] object-cover"
        src={image.src}
        alt={image.alt}
      />
      <h4 className="text-lg font-medium mt-2">{name}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
