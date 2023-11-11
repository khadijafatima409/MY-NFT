import Image from "next/image";
import React from "react";

const CustomButton = ({}) => {
  return (
    <>
      <button
        type="button"
        className={`border-2 border-solid border-light-steel-blue py-2 px-4 rounded-[12px] bg-transparent text-light-steel-blue `}
      >
        {/* {btnText} */}
        {/* <Image src={img} alt="" height={20} width={20} /> */}
      </button>
    </>
  );
};

export default CustomButton;
