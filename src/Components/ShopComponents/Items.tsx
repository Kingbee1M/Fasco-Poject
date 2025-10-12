"use client"
import { useState } from "react"
import Image from "next/image"

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
            <p className="w-full text-[12px]">Take a pick of you choice from our collection</p>
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
                    <div key={item.id} className={` ${selectedButton === "1" ? "w-full" : selectedButton === "2" ? "w-[40%]" : selectedButton === "3" ? "w-[30%]" : selectedButton === "4" ? "w-[20%] text-sm" : "w-[17%] text-[9px]"} flex flex-col justify-center p-3 hover:shadow-lg transition-shadow duration-300 ease-in-ou gap-2`}>
                        <Image src={item.imageUrl} alt={item.title} width={300} height={300} className="w-full h-auto object-cover" />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <div>
                            {item.color.map((color) => (
                                <span key={color} className="w-3 h-3 rounded-full inline-block mr-2 cursor-pointer box-border hover:border hover:p-1" style={{ backgroundColor: colors[color] }}></span>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}