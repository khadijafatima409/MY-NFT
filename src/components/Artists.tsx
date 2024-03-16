import React from "react";
import CustomHeader from "./CustomHeader";
import Image from "next/image";

const Artists = () => {
  return (
    <div className="w-[80%] mx-auto">
      <CustomHeader title="Top Artists" className="text-blue" />
      <div className="max-w-full pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Artists_CARD.map((artist, index) => {
          return (
            <>
              <div className="flex gap-2 " key={index}>
                <div className="flex">
                  <div className="w-10 flex justify-center items-center ">
                    <p className="text-xl">{index + 1}</p>
                  </div>
                  <div className="relative flex justify-center items-center">
                    <Image
                      src={artist.imagePath}
                      alt="artists"
                      height={20}
                      width={20}
                      className="w-14 rounded-full border-4 border-white"
                    />
                    <Image
                      src="/artist/Verified.svg"
                      alt="verified"
                      height={22}
                      width={22}
                      className="absolute bottom-4 right-0"
                    />
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="flex flex-col justify-around h-full w-full font-medium">
                    <h2 className="text-dark-purple text-lg">{artist.name}</h2>
                    <div className="flex w-20">
                      <Image
                        src="/artist/eth.svg"
                        alt="etheriem"
                        height={22}
                        width={22}
                      />
                      <p className="text-grey-blue">2,798</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-end">
                      <Image
                        src="/artist/followers.svg"
                        alt="followers"
                        height={22}
                        width={22}
                        className="h-10 w-10"
                      />
                    </div>
                    <div className="text-purply-blue text-xs flex justify-end">
                      <p className="text-right w-24">
                        Follow by mikain and 2,129 users
                      </p>
                    </div>
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

export default Artists;
const Artists_CARD = [
  { name: "Phuong Pham", imagePath: "/artist/artist-1.svg" },
  { name: "Blake Kathryn", imagePath: "/artist/artist-2.svg" },
  { name: "Dania India", imagePath: "/artist/artist-3.svg" },
  { name: "Xsullo Studio", imagePath: "/artist/artist-4.svg" },
  { name: "Stefan Gro Halbuer", imagePath: "/artist/artist-5.svg" },
  { name: "Nyumori", imagePath: "/artist/artist-6.svg" },
];
