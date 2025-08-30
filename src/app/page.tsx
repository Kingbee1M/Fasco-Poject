import Image from "next/image";
import Homenav from "@/UI/HomeNav";
import SignInHero from "@/Components/SignInHero";
import Deals from "@/Components/Deals";

const logos = ["chanel", "calvinklein", "louisvuitton", "prada", "demin"];

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-items-center">
      <Homenav />
      <SignInHero />
      <Image src={"/images/logos.svg"} alt="logos" width={1200} height={300} className="hidden lg:flex lg:mt-5 xl:mt-20" />
      <Deals />
    </div>
  );
} 

{/* <div className="w-full flex flex-row justify-evenly items-center mt-22">
        {logos.map((logo) => (
          <Image
            key={logo}
            src={`/images/${logo}.svg`}
            alt={`${logo} logo`}
            width={100}
            height={50}
            className="w-1/5 object-contain mx-5 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        ))}
      </div> */}