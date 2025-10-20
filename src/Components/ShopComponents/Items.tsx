"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link";

type ButtonOption = {
  id: number;
  img: string;
  alt: string;
  selected: "1" | "2" | "3" | "4" | "5";
};

const buttons: ButtonOption[]  = [
    { id: 1, img: "/images/button-option(0).svg", alt: "option1", selected: "1" },
    { id: 2, img: "/images/button-option(1).svg", alt: "option2", selected: "2" },
    { id: 3, img: "/images/button-option(2).svg", alt: "option3", selected: "3" },
    { id: 4, img: "/images/button-option(3).svg", alt: "option4", selected: "4" },
    { id: 5, img: "/images/button-option(4).svg", alt: "option5", selected: "5" },
]

interface Item {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
    status: string;
    color: string[];
    size: string[];
    brand: string;
    collection: string;
    tags: string[];
    Variety: string[];
    rating: number
    quantity: number
}

const colors: Record<string, string> = {
 "Coral Red": "#FF6C6C",     // warm red
  "Tangerine": "#FF7629",     // orange
  "Sunny Yellow": "#FFF06C",  // yellow
  "Lime Green": "#9BFF6C",    // lime
  "Mint Green": "#6CFF9E",    // mint
  "Turquoise": "#6CFFDC",     // turquoise / aqua
  "Sky Blue": "#6CB9FF",      // sky blue
  "Cyan": "#6CF6FF",          // bright cyan
  "Azure Blue": "#6CA7FF",    // azure
  "Periwinkle Blue": "#6C7BFF",// periwinkle
  "Lavender": "#8A6CFF",      // lavender
  "Amethyst": "#B66CFF",      // amethyst
  "Magenta": "#FC6CFF",       // magenta (you previously used this)
  "Fuchsia Pink": "#FF6CE0",
};

export default function Items({ items }: { items: Item[] }) {

    const [selectedButton, setSelectedButton] = useState<"1" | "2" | "3" | "4" | "5">("3");
  return (
    <div className="w-4/5">

        {/* headings */}
        <div className="w-full flex flex-row justify-between items-center">
            <p className="w-full text-[8px] md:text-[12px] lg:text-[16px]">Take a pick of you choice from our collection</p>
            <div className="w-full h-auto flex flex-row justify-end items-center gap-3">
                {buttons.map((button) => (
                    <button key={button.id} onClick={() => setSelectedButton(button.selected === selectedButton ? "3" : button.selected)} className={` ${selectedButton === button.selected ? "border-2 border-black" : "border border-[var(--light-gray3)]"} p-1 rounded-md cursor-pointer focus:outline-none focus:border-none`}>
                        <Image src={button.img} alt={button.alt} width={10} height={10} className="bg-[var(--light-gray3)] p" />
                    </button>
                ))}
            </div>
        </div>

        {/* items grid */}
        <div className="w-full flex flex-wrap justify-between items-center gap-1 mt-10 ">
                {items.map((item) => (
                    <Link href={`/product/${encodeURIComponent(item.title.replace(/\s+/g, "-"))}`} key={item.id} className={` ${selectedButton === "1" ? "w-4/5" : selectedButton === "2" ? "w-[40%]" : selectedButton === "3" ? "w-[30%]" : selectedButton === "4" ? "w-[20%] text-sm" : "w-[25%] sm:w-[16%] md:w-[17%]"} flex flex-col justify-center p-3 hover:shadow-lg transition-shadow duration-300 ease-in-ou gap-2`}>
                        <div className="w-full relative">
                            <Image src={item.imageUrl} alt={item.title} width={300} height={300} className="w-full h-auto object-cover" />
                            {item.quantity === 0 && (
                                <div className="absolute w-20 h-20 rounded-full flex justify-center items-center top-1/2 right-1/3 text-[12px] text-white font-bold bg-[var(--sold-out-bg)]">
                                SOLD OUT
                            </div>
                            )}
                        </div>
                        <p className={` ${selectedButton === "4" ? "text-[8px] md:text-[9px] lg:text-[14px] xl:text-[16px]" : selectedButton === "5" ? "text-[6px] md:text-[9px] lg:text-[14px]" : "text-[9px] md:text-[16px] lg:text-[20px]"}`}>{item.title}</p>
                        <p className={` ${selectedButton === "4" ? "text-[6px] md:text-[7px] lg:text-[12px] xl:text-[14px]" : selectedButton === "5" ? "text-[4px] md:text-[7px] lg:text-[12px]" : "text-[7px] md:text-[14px] lg:text-[18px]"}`}>{item.price}</p>
                        <div className="h-auto flex flex-row gap-1 mt-2">
                            {item.color.map((color) => (
                                <span key={color} className="w-2 h-2 lg:w-3 lg:h-3 rounded-full inline-block cursor-pointer box-border hover:border hover:p-1" style={{ backgroundColor: colors[color] }}></span>
                            ))}
                        </div>
                    </Link>
                ))}
        </div>
    </div>
  )
}