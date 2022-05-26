import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Mint: NextPage = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Function to connect to the user's Metamask wallet
  const connectWithMetamask = useMetamask();

  // Get the NFT Collection contract
  const nftDropContract = useNFTDrop(
    "0xAd2Ed67E7CDbBe1F44110920AdA61C676285C290"
  );

  async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/mint`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div>
      
      {!address ? (
        <button
          
          onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
        <>
       
          <button
            onClick={() => claimNft()}
          >
           Mint
          </button>
        </>
      )}
    </div>
  );
};

export default Mint;
