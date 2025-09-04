import Image from "next/image"
import Button from "@/UI/Button"

export default function Packages () {
    return (
        <div className="w-4/5 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:bg-[var(--dark-gray)]" id="packages">
            <Image src="/images/package.svg" alt="Package Image" width={500} height={500} className="w-1/2 h-auto hidden lg:flex" />
            <Image src="/images/packagesm.png" alt="Package Image" width={500} height={500} className="w-full h-auto inline lg:hidden mb-5" />
            <div className="flex flex-col justify-center items-center gap-3 shadow-2xl rounded-3xl lg:shadow-none lg:items-start lg:ml-4 p-5 lg:gap-2 lg:rounded-none">
                <h2 className="text-[var(--grey-text)] text-[13px]">Women Collection</h2>
                <p className="text-xl font-bold">Peaky Blinders Inspired</p>
                <p className="text-black underline text-[14px]">Description</p>
                <p className="text-[var(--grey-text)] text-[13px] w-3/5">
                    Step back into elegance with our 1952 Women&apos;s Clothing Set, inspired by vintage fashion.
                </p>
                <div className="w-auto flex flex-row justify-between items-center gap-4">
                    <p className="text-[var(--grey-text)] text-[13px]">size</p>
                    <p className="text-white bg-black px-5 py-1 rounded-md text-[13px]">M</p>
                </div>
                <p className="text-[18px]">$100.00</p>
                <Button label="Add to cart" variant="secondary" />
            </div>
        </div>
    )
}