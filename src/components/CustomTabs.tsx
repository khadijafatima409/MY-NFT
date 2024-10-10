"use client";
import React from "react";
import CustomButton from "./CustomButton";
interface CustomTabsProps {
  label1: string;
  label2: string;
  label3: string;
}
const CustomTabs = ({ label1, label2, label3 }: CustomTabsProps) => {
  return (
    <div className="bg-aqua flex justify-between items-center py-2 w-[300px] rounded-lg px-2 text-grey-blue">
      <CustomButton btnText="Today" btnTextClassName=" " />
      <CustomButton
        btnText="This Week"
        btnTextClassName=" bg-white px-2 py-1 rounded-lg"
      />
      <CustomButton btnText="This Month" />
    </div>
  );
};

export default CustomTabs;
