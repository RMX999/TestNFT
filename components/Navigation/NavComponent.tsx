/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Auth from "../Auth/Connect";
import Transak from "../Transak/Transak";
import NavDropDown from "./NavDropDown";
import { useWeb3Auth } from "../../services/web3auth";


export default function NavComponent() {
  const {provider} = useWeb3Auth();

  return (
      <div className="z-40 sticky w-11/12 mx-auto py-8">
        <div className="bg-white rounded-xl relative flex items-center justify-between h-16">
          <div className="flex justify-start">
            <div className="pl-6 text-black text-2xl font-Krona font-semibold">
              SUMMER.NFT
            </div>
          </div>
          <div className="text-black font-Poppins font-semibold flex justify-end space-x-4 pr-6">
            <a href="/" className="text-[#F5634A] px-3 py-2 font-medium">
              Home
            </a>

            <a href="/" className="text-black-300 px-3 py-2 font-medium">
              Top NFTs
            </a>

            <a href="/" className="text-black-300 px-3 py-2 font-medium">
              Blog
            </a>
            {provider ? <NavDropDown /> : <Auth />}
          </div>
        </div>
      </div>
  );
}
