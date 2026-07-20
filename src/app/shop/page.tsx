
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
    Variety: [
      "/images/hats(1).jpg",
      "/images/hats(2).jpg",
      "/images/hats(3).jpg",
    ],
    rating: 4,
    quantity: 2
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
    Variety: [
      "/images/blend-shirt(1).jpg",
      "/images/blend-shirt(2).jpg",
      "/images/blend-shirt(3).jpg",
      "/images/blend-shirt(4).jpg",
    ],
    rating: 4,
    quantity: 10
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
    Variety: [
      "/images/blazer(1).jpg",
      "/images/blazer(2).jpg",
      "/images/blazer(3).jpg",
      "/images/blazer(4).jpg",
    ],
    rating: 4,
    quantity: 15
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
    tags: ["Fashion", "Hats"],
    Variety: [
      "/images/sun-hat(1).jpg",
      "/images/sun-hat(2).jpg",
      "/images/sun-hat(3).jpg",
      "/images/sun-hat(4).jpg",
      "/images/sun-hat(5).jpg",
    ],
    rating: 5,
    quantity: 13
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
    Variety: [
      "/images/linen-top(1).jpg",
      "/images/linen-top(2).jpg"
    ],
    rating: 2,
    quantity: 6
  },
  {
    id: 6,
    title: "Denim Jacket",
    price: "$12.00",
    imageUrl: "/images/Oversized-T-shirt.svg",
    status: "Sold out",
    color: ["Magenta", "Fuchsia Pink", "Amethyst"],
    size: ["Medium", "Large", "Extra Large"],
    brand: "Abby",
    collection: "Best sellers",
    tags: ["Fashion", "Belt"],
    Variety: [
      "/images/variety(1).svg",
      "/images/variety(2).svg",
      "/images/variety(3).svg",
      "/images/variety(4).svg",
      "/images/variety(5).svg",
      "/images/variety(6).svg",
      "/images/variety(7).svg",
    ],
    rating: 3,
    quantity: 3
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
    tags: ["Sunglasses", "Beachwear"],
    Variety: [
      "/images/sunglasses(1).jpg",
      "/images/sunglasses(2).jpg",
      "/images/sunglasses(3).jpg",
      "/images/sunglasses(4).jpg",
    ],
    rating: 5,
    quantity: 35
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
    Variety: [
      "/images/variety(1).svg",
      "/images/variety(2).svg",
      "/images/variety(3).svg",
      "/images/variety(4).svg",
      "/images/variety(5).svg",
      "/images/variety(6).svg",
      "/images/variety(7).svg",
    ],
    rating: 4,
    quantity: 8
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
    Variety: [
      "/images/dotted-dress(1).jpg",
      "/images/dotted-dress(2).jpg",
      "/images/dotted-dress(3).jpg",
    ],
    rating: 4,
    quantity: 0
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

    let displayItems = items;

    if (selectedSizes) {
      displayItems = displayItems.filter(item => item.size.map(size => size.toLowerCase()).includes(selectedSizes!));
    }
    if (selectedColors) {
      displayItems = displayItems.filter(item => item.color.includes(selectedColors!));
    }
    if (selectPriceRange) {
      displayItems = displayItems.filter(item => {
        const price = parseFloat(item.price.replace('$', ''));
        switch (selectPriceRange) {
          case '$0-$50':
            return price >= 0 && price <= 50;
          case '$50-$100':
            return price > 50 && price <= 100;
          case '$100-150':
            return price > 100 && price <= 150;
          case '$150-$200':
            return price > 150 && price <= 200;
          case '$200-$250':
            return price > 200 && price <= 250;
          case '$250-$300':
            return price > 250 && price <= 300;
          case '$350-$400':
            return price > 350 && price <= 400;
          default:
            return true;
        }
      });
    }
    if (selectBrands) {
      displayItems = displayItems.filter(item => item.brand === selectBrands);
    }
    if (Collection) {
      displayItems = displayItems.filter(item => item.collection === Collection);
    }
    if (tags) {
      displayItems = displayItems.filter(item => item.tags.includes(tags!));
    }

    console.log(displayItems);
    

  return (
    <div className="w-full mt-28 pb-20 flex flex-col items-center justify-center text-black dark:bg-white dark:text-black">

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
      <div className="w-9/10 flex flex-row justify-center lg:justify-between items-start gap-5 mt-10 dark:bg-white dark:text-black">

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

        <Items items={displayItems} />
      </div>
      <Packages />
      <FollowInsta />
      <Newsletter />
    </div>
  );
}