/* eslint-disable @next/next/link-passhref */
//react-nextjs
import * as React from "react";
import { useState } from "react";

//componets 
import HeroSection from "../components/Hero/Hero";
import NavComponent from "../components/Navigation/NavComponent";
import Explore from "../components/Explore/Explore";
import TopLiveMints from "../components/TopLiveMints/TopLiveMints"
import Footer from "../components/Footer/Footer"
import LearnAndEarn from "../components/LearnAndEarn/LearnAndEarn"

//web3auth imports
import { CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { Web3AuthProvider } from "../services/web3auth";

export default function Home() {
  //web3auth chainID setup
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

  return (
    <div className="text-black bg-gradient-to-tr from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
    <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
      <NavComponent />
      </Web3AuthProvider>
      <HeroSection />
      <TopLiveMints />
      <Explore />
      <LearnAndEarn />
      <Footer />
    </div>
  );
}
