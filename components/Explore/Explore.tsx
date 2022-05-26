import React from "react";
import { Card } from "../Cards/Card";

const data = [
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
];

export default function Explore() {
  return (
    <div className="mt-44 px-10">
       <h1 className="text-4xl md:text-4xl font-Poppins font-bold text-left mb-20 ml-20">
        Explore
        </h1>
      <div className="flex flex-wrap gap-6 container mx-auto justify-center items-center">
        {data.map((n, index) => {
          return <Card image={n.image} key={index} />
        })}
      </div>
    </div>
  );
}
