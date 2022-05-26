/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

export default function Footer() {
  return (
    <div className="pb-1">
      <div className="sticky w-11/12 mx-auto mb-[41px]">
        <footer className="bg-white bg-opacity-80 rounded-xl px-7 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-33 lg:grid-cols-5 border-t gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
            <div className="col-span-full lg:col-span-2">
              <div className="lg:-mt-2 mb-4">
                <a
                  href="/"
                  className="font-krona inline-flex items-center text-black-800 text-xl md:text-2xl font-Krona font-bold gap-2"
                  aria-label="logo"
                >
                  SUMMER.NFT
                </a>
              </div>

              <p className="text-sm sm:pr-8 mb-6 font-Poppins">
                NFT stands for non-fungible token, which basically means that
                it’s a one-of-a-kind digital asset that belongs to you and you
                only. The most popular NFTs right now include artwork and music,
                but can also include videos and even tweets,
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/summerize.io"
                  target="_blank"
                  className="text--400 hover: active:text--600 transition duration-100"
                >
                  <img src="./FooterSocials/Facebook.png" alt="title" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="text--400 hover: active:text--600 transition duration-100"
                >
                  <img src="./FooterSocials/Twitter.png" alt="title" />
                </a>

                <a
                  href="https://www.instagram.com/summerize.app/ "
                  target="_blank"
                  className="text--400 hover: active:text--600 transition duration-100"
                >
                  <img src="./FooterSocials/Instagram.png" alt="title" />
                </a>
              </div>
            </div>

            <div className="font-Poppins font-semibold text-base">
              <div className="text-lg font-bold tracking-widest uppercase mb-4">
                Company
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    About
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Legal & Privacy
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Investors
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Cookie Preferences
                  </a>
                </div>
              </nav>
            </div>

            <div className="font-Poppins font-semibold text-base">
              <div className="text-lg font-bold tracking-widest uppercase mb-4">
                Exchange
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Buy Crypto
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Exchanges
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Watchlist
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Portfolio
                  </a>
                </div>
              </nav>
            </div>

            <div className="font-Poppins font-semibold text-base">
              <div className="text-lg font-bold tracking-widest uppercase mb-4">
                Help & Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Help Center
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Contact Us
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    System Status
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className=" hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Privacy Policy
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
