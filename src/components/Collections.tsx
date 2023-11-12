import React from "react";
import CustomHeader from "./CustomHeader";
import Image from "next/image";

const Collections = () => {
  return (
    <div className="   w-[80%] mx-auto ">
      <CustomHeader />
      <div className=" grid grid-cols-3 pt-10 pb-20">
        {/* <div className="bg-white rounded-[12px] py-4  w-full border p-2"> */}
        <div className="grid grid-cols-4 gap-2 bg-white rounded-[12px] py-4  w-full border p-2">
          <div className="col-span-2 row-span-2  bg-red-500 h-full">1</div>

          <div className="col-span-2  row-span-2 bg-green-500 h-full">2</div>

          <div className="col-span-1  row-span-1 bg-red-500 h-full">3</div>

          <div className="col-span-1  row-span-1 bg-yellow-500 h-full">4</div>
        </div>
        {/* </div> */}

        {/* <div className="bg-white rounded-[12px] py-4 grid grid-cols-4 grid-row-2 w-full border p-2">
          <div className=" border pr-2">
            <div className="">1</div>
            <Image
              src="/Collections/img1.svg"
              width="100"
              height="195"
              className="w-[100%] rounded-[12px]"
              alt="NFT"
            />
          </div>
          <div className="grid border col-span-2">
            <Image
              src="/Collections/img2.svg"
              width="100"
              height="20"
              className=" rounded-[12px]"
              alt="NFT"
            />
            2
          </div>
          <div>
            <Image
              src="/Collections/img2.svg"
              width="100"
              height="195"
              className="w-[100%] rounded-[12px]"
              alt="NFT"
            />
            3
          </div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
        </div> */}
        <div>
          dfsdfsdf adfsdf
          <h1>khadija</h1>
          <p>aliya</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
