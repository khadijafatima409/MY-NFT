import React from "react";
import CustomHeader from "./CustomHeader";
import Image from "next/image";
import image1 from "../../public/collections/img1.svg";
import image2 from "../../public/collections/img2.svg";
import image3 from "../../public/collections/img3.svg";
import image4 from "../../public/collections/img4.svg";
import CollectionsHeader from "./CollectionsHeader";
const Collections = () => {
  return (
    <div className="w-[80%] mx-auto ">
      <CustomHeader title="Popular Collections" className="text-blue" />
      <CollectionsHeader />
      <div className="max-w-full pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {COLLECTION_CARD.map((elrment) => {
          return (
            <>
              <div className=" bg-white p-4 rounded-[12px]">
                <div className=" w-full grid grid-cols-4 gap-2">
                  <div className=" col-span-2 row-span-2   ">
                    <Image
                      src={image1}
                      alt=""
                      className="w-full h-full object-cover  rounded-[12px]"
                    />
                  </div>
                  <div className=" col-span-2 rounded-[12px]  ">
                    <Image
                      src={image2}
                      alt=""
                      className=" w-full  rounded-[12px] "
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={image3}
                      alt=""
                      className="w-full  rounded-[12px]"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={image4}
                      alt=""
                      className="w-full rounded-[12px]"
                    />
                    <div className="absolute h-full w-full bg-black opacity-50 top-0 rounded-[12px]">
                      <h2 className="text-white text-center">+12</h2>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="flex justify-between text-blue font-semibold text-base">
                    <h1>NFT name Ex Shiba Astronaut</h1>

                    <h2>128 ETH</h2>
                  </div>
                  <div className="flex justify-between text-purply-blue text-xs">
                    <p>Floor: 19 ETH ~ $108.7K</p>
                    <p>-29%</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
const COLLECTION_CARD = ["", "", ""];
