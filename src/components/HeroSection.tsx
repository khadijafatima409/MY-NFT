import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import CustomButton from "./CustomButton";
import heroCardImage from "../../public/hero/NFT01.png";

const HeroSetion = () => {
  return (
    <div className=" bg-[url('/hero/Noise.svg')] bg-blue bg-cover bg-center bg-no-repeat ">
      <div className=" w-[80%] mx-auto h-full">
        <NavBar />
        <div className=" flex py-10 gap-4">
          <div className="w-[50%] h-full text-start flex flex-col gap-12 justify-center items-start py-14 px-3 ">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-base text-white  md:text-3xl lg:text-4xl xl:text-5xl">
                Discover, collect, and sell extraordinary NFTs
              </h1>
              <p className="w-[90%] text-cyan-blue text-xs md:text-base xl:text-lg 2xl:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <CustomButton
              btnText=" Explore now"
              btnIcon="/hero/arrow-right.svg"
              className="explore py-1.5 pl-6 pr-2 rounded-[12px] text-white flex gap-3 font-medium items-center"
              btnIconClassName="p-2 bg-white rounded-[10px]"
              href="#arrow"
            />
          </div>
          <div className="w-[50%] relative ">
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
              src={heroCardImage}
              // width="600"
              // height="195"
              className="absolute mt-24 ml-5 -bottom-28 w-[70%] md:w-[100%] lg:w-[90%] lg:h-[100%] lg:mt-10 xl:w-[100%]  2xl:w-[90%]"
              alt="NFT"
            />
            <div className=" absolute gap-5  flex flex-col rotate-[30.184deg] top-[62%] left-[7%] p-2 lg:rotate-[40deg] lg:top-[65%] lg:left-[4%] xl:rotate-[34deg] xl:top-[65%] xl:left-[7%] 2xl:rotate-[30deg] 2xl:top-[65%] 2xl:left-[5%]">
              <div className="">
                <h2 className=" text-soft-peach text-xs">Collection name</h2>
                <h1 className="text-white text-base">
                  NFT name Ex Shiba Astronaut
                </h1>
              </div>
              <div className="flex justify-between rounded-[12px] price w-[270px] py-2 px-3 lg:w-[230px] xl:w-[300px] 2xl:w-[300px] ">
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
