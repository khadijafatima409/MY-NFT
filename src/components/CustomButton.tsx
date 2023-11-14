import React from "react";

interface CustomButtonProps {
  btnText: string;
  btnIcon?: string;
  className?: string;
  btnTextClassName?: string;
  btnIconClassName?: string;
  href?: string;
  onClick?: () => void;
}

const CustomButton = ({
  btnText,
  btnIcon,
  className,
  onClick,
  btnTextClassName,
  btnIconClassName,
  href,
}: CustomButtonProps) => {
  return (
    <a href={href}>
      <button
        className={`custom-btn rounded-[10px] flex gap-2   text-xs  md:text-lg ${className} `}
        onClick={onClick}
      >
        <p
          className={`text-center text-lg font-normal mt-1 text-soft-lavender-gray ${btnTextClassName}`}
        >
          {btnText}
        </p>
        <img src={btnIcon} alt="" className={` mt-1 ${btnIconClassName} `} />
      </button>
    </a>
  );
};

export default CustomButton;
