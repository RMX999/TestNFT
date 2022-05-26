import Link from 'next/link'

interface Props {
  image: string;
}

export const TopCard = ({ image }: Props) => {
  return (
    <div className="relative w-[394px] h-[474px] mt-12 mb-12 mx-4">
      {/* text */}
      <div className="absolute bottom-0 bg-white shadow-2xl bg-opacity-70 w-[394px] h-[270px] rounded-lg">
        <div className="absolute left-[26px] top-[20px]">
          <img
            src="../NftCard/Like.png"
            alt="title"
            className="pt-4 mx-auto rounded-t-xl sm:rounded-none rounded-lg"
          />
          <h1 className="text-black font-Poppins pl-1">234</h1>
        </div>

        <div className="absolute top-[140px] left-[26px] text-black font-Poppins">
          <h1 className="font-semibold text-lg">Courtney Henry</h1>
          <p className="text-[#52575C]">by <p className="inline text-[#F45C43]">Randy John</p></p>
        </div>

        <div className="absolute top-[145px] right-[27px]">
        <Link href="/mint">
          <button className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-Poppins font-bold flex items-center">
            Mint
          </button>
         </Link>
        </div>

        <div className="absolute left-[25px] bottom-[20px]">
        <img
            src="../NftCard/cryp.png"
            alt="title"
            className="pt-4 mx-auto rounded-t-xl sm:rounded-none rounded-lg"
          />
        </div>

        <div className="absolute left-[78px] bottom-[20px] font-Poppins">
          <h2 className="text-[#52575C] text-sm">Price</h2>
          <h1 className="text-black">10.50 USDC = 10.50USD</h1>
        </div>
      </div>

      {/* Image */}
      <div className="absolute bg-white  shadow-xl w-[272px] h-[326px] rounded-lg right-[16px] top-0">
        <img
          src={image}
          alt="title"
          className="pt-4 mx-auto rounded-t-xl sm:rounded-none rounded-lg"
        />
      </div>
    </div>
  );
};