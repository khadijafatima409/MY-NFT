import React from "react";
import CustomHeader from "./CustomHeader";
import AuctionsCards from "./AuctionsCard";

const Auctions = () => {
  return (
    <div className="">
      <div className="w-[80%] mx-auto py-20  ">
        <CustomHeader title="Hot Auctions" />
        <AuctionsCards />
      </div>
    </div>
  );
};

export default Auctions;
