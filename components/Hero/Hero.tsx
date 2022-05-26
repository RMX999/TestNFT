/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="z-0 items-center relative mb-60 flex justify-around  flex-wrap px-5">
      <div className="max-w-2xl relative">
        <h1 className=" text-4xl md:text-4xl font-Poppins font-bold text-left">
          Marketplace to Create, Buy<br></br>& Sell NFTs{" "}
        </h1>
        <p className=" text-sm md:text-sm text-left font-Poppins my-9">
          Nft Marketplace brings together artists, creators and crypto
          enthusiasts on a<br></br>
          single platform ro create and explore top NFTs.
        </p>
        <div className="flex justify-between max-w-xs my-5 ">
          <button className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-Poppins font-bold flex items-center">
            Mint NFT
          </button>
          <button className="text-[#F45C43] px-8 py-2 text-2xl font-Poppins font-bold flex items-center">
            Explore
          </button>
        </div>
      </div>
      
        <div className="z-0 flex flex-col  bg-white rounded-xl p-4 ">
          <div>
            <img src="./img/nft4.png" alt="nft-gif" className="z-0  rounded-xl" />
          </div>
          <div className="flex flex-col  rounded-b-xl py-4">
          </div>
        </div>
      
    </div>
  );
}
