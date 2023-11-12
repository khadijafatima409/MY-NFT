import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
const HeroSetion = () => {
  return (
    <div className=" bg-[url('/hero/Noise.svg')] bg-blue bg-cover bg-center bg-no-repeat h-screen">
      <div className=" w-[80%] mx-auto">
        <NavBar />
        <div className=" flex py-10 gap-4">
          <div className="w-[50%] text-start flex flex-col gap-12 justify-center items-start py-14 px-3 border">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-base text-white  md:text-3xl lg:text-4xl xl:text-5xl">
                Discover, collect, and sell extraordinary NFTs
              </h1>
              <p className="text-cyan-blue text-xs md:text-base xl:text-lg 2xl:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <button className="explore py-1  pl-6 pr-1 rounded-[12px] text-white flex gap-3 font-medium items-center">
              Explore now
              <a href="#arrow" className="p-2 bg-white rounded-[10px]">
                <Image
                  src="/hero/arrow-right.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </button>
          </div>
          <div className="w-[50%] relative border">
            <div className="absolute w-full h-full">
              <Image
                alt="plant"
                src="/hero/icon3.png"
                width={150}
                height={100}
                className=""
              />
              <Image
                alt="plant"
                src="/hero/icon2.png"
                width={150}
                height={100}
                className="absolute right-0 top-0"
              />
              <Image
                alt="plant"
                src="/hero/icon1.png"
                width={150}
                height={100}
                className="-bottom-28 right-0 absolute"
              />
            </div>
            <Image
              src="/hero/NFT01.png"
              width="600"
              height="195"
              className="absolute mt-24 ml-5  border"
              alt="NFT"
            />
            <div className=" absolute gap-5  flex flex-col rotate-[36.184deg] top-[64%] left-[8%] p-2">
              <div className="">
                <h2 className=" text-soft-peach text-xs">Collection name</h2>
                <h1 className="text-white text-base">
                  NFT name Ex Shiba Astronaut
                </h1>
              </div>
              <div className="  flex justify-between rounded-[12px] price w-[270px] py-2 px-3">
                <div className="">
                  <p className="text-soft-peach text-xs">Price</p>
                  <p className="text-white text-base">1.0 ETH</p>
                  <p className="text-soft-peach text-xs">$130,729.12</p>
                </div>
                <div>
                  <p className="text-soft-peach text-xs">Best offer</p>
                  <p className="text-white text-base">1.5 ETH</p>
                  <p className="flex text-soft-peach text-xs">
                    <Image
                      src="/hero/clock.svg"
                      alt="clock not found"
                      width={20}
                      height={20}
                    />
                    4hrs left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSetion;
