
'use client'

import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import Filters from "@/Components/ShopComponents/Filters";
import { useState } from "react";
import Items from "@/Components/ShopComponents/Items";
import Packages from "@/Components/Packages";
import FollowInsta from "@/Components/FollowInsta";
import Newsletter from "@/Components/Newsletter";


const items = [
  {
    id: 1,
    title: "Rounded Red Hat",
    price: "$8.00",
    imageUrl: "/images/Rounded-red-hat.svg",
    status: "In Stock",
    color: ["Coral Red", "Tangerine", "Sunny Yellow"],
    size: ["Small", "Medium"],
    brand: "Minimog",
    collection: "All products",
    tags: ["Fashion", "Hats"],
  },
  {
    id: 2,
    title: "Linen-blend Shirt",
    price: "$25.00",
    imageUrl: "/images/Linen-blend-Shirt.svg",
    status: "Sold out",
    color: ["Sky Blue", "Cyan", "Azure Blue"],
    size: ["Medium", "Large", "Extra Large"],
    brand: "Retrolie",
    collection: "Best sellers",
    tags: ["Fashion", "Denim"],
  },
  {
    id: 3,
    title: "Long-sleeve Coat",
    price: "$45.00",
    imageUrl: "/images/Long-sleeve-Coat.svg",
    status: "In Stock",
    color: ["Amethyst", "Lavender", "Periwinkle Blue"],
    size: ["Large", "Extra Large"],
    brand: "Brook",
    collection: "New arrivals",
    tags: ["Fashion", "Bags"],
  },
  {
    id: 4,
    title: "Boxy Denim Hat",
    price: "$15.00",
    imageUrl: "/images/Boxy-Denim-Hat.svg",
    status: "In Stock",
    color: ["Periwinkle Blue", "Azure Blue", "Turquoise"],
    size: ["Small", "Medium", "Large"],
    brand: "Learts",
    collection: "Accessories",
    tags: ["Fashion", "Sunglasses"],
  },
  {
    id: 5,
    title: "Linen Plain Top",
    price: "$30.00",
    imageUrl: "/images/Linen-Plain-Top.svg",
    status: "Sold out",
    color: ["Lime Green", "Mint Green", "Turquoise"],
    size: ["Small", "Medium", "Large"],
    brand: "Vagabond",
    collection: "All products",
    tags: ["Fashion", "Beachwear"],
  },
  {
    id: 6,
    title: "Oversized T-shirt",
    price: "$12.00",
    imageUrl: "/images/Oversized-T-shirt.svg",
    status: "Sold out",
    color: ["Magenta", "Fuchsia Pink", "Amethyst"],
    size: ["Medium", "Large", "Extra Large"],
    brand: "Abby",
    collection: "Best sellers",
    tags: ["Fashion", "Belt"],
  },
  {
    id: 7,
    title: "Polarised Sunglasses",
    price: "$28.00",
    imageUrl: "/images/Polarised-Sunglasses.svg",
    status: "In Stock",
    color: ["Sunny Yellow", "Tangerine", "Coral Red"],
    size: ["Small", "Medium"],
    brand: "Minimog",
    collection: "New arrivals",
    tags: ["Fashion", "Beachwear"],
  },
  {
    id: 8,
    title: "Rockstar Jacket",
    price: "$18.00",
    imageUrl: "/images/Rockstar-Jacket.svg",
    status: "In Stock",
    color: ["Lavender", "Magenta", "Fuchsia Pink"],
    size: ["Large", "Extra Large"],
    brand: "Retrolie",
    collection: "Accessories",
    tags: ["Fashion", "Snacker"],
  },
  {
    id: 9,
    title: "Dotted Black Dress",
    price: "$50.00",
    imageUrl: "/images/Dotted-Black-Dress.svg",
    status: "In Stock",
    color: ["Cyan", "Sky Blue", "Mint Green"],
    size: ["Small", "Medium", "Large"],
    brand: "Brook",
    collection: "All products",
    tags: ["Fashion", "Sandal"],
  },
];


export default function ShopPage() {

  const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isCollectionOpen, setIsCollectionOpen] = useState(true);

    const [selectedSizes, setSelectedSizes] = useState<"small" | "medium" | "large" | "extraLarge" | null>(null);
    const [selectedColors, setSelectedColors] = useState<"Coral Red" | "Tangerine" | "Sunny Yellow" | "Lime Green" | "Mint Green" | "Turquoise" | "Sky Blue" | "Cyan" | "Azure Blue" | "Periwinkle Blue" | "Lavender" | "Amethyst" | "Magenta" | "Fuchsia Pink" | null>(null);
    const [selectPriceRange, setSelectedPriceRange] = useState<"$0-$50" | "$50-$100" | "$100-150" | "$150-$200" | "$200-$250" | "$250-$300" | "$350-$400" | null>(null);
    const [selectBrands, setSelectedBrands] = useState<'Minimog' | 'Retrolie' | 'Brook' | 'Learts' | 'Vagabond' | 'Abby' | null>(null);
    const [Collection, setCollection] = useState<'All products' | 'Best sellers' | 'New arrivals' | 'Accessories' | null>(null);
    const [tags , setTags] = useState<"Fashion" | "Hats" | "Sandal" | "Belt" | "Bags" | "Snacker" | "Denim" | "Minimog" | "Vagabond" | "Sunglasses" | "Beachwear" | null>(null);

  return (
    <div className="w-full mt-28 mb-20 flex flex-col items-center justify-center text-black">

      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-3 text-lg">
        <h1 className="text-[40px] font-bold">Fashion</h1>
        <div className="flex flex-row items-center gap-2">
          <Link href="/" className="text-lg hover:underline" > Home</Link>
          <p> <IoChevronForward /> </p>
          <p>Fashion</p>
        </div>
      </div>


      {/* Content */}
      <div className="w-9/10 flex flex-row justify-center lg:justify-between items-start gap-5 mt-10">

        {/* Filters */}
        <Filters 
        isBrandOpen={isBrandOpen} 
        isCollectionOpen={isCollectionOpen} 
        selectedSizes={selectedSizes} 
        selectedColors={selectedColors} 
        selectPriceRange={selectPriceRange} 
        selectBrands={selectBrands} 
        Collection={Collection} 
        tags={tags} 
        setIsBrandOpen={setIsBrandOpen}
        setIsCollectionOpen={setIsCollectionOpen}
        setSelectedSizes={setSelectedSizes}
        setSelectedColors={setSelectedColors}
        setSelectedPriceRange={setSelectedPriceRange}
        setSelectedBrands={setSelectedBrands}
        setCollection={setCollection}
        setTags={setTags} 
        />

        <Items items={items} />
      </div>
      <Packages />
      <FollowInsta />
      <Newsletter />
    </div>
  );
}