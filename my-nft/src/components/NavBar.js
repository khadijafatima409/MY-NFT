import React from "react";

const NavBar = () => {
  return (
    <div className="flex gap-24 py-4 border">
      <img src="/Logo.svg" alt="" />

      <ul className="flex font-medium text-base gap-14 justify-end items-center w-full">
        {navItems.map(({ text, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-cyan-blue hover:text-white"
          >
            <li>{text}</li>
          </a>
        ))}

        <li>
          <img src="/more-horizontal.svg" alt="" />
        </li>

        <li>
          <img src="/search.svg" alt="" />
        </li>

        <a href="#connect" className=" text-cyan-blue hover:text-white">
          <button className="border px-4 py-3 rounded-[12px]">
            Connect wallet
          </button>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;

const navItems = [
  { text: "Home", href: "/" },
  { text: "Market Place", href: "#marketplace" },
  { text: "All NFTs", href: "#nft" },
  { text: "Activities", href: "#activities" },
];
