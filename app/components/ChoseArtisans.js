import React from "react";

export default function ChoseArtisans(props) {
    const { name, description, image } = props.entry;
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
}
