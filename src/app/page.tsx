import Homenav from "@/UI/HomeNav";
import SignInHero from "@/Components/SignInHero";
import Deals from "@/Components/Deals";
import DealsLG from "@/Components/DealsLG";
import Arrivals from "@/Components/Arrivals";
import Packages from "@/Components/Packages";
import Newsletter from "@/Components/Newsletter";
import Community from "@/Components/Community";
import FollowInsta from "@/Components/FollowInsta";
import BrandMarquee from "@/Components/BrandMarquee";

// const logos = ["chanel", "calvinklein", "louisvuitton", "prada", "demin"];

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-items-center pb-20 dark:bg-white dark:text-black">
      <Homenav />
      <SignInHero />
      <BrandMarquee/>
      <Deals />
      <DealsLG />
      <Arrivals />
      <Packages />
      <FollowInsta />
      <Community />
      <Newsletter />
    </div>
  );
} 
