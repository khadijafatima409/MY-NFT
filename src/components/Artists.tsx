import React from "react";
import CustomHeader from "./CustomHeader";
import Image from "next/image";

const Artists = () => {
  return (
    <div className="w-[80%] mx-auto ">
      <CustomHeader title="Top Artists" className="text-blue" />
      <div className="max-w-full pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <div className="border flex gap-2">
          <div className="border  flex ">
            <div className="w-10 flex justify-center items-center border">
              <p className="text-xl">1</p>
            </div>
            <div className="border relative">
              <Image
                src="/artist/artist-1.svg"
                alt=""
                height={20}
                width={20}
                className="w-20  rounded-full border-4 border-white"
              />
              <Image
                src="/artist/Verified.svg"
                alt=""
                height={22}
                width={22}
                className="absolute bottom-1 right-0"
              />
            </div>
          </div>
          <div className="border flex  ">
            <div className="flex flex-col justify-around border h-full font-medium">
              <h2 className="text-dark-purple">Phuong Pham</h2>
              <div className="flex border w-20">
                <Image src="/artist/eth.svg" alt="" height={22} width={22} />
                <p className="text-grey-blue">2,798</p>
              </div>
            </div>
            <div>
              <div className="flex justify-end">
                <Image
                  src="/artist/followers.svg"
                  alt=""
                  height={22}
                  width={22}
                  className="h-10 w-10"
                />
              </div>
              <div className="text-purply-blue text-xs ">
                <p className="text-right">Follow by mikain and 2,129 users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
