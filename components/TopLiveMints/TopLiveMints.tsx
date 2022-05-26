import React from "react";
import { TopCard } from "../Cards/TopCard";

const data = [
  {
    image: "./img/nft1.png",
  },
  {
    image: "./img/nft2.png",
  },
  {
    image: "./img/nft3.png",
  },
];

export default function TopLiveMints() {
  return (
    <div className="flex flex-col px-10 ">
      <h1 className=" text-4xl md:text-4xl font-Poppins font-bold text-left ml-20">
        Top Live Mints
      </h1>
      <div className="flex flex-wrap justify-center  items-center ">
        {data.map((n, index) => {
          return <TopCard image={n.image} key={index} />;
        })}
      </div>
    </div>
  );
}
