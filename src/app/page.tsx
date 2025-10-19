import Artists from "@/components/Artists";
import Auctions from "@/components/Auctions";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
// import CustomTabs from "@/components/CustomTabs";
import HeroSetion from "@/components/HeroSection";
// import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#ECF1FF] min-h-screen ">
      <HeroSetion />
      <Auctions />
      <Collections />
      <Artists />
      {/* <CustomTabs /> */}
      <Footer />
    </main>
  );
}
