import React from "react";

import Image from "next/image";
import CustomButton from "./CustomButton";
import CustomSelect from "./CustomSelect";
// import CustomTabs from "./CustomTabs";
interface CustomHeaderProps {
  title: string;
  className: string;
  tabs?: React.ReactNode;
}
const CustomHeader = ({ title, className, tabs }: CustomHeaderProps) => {
  return (
    <div>
      <div className="flex  justify-between border">
        <div className="flex gap-10">
          <h1 className={`text-[32px] font-semibold ${className} `}>{title}</h1>
          <CustomSelect
            defaultSelected="Ethereum"
            items={["Ethereum", "Coin1", "Coin2"]}
          />
        </div>
        {tabs && <div className="">{tabs}</div>}
        <div className=" flex gap-3">
          <CustomButton
            btnText="See all"
            className="border-2 border-solid border-light-steel-blue py-2 px-4 rounded-[12px] bg-transparent text-light-steel-blue"
            href="#seeall"
          />
          <CustomButton
            btnIcon="/auctions/arrow-left.svg"
            className="border-2 border-solid border-cyan-blue py-3 px-4 rounded-[12px] bg-transparent text-light-steel-blue "
            btnText={""}
            href="#left"
          />

          <CustomButton
            btnIcon="/auctions/arrow-right.svg"
            className="border-2 border-solid border-light-steel-blue py-3 px-4 rounded-[12px] bg-transparent text-light-steel-blue "
            btnText={""}
            href="#right"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
