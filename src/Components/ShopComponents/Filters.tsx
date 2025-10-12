"use client"
import Button from "@/UI/Button";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type FiltersProps = {
    isBrandOpen: boolean;
    isCollectionOpen: boolean;
    selectedSizes: "small" | "medium" | "large" | "extraLarge" | null;
    selectedColors: "Coral Red" | "Tangerine" | "Sunny Yellow" | "Lime Green" | "Mint Green" | "Turquoise" | "Sky Blue" | "Cyan" | "Azure Blue" | "Periwinkle Blue" | "Lavender" | "Amethyst" | "Magenta" | "Fuchsia Pink" | null;
    selectPriceRange: "$0-$50" | "$50-$100" | "$100-150" | "$150-$200" | "$200-$250" | "$250-$300" | "$350-$400" | null;
    selectBrands: 'Minimog' | 'Retrolie' | 'Brook' | 'Learts' | 'Vagabond' | 'Abby' | null;
    Collection: 'All products' | 'Best sellers' | 'New arrivals' | 'Accessories' | null;
    tags : "Fashion" | "Hats" | "Sandal" | "Belt" | "Bags" | "Snacker" | "Denim" | "Minimog" | "Vagabond" | "Sunglasses" | "Beachwear" | null;
    setIsBrandOpen: (isOpen: boolean) => void;
    setIsCollectionOpen: (isOpen: boolean) => void;
    setSelectedSizes: (size: "small" | "medium" | "large" | "extraLarge" | null) => void;
    setSelectedColors: (color: "Coral Red" | "Tangerine" | "Sunny Yellow" | "Lime Green" | "Mint Green" | "Turquoise" | "Sky Blue" | "Cyan" | "Azure Blue" | "Periwinkle Blue" | "Lavender" | "Amethyst" | "Magenta" | "Fuchsia Pink" | null) => void;
    setSelectedPriceRange: (priceRange: "$0-$50" | "$50-$100" | "$100-150" | "$150-$200" | "$200-$250" | "$250-$300" | "$350-$400" | null) => void;
    setSelectedBrands: (brand: 'Minimog' | 'Retrolie' | 'Brook' | 'Learts' | 'Vagabond' | 'Abby' | null) => void;
    setCollection: (collection: 'All products' | 'Best sellers' | 'New arrivals' | 'Accessories' | null) => void;
    setTags: (tag: "Fashion" | "Hats" | "Sandal" | "Belt" | "Bags" | "Snacker" | "Denim" | "Minimog" | "Vagabond" | "Sunglasses" | "Beachwear" | null) => void;
}

export default function Filters({isBrandOpen, isCollectionOpen, selectedSizes, selectedColors, selectPriceRange, selectBrands, Collection, tags, setIsBrandOpen, setIsCollectionOpen, setSelectedSizes, setSelectedColors, setSelectedPriceRange, setSelectedBrands, setCollection, setTags}: FiltersProps) {

    


    return (
        <div className="w-1/5 hidden md:inline">
            <h2 className="font-extrabold text-[25px]">Filters</h2>

            {/* Sizes */}
            <div>
                <h3 className="font-bold text-[20px] mt-5 mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-3 w-3/5">
                    <Button variant="outline" size="sm" label="S" isActive={selectedSizes === "small"} onClick={() => setSelectedSizes(selectedSizes === "small" ? null : "small")} />
                    <Button variant="outline" size="sm" label="M" isActive={selectedSizes === "medium"} onClick={() => setSelectedSizes(selectedSizes === "medium" ? null : "medium")} />
                    <Button variant="outline" size="sm" label="L" isActive={selectedSizes === "large"} onClick={() => setSelectedSizes(selectedSizes === "large" ? null : "large")} />
                    <Button variant="outline" size="sm" label="XL" isActive={selectedSizes === "extraLarge"} onClick={() => setSelectedSizes(selectedSizes === "extraLarge" ? null : "extraLarge")} />
                </div>
            </div>

            {/* Colors */}
            <div>
                <h3 className="font-bold text-[20px] mt-5 mb-3">Colors</h3>
                <div className="w-4/5 flex flex-wrap gap-3">
                    <Button variant="colors" color="#FF6C6C" onClick={() => setSelectedColors(selectedColors === "Coral Red" ? null : "Coral Red")} />
                    <Button variant="colors" color="#FF7629" onClick={() => setSelectedColors(selectedColors === "Tangerine" ? null : "Tangerine")} />
                    <Button variant="colors" color="#FFF06C" onClick={() => setSelectedColors(selectedColors === "Sunny Yellow" ? null : "Sunny Yellow")} />
                    <Button variant="colors" color="#9BFF6C" onClick={() => setSelectedColors(selectedColors === "Lime Green" ? null : "Lime Green")} />
                    <Button variant="colors" color="#6CFF9E" onClick={() => setSelectedColors(selectedColors === "Mint Green" ? null : "Mint Green")} />
                    <Button variant="colors" color="#6CFFDC" onClick={() => setSelectedColors(selectedColors === "Turquoise" ? null : "Turquoise")} />
                    <Button variant="colors" color="#6CB9FF" onClick={() => setSelectedColors(selectedColors === "Sky Blue" ? null : "Sky Blue")} />
                    <Button variant="colors" color="#6CF6FF" onClick={() => setSelectedColors(selectedColors === "Cyan" ? null : "Cyan")} />
                    <Button variant="colors" color="#6CA7FF" onClick={() => setSelectedColors(selectedColors === "Azure Blue" ? null : "Azure Blue")} />
                    <Button variant="colors" color="#6C7BFF" onClick={() => setSelectedColors(selectedColors === "Periwinkle Blue" ? null : "Periwinkle Blue")} />
                    <Button variant="colors" color="#8A6CFF" onClick={() => setSelectedColors(selectedColors === "Lavender" ? null : "Lavender")} />
                    <Button variant="colors" color="#B66CFF" onClick={() => setSelectedColors(selectedColors === "Amethyst" ? null : "Amethyst")} />
                    <Button variant="colors" color="#FC6CFF" onClick={() => setSelectedColors(selectedColors === "Magenta" ? null : "Magenta")} />
                    <Button variant="colors" color="#FF6CE0" onClick={() => setSelectedColors(selectedColors === "Fuchsia Pink" ? null : "Fuchsia Pink")} />
                </div>    
            </div>

            {/* Prices */}
            <div>
                <h3 className="font-bold text-[20px] mt-5 mb-3">Prices</h3>
                <div className="flex flex-col gap-2">
                <Button variant="prices" size="none" label="$0-$50" onClick={() => setSelectedPriceRange(selectPriceRange === "$0-$50" ? null : "$0-$50")} />
                <Button variant="prices" size="none" label="$50-$100" onClick={() => setSelectedPriceRange(selectPriceRange === "$50-$100" ? null : "$50-$100")} />
                <Button variant="prices" size="none" label="$100-$150" onClick={() => setSelectedPriceRange(selectPriceRange === "$100-150" ? null : "$100-150")} />
                <Button variant="prices" size="none" label="$150-$200" onClick={() => setSelectedPriceRange(selectPriceRange === "$150-$200" ? null : "$150-$200")} />
                <Button variant="prices" size="none" label="$200-$250" onClick={() => setSelectedPriceRange(selectPriceRange === "$200-$250" ? null : "$200-$250")} />
                <Button variant="prices" size="none" label="$250-$300" onClick={() => setSelectedPriceRange(selectPriceRange === "$250-$300" ? null : "$250-$300")} />
                <Button variant="prices" size="none" label="$350-$400" onClick={() => setSelectedPriceRange(selectPriceRange === "$350-$400" ? null : "$350-$400")} />
                </div>
            </div>

            {/* Brands */}
            <div>
                <h3 className="w-full font-bold text-[20px] mt-5 mb-3 flex justify-between items-center">
                    <p>Brands</p>
                    <span onClick={() => setIsBrandOpen(!isBrandOpen)} className="cursor-pointer">{isBrandOpen ? <FaChevronUp /> : <FaChevronDown /> }</span>
                </h3>
                <div className={` ${isBrandOpen ? "max-h-96" : "max-h-0"} overflow-hidden w-3/5 flex flex-wrap gap-y-3 gap-x-2 transition-all duration-1500 ease-in-out`}>
                    <Button variant="prices" size="none" label="Minimog" onClick={() => setSelectedBrands(selectBrands === "Minimog" ? null : "Minimog")} />
                    <Button variant="prices" size="none" label="Retrolie" onClick={() => setSelectedBrands(selectBrands === "Retrolie" ? null : "Retrolie")} />
                    <Button variant="prices" size="none" label="Brook" onClick={() => setSelectedBrands(selectBrands === "Brook" ? null : "Brook")} />
                    <Button variant="prices" size="none" label="Learts" onClick={() => setSelectedBrands(selectBrands === "Learts" ? null : "Learts")} />
                    <Button variant="prices" size="none" label="Vagabond" onClick={() => setSelectedBrands(selectBrands === "Vagabond" ? null : "Vagabond")} />
                    <Button variant="prices" size="none" label="Abby" onClick={() => setSelectedBrands(selectBrands === "Abby" ? null : "Abby")} />
                </div>
            </div>

            {/* Collection */}
            <div>
                <h3 className="w-full font-bold text-[20px] mt-5 mb-3 flex justify-between items-center">
                    <p>Collection</p>
                    <span onClick={() => setIsCollectionOpen(!isCollectionOpen)} className="cursor-pointer">{isCollectionOpen ? <FaChevronUp /> : <FaChevronDown /> }</span>
                </h3>
                <div className={` ${isCollectionOpen ? "max-h-96" : "max-h-0"} overflow-hidden w-4/5 flex flex-col gap-y-3 gap-x-2 transition-all duration-1500 ease-in-out`}>
                    <Button variant="prices" size="none" label="All products" onClick={() => setCollection(Collection === "All products" ? null : "All products")} />
                    <Button variant="prices" size="none" label="Best sellers" onClick={() => setCollection(Collection === "Best sellers" ? null : "Best sellers")} />
                    <Button variant="prices" size="none" label="New arrivals" onClick={() => setCollection(Collection === "New arrivals" ? null : "New arrivals")} />
                    <Button variant="prices" size="none" label="Accessories" onClick={() => setCollection(Collection === "Accessories" ? null : "Accessories")} />
                </div>
            </div>

            {/* Tags */}
            <div>
                <h3 className="font-bold text-[20px] mt-5 mb-3">Tags</h3>
                <div className="w-4/5 flex flex-wrap gap-3">
                    <Button variant="prices" size="none" label="Fashion" onClick={() => setTags(tags === "Fashion" ? null : "Fashion")} />
                    <Button variant="prices" size="none" label="Hats" onClick={() => setTags(tags === "Hats" ? null : "Hats")} />
                    <Button variant="prices" size="none" label="Sandal" onClick={() => setTags(tags === "Sandal" ? null : "Sandal")} />
                    <Button variant="prices" size="none" label="Belt" onClick={() => setTags(tags === "Belt" ? null : "Belt")} />
                    <Button variant="prices" size="none" label="Bags" onClick={() => setTags(tags === "Bags" ? null : "Bags")} />
                    <Button variant="prices" size="none" label="Snacker" onClick={() => setTags(tags === "Snacker" ? null : "Snacker")} />
                    <Button variant="prices" size="none" label="Denim" onClick={() => setTags(tags === "Denim" ? null : "Denim")} />
                    <Button variant="prices" size="none" label="Minimog" onClick={() => setTags(tags === "Minimog" ? null : "Minimog")} />
                    <Button variant="prices" size="none" label="Vagabond" onClick={() => setTags(tags === "Vagabond" ? null : "Vagabond")} />
                    <Button variant="prices" size="none" label="Sunglasses" onClick={() => setTags(tags === "Sunglasses" ? null : "Sunglasses")} />
                    <Button variant="prices" size="none" label="Beachwear" onClick={() => setTags(tags === "Beachwear" ? null : "Beachwear")} />
                </div>
            </div> 

        </div>
    )
}