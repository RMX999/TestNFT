/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import NavComponent from "../components/Navigation/NavComponent";
import Footer from "../components/Footer/Footer"
import Mint from "../components/Mint/mint"
import { useState } from "react";


//web3auth
import { CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { Web3AuthProvider } from "../services/web3auth";

export default function Home() {
   //web3auth chainID setup
   const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
   const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");
 
  return (
    <div className=" text-black font-poppins bg-gradient-to-br from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
    <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
      <NavComponent />
      <Mint />
      <Footer />
      </Web3AuthProvider>
    </div>
  );
}
