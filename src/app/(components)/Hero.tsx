import React from "react";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function Hero() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative flex items-center justify-center ">
          <Image
            width={600}
            height={600}
            src="/BIGAIR.svg"
            alt="Hero Image"
            className="absolute w-full h-[80%] lg:h-[50%] z-0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
          <Image
            width={600}
            height={600}
            src="/images/Green_Airoo_Hero-9.png"
            alt="Hero Image"
            className="relative mx-auto z-10 drop-shadow-2xl h-[60%] lg:h-[60%]"
          />
        </div>
      </div>
      <div className="relative mt-4 ">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col gap-4 w-60">
          <div className="flex justify-between w-full items-center">
            <FaLessThan />
            <div className="flex gap-1">
              <p className="text-lg">01 /</p>
              <p className="text-sm self-center">05</p>
            </div>
            <FaGreaterThan />
          </div>
          <div>
            {/* <div
              className="relative w-40 h-60 bg-gradient-to-b from-blue-200 to-blue-100 rounded-full p-1 gradient-border"
              style={{
                backgroundClip: "padding-box",
                border: "2px solid transparent",
                backgroundOrigin: "border-box",
              }}
            >
              <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-b from-white to-blue-200 rounded-full"></div>
              </div>
            </div> */}
            {/* <button
              className="relative w-fit border-2 rounded-full p-1"
              style={{
                background: "linear-gradient(to bottom, #ffffff, transparent)",
              }}
            >
              <div
                className="absolute inset-0 bg-white rounded-full p-1"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, transparent)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              ></div>
              <div className="relative z-10 m-4 w-6 h-6 rounded-full bg-gradient-to-b opacity-75"></div>
            </button> */}
            {/* <button
              className="w-fit border-spacing-4 border-solid border-white rounded-full border-2"
              style={{
                background: "linear-gradient(to bottom, #ffffff, transparent)",
              }}
            >
              <div
                className="m-4 w-6 h-6 rounded-full bg-gradient-to-b opacity-75"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, transparent)",
                }}
              ></div>
            </button> */}
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between w-full mt-16 lg:mt-0">
          <div className="flex flex-col ml-6 text-left gap-6">
            <div>
              <h1 className="font-bold text-3xl">Walk Like a Boss</h1>
              <p className="font-bold text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <button className="text-sm px-4 py-1 w-fit border-spacing-4 border-solid border-white rounded-lg border-2">
              Explore
            </button>
          </div>
          <div className="flex flex-col gap-2 p-6 pl-20 backdrop-blur-sm bg-white/30 rounded-l-2xl">
            <div className="absolute -left-10 -top-1">
              <div className="relative">
                <Image
                  width={60}
                  height={60}
                  src="/images/Star_50_off.png"
                  alt="Hero Image"
                  className="absolute -top-7 -right-1 w-12 h-12 drop-shadow-2xl z-0"
                />
                <Image
                  width={600}
                  height={600}
                  src="/images/Green_Airoo-8.png"
                  alt="Hero Image"
                  className="w-28 h-28 drop-shadow-2xl z-10"
                />
              </div>
            </div>
            <h3>Our Trending Arrivals</h3>
            <button className="text-sm px-4 py-1 w-fit border-spacing-4 border-solid border-white rounded-lg border-2">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
