import Image from "next/image"
import Button from "@/UI/Button"
import packageLgImg from "@/public/images/package.svg"
import packageSmImg from "@/public/images/packagesm.png"

export default function Packages() {
  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:bg-dark-gray lg:border-y lg:border-accent-gold/25 mt-5"
      id="packages"
    >
      <Image
        src={packageLgImg}
        alt="Package Image"
        width={500}
        height={500}
        className="w-1/2 h-auto hidden lg:flex"
      />
      <Image
        src={packageSmImg}
        alt="Package Image"
        width={500}
        height={500}
        className="w-full h-auto inline lg:hidden mb-5"
      />
      <div className="flex flex-col justify-center items-center gap-3 shadow-2xl border border-accent-gold/20 rounded-3xl lg:border-0 lg:shadow-none lg:items-start lg:ml-4 p-5 lg:gap-2 lg:rounded-none">
        <h2 className="text-accent-gold text-[13px] font-semibold uppercase tracking-widest">
          Women Collection
        </h2>
        <p className="text-xl font-bold">Peaky Blinders Inspired</p>
        <p className="text-black underline decoration-accent-gold underline-offset-4 text-[14px]">
          Description
        </p>
        <p className="text-grey-text text-[13px] w-3/5">
          Step back into elegance with our 1952 Women&apos;s Clothing Set, inspired by vintage fashion.
        </p>
        <div className="w-auto flex flex-row justify-between items-center gap-4">
          <p className="text-grey-text text-[13px]">size</p>
          <p className="text-white bg-black hover:bg-accent-gold px-5 py-1 rounded-md text-[13px] transition-colors duration-300 cursor-pointer">
            M
          </p>
        </div>
        <p className="text-[18px] font-bold text-accent-gold">$100.00</p>
        <Button label="Add to cart" variant="primary" className="bg-black text-white"/>
      </div>
    </div>
  )
}