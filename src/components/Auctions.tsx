import React from "react";
import CustomHeader from "./CustomHeader";
import AuctionsCards from "./AuctionsCard";

const Auctions = () => {
  return (
    <div className="border ">
      <div className="w-[80%] mx-auto border py-20  ">
        <CustomHeader />
        <AuctionsCards />
      </div>
    </div>
  );
};

export default Auctions;
