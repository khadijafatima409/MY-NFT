"use client";

import Image from "next/image";
import Link from "next/link";

// import { Twitter, Instagram, Github, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Market Place",
    links: [
      { label: "Explore", href: "#" },
      { label: "How it Works", href: "#" },
      { label: "Jobs", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Feature", href: "#" },
      { label: "Discover", href: "#" },
    ],
  },
  {
    title: "Get our lastest updates",
    links: [
      { label: "Help & Support", href: "#" },
      { label: "Live Auctions", href: "#" },
      { label: "Item Details", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: "/icons/twitter.svg", href: "#", label: "Twitter" },
  { icon: "/icons/instagram.svg", href: "#", label: "Instagram" },
  { icon: "/icons/github.svg", href: "#", label: "Github" },
  { icon: "/icons/mail.svg", href: "#", label: "Email" },
];

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"> */}
                <Image src="/Logo.svg" alt="" height={44} width={44} />
                {/* </div> */}
                <span className="text-2xl font-bold text-white ">
                  MyNFT.com
                </span>
              </Link>
              <p className="text-gray-400 max-w-sm">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={20}
                        height={20}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 NFT Marketplace. All rights reserved.
              </p>
              <div className="flex items-center gap-2 border">
                <input
                  placeholder="Enter your email"
                  className="w-64 bg-slate-900 border-slate-700 text-base py-2 px-3"
                />
                <button className="bg-white rounded-lg py-[10px] px-6">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
