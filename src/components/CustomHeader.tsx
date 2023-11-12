import React from "react";

import Image from "next/image";

const CustomHeader = () => {
  return (
    <div>
      <div className="flex  justify-between">
        <div className="flex gap-10">
          <h1 className="text-[32px] gradient-text font-semibold">
            Hot Auctions
          </h1>
          <select
            name="cars"
            id="cars"
            className="rounded-[12px] bg-aqua text-lg text-zodiac pl-3 w-36 outline-none border-transparent border-r-8 border-solid"
          >
            <option value="volvo">Ethereum</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className=" flex gap-3">
          <button
            type="button"
            className={`border-2 border-solid border-light-steel-blue py-2 px-4 rounded-[12px] bg-transparent text-light-steel-blue `}
          >
            See all
          </button>
          <button
            type="button"
            className={`border-2 border-solid border-cyan-blue py-3 px-4 rounded-[12px] bg-transparent text-light-steel-blue `}
          >
            <Image
              src="/auctions/arrow-left.svg"
              alt=""
              height={20}
              width={20}
            />
          </button>
          <button
            type="button"
            className={`border-2 border-solid border-light-steel-blue py-3 px-4 rounded-[12px] bg-transparent text-light-steel-blue `}
          >
            <Image
              src="/auctions/arrow-right.svg"
              alt=""
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
