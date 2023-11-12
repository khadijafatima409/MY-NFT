import Image from "next/image";
import React from "react";

const AuctionsCards = () => {
  return (
    <div className=" py-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 ">
      {/* card */}
      {CARD_DATA.map(
        ({
          collectionName,
          nftName,
          currentBid,
          bidUSD,
          auctionEnding,
          bids,
          artistName,
          likes,
          imageSrc,
          smallIconSrc,
          heartIconSrc,
        }) => {
          return (
            <>
              <div className="bg-white rounded-[12px] p-4">
                <div>
                  <Image
                    src={imageSrc}
                    alt=""
                    height={100}
                    width={253}
                    className="w-[100%] rounded-[12px]"
                  />
                </div>
                <div className="py-2">
                  <div className="">
                    <h2 className=" text-grey-blue text-xs">
                      {collectionName}
                    </h2>
                    <h1 className="text-zodiac text-base font-bold">
                      {nftName}
                    </h1>
                  </div>
                  <div className="  flex justify-between gap-4 py-2 ">
                    <div className="">
                      <p className="text-grey-blue text-xs">Current bid</p>
                      <p className="text-zodiac text-base font-bold">
                        {currentBid} ETH
                      </p>
                      <p className="text-grey-blue text-xs ">{bidUSD}</p>
                    </div>
                    <div>
                      <p className="text-grey-blue text-xs">
                        Auction ending in
                      </p>
                      <p className="text-zodiac text-base font-bold">
                        {auctionEnding}
                      </p>
                      <p className="flex text-grey-blue text-xs">
                        Bids: {bids}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className=" flex gap-2 items-center">
                    <Image
                      src={smallIconSrc}
                      alt=""
                      width={20}
                      height={10}
                      className="rounded-full"
                    />
                    <p className="text-xs text-light-steel-blue">
                      {artistName}
                    </p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <Image
                      src={heartIconSrc}
                      alt=""
                      width={20}
                      height={10}
                      className="rounded-full"
                    />
                    <p className="text-xs text-light-steel-blue">{likes} </p>
                  </div>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};

export default AuctionsCards;

const CARD_DATA = [
  {
    collectionName: "Collection name",
    nftName: "NFT name Ex Shiba ...",
    currentBid: "300",
    bidUSD: "$130,729.12",
    auctionEnding: "03d : 25h : 05m",
    bids: 25,
    artistName: "Artist name",
    likes: 12121,
    imageSrc: "/auctions/card1.svg",
    smallIconSrc: "/auctions/small-icon.gif",
    heartIconSrc: "/auctions/heart.svg",
  },
  {
    collectionName: "Collection name",
    nftName: "NFT name Ex Shiba ...",
    currentBid: "300",
    bidUSD: "$130,729.12",
    auctionEnding: "03d : 25h : 05m",
    bids: 25,
    artistName: "Artist name",
    likes: 12121,
    imageSrc: "/auctions/card2.svg",
    smallIconSrc: "/auctions/small-icon.gif",
    heartIconSrc: "/auctions/heart.svg",
  },
  {
    collectionName: "Collection name",
    nftName: "NFT name Ex Shiba ...",
    currentBid: "300",
    bidUSD: "$130,729.12",
    auctionEnding: "03d : 25h : 05m",
    bids: 25,
    artistName: "Artist name",
    likes: 12121,
    imageSrc: "/auctions/card3.svg",
    smallIconSrc: "/auctions/small-icon.gif",
    heartIconSrc: "/auctions/heart.svg",
  },
  {
    collectionName: "Collection name",
    nftName: "NFT name Ex Shiba ...",
    currentBid: "300",
    bidUSD: "$130,729.12",
    auctionEnding: "03d : 25h : 05m",
    bids: 25,
    artistName: "Artist name",
    likes: 12121,
    imageSrc: "/auctions/card4.svg",
    smallIconSrc: "/auctions/small-icon.gif",
    heartIconSrc: "/auctions/heart.svg",
  },
];
