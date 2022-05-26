export default function LearnAndEarn() {
  return (
    <div className=" items-center relative  my-32 flex justify-around  flex-wrap px-5">
      <div className="max-w-2xl relative">
        <h1 className=" text-4xl md:text-4xl font-Montserrat text-left uppercase">
        Learn and Earn ETH with NFT
        </h1>
        <p className=" text-sm md:text-sm text-left font-Montserrat my-9">
          Nft Marketplace brings together artists, creators and crypto
          enthusiasts on a<br></br>
          single platform ro create and explore top NFTs.
        </p>
        <div className="flex justify-between max-w-xs my-5 ">
          <button className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-Poppins font-bold flex items-center">
            Learn More
          </button>
        </div>
      </div>
      <>
        <div className="flex flex-col rounded-xl  p-4 relative">
          <div className="relative">
            <img src="./PageImg/img1.png" alt="nft-gif" className="rounded-xl" />
          </div>
          <div className="flex flex-col  rounded-b-xl py-4 ">
            <div className="flex justify-between"></div>
            <div className="flex  justify-between font-mono"></div>
          </div>
        </div>
      </>
    </div>
  );
}
