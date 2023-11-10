import React from "react";
import NavBar from "./NavBar";

const HeroSetion = () => {
  return (
    <div className=" h-[100vh] bg-[url('/hero/Noise.svg')] bg-blue bg-cover bg-center bg-no-repeat">
      <div className=" w-[80%] mx-auto">
        <NavBar />
        <div className=" flex mt-10 ">
          <div className="w-[50%] text-start flex flex-col gap-12 justify-center items-start py-14">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-5xl text-white  ">
                Discover, collect, and sell extraordinary NFTs
              </h1>
              <p className="text-cyan-blue text-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <button className="explore py-1  pl-6 pr-1 rounded-[12px] text-white flex gap-3 font-medium items-center">
              Explore now
              <a href="#arrow" className="p-2 bg-white rounded-[10px]">
                <img src="/hero/arrow-right.svg" alt="" />
              </a>
            </button>
          </div>
          <div className="w-[50%]  flex justify-center">
            <div className="  rounded-[12px] h-[400px] w-[60%]  mt-[60px] a">
              <div>
                <img
                  src="/hero/Base.png"
                  alt=""
                  className="rotate-[-39.184deg] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSetion;
