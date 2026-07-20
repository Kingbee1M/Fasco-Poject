"use client";
import Image from "next/image";
import { use } from "react";
import { useState } from "react";
import { MdStarOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import Button from "@/UI/Button";
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { GiShipBow } from "react-icons/gi";
import CartPortal from "@/Components/CartPortal"
import { useCartStore } from "@/store/useCartStore";



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


const colorName: Record<string, string> = {
 "Coral Red": "#FF6C6C",     
  "Tangerine": "#FF7629",   
  "Sunny Yellow": "#FFF06C",
  "Lime Green": "#9BFF6C",
  "Mint Green": "#6CFF9E",
  "Turquoise": "#6CFFDC",    
  "Sky Blue": "#6CB9FF",      
  "Cyan": "#6CF6FF",          
  "Azure Blue": "#6CA7FF", 
  "Periwinkle Blue": "#6C7BFF",
  "Lavender": "#8A6CFF",      
  "Amethyst": "#B66CFF",      
  "Magenta": "#FC6CFF",       
  "Fuchsia Pink": "#FF6CE0",
};


export default function ProductPage({params,}: {params: Promise<{ slug: string }>;}) {
    const { slug } = use(params);

    const product = items.find(
    (item) => item.title.replace(/\s+/g, "-") === decodeURIComponent(slug))!;

    const [currentItem, setCurrentItem] = useState(product.imageUrl);
    const [currentsize, setCurrentsize] = useState(product.size[1]);
    const [currentColor, setCurrentColor] = useState(product.color[1]);
    const [cartOpen, setCartOpen] = useState(false);
    const [orderCount, setOrderCount] = useState(1);

    
    const addToCart = useCartStore((state) => state.addToCart);
    const cart = useCartStore((state) => state.cart)


    if (!product) return <div>Product not found</div>;
        
        const reduceCount = () => (orderCount < 2 ? setOrderCount(1) : setOrderCount(orderCount - 1))

        const addCount = () => (orderCount === product.quantity ? setOrderCount(product.quantity) : setOrderCount(orderCount + 1))

        const worth = Number(product.price.replace("$", ""));
        const totalCost = orderCount*worth
        console.log("total worth: ", totalCost)

        const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Check out this product!",
        text: "I found this awesome item you might like.",
        url: window.location.href,
      });
      console.log("Shared successfully!");
    } catch (err) {
      console.error("Share canceled or failed:", err);
    }
  } else {
    alert("Sharing is not supported in this browser.");
  }
};

    const order = {
      id: product.id,
      title: product.title,
      image: product.imageUrl,
      color: currentColor,
      size: currentsize,
      quantity: orderCount,
      price: product.price,
      maxQuantity: product.quantity,
      total: totalCost
    }

    const Isadded = cart.some((item) => item.id === product.id);


    const activateAddBtn = () => {
      addToCart({
      id: product.id,
      title: product.title,
      image: product.imageUrl,
      color: currentColor,
      size: currentsize,
      quantity: orderCount,
      price: product.price,
      maxQuantity: product.quantity,
      total: totalCost,
        })

      setCartOpen(true)
    }

    return (
        <div className="w-full overflow-x-hidden flex flex-col sm:flex-row items-center sm:justify-center sm:items-start gap-5 lg:gap-10 mt-35 mb-20 dark:bg-white dark:text-black">

            {/* Images */}
            <div className="w-fit overflow-x-hidden lg:w-auto flex flex-col-reverse md:flex-row gap-2 items-center sm:items-start justify-center">

                <div className="flex flex-row md:flex-col gap-2 mt-3 md:mt-0">
                    <Image src={product.imageUrl} alt="image" width={35} height={35} onClick={() => setCurrentItem(product.imageUrl)} className={`cursor-pointer ${product.imageUrl === currentItem ? "border-2 border-black" : ""} w-[27px] h-[27px] lg:w-[35px] lg:h-[35px] `} />
                    {product.Variety.map ((verify, index) => (
                        <Image key={index} src={verify} alt="image" width={35} height={35} onClick={() => setCurrentItem(verify)} className={`cursor-pointer hover:border ${verify === currentItem ? "border-2 border-black" :  ""} w-[27px] h-[27px] lg:w-[35px] lg:h-[35px] `} />
                    ))}
                </div>

                <Image
                src={currentItem}
                alt={product.title}
                width={400}
                height={400}
                className="w-[300px] h-[400px] sm:w-full"
            />
            </div>
            
            <div className="w-4/5 sm:w-[30%] flex flex-col gap-3">
                <p className="w-full text-[var(--light-gray4)] ">Fasco</p>
                <div className="w-full flex flex-row justify-between">
                    <h1 className="text-[16px] lg:text-[25px] ">{product.title}</h1>
                    <p><MdStarOutline /></p>
                </div>
                <div className="flex flex-row items-center">
                {Array.from({ length: 5 }).map((_, index) =>
                    index < product.rating ? (
                        <IoStar key={index} className="text-black text-[16px]" />
                    ) : (
                        <IoIosStarOutline key={index} className="text-black text-[18px]" />
                    )
                    )}
                    <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                </div>
                <p className="text-[12px]">{product.price}</p>
                <p className="flex flex-row items-center gap-2 text-[var(--grey-text2)] text:[7px] sm:text-[7px] md:text-[9px] "><FaEye /> 24 people are viewing this post right now</p>
                <p className="sm:text-[10px] lg:text-[14px]">Hurry only {product.quantity} items(s) left in stock!</p>
                <div className="w-full h-1 bg-[var(--progress-bar)] rounded-full">
                    <div className={` rounded-full h-1 ${product.quantity < 6 ? "bg-red-600 w-[5%]" : product.quantity < 15 ? "bg-yellow-300 w-3/5" : "bg-green-500 w-full" }`}></div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Size: {currentsize}</p>
                    <div className="flex flex-row gap-2">
                        {product.size.map ((sizes, index) => (
                            <Button key={index} variant="outline" label={sizes} size="sm" onClick={() => setCurrentsize(sizes)} className={`${currentsize === sizes ? "bg-black text-white" : ""}`} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Size: {currentColor}</p>
                    <div className="flex flex-row items-center gap-2">
                        {product.color.map ((colors, index) => (
                            <div key={index} className={`w-fit h-fit p-0.5 flex items-center rounded-full ${currentColor === colors ? "border-1 border-black" : ""}`}><div key={index} onClick={() => setCurrentColor(colors)} className={`${currentColor === colors ? "w-4 h-4" : "w-5 h-5"} cursor-pointer  rounded-full`} style={{ backgroundColor: colorName[colors] }} /></div>
                        ))}
                    </div>
                </div>
                <div className="w-full flex flex-row items-center gap-5">
                    <div className="w-1/3 flex flex-row justify-between items-center border border-[var(--light-gray5)] p-1">
                        <button className="w-full text-left cursor-pointer" onClick={reduceCount}>-</button>
                        <span className="w-full text-center">{orderCount}</span>
                        <button className="w-full text-right cursor-pointer" onClick={addCount}>+</button>
                    </div>

                    <Button variant="secondary" label={Isadded ? "Already in cart" : product.quantity === 0 ? "SOLD OUT" : "add to cart"} onClick={activateAddBtn} disabled={Isadded || product.quantity === 0} />

                        {cartOpen && (
                          <CartPortal setCartOpen={setCartOpen} itemData={order} />
                        )}

                </div>

                <div className="w-full lg:w-4/5 mt-5 flex lg:flex-nowrap lg:flex-row sm:flex-wrap flex-row  justify-between md:justify-start items-end gap-4 border-b-3 border-b-[var(--light-gray5))] pb-5 px-2 text-[15px] md:text-[12px]">
                    <Button variant="prices" leftIcon={<MdOutlineCompareArrows />} label=" Compare" size="sm" className="flex flex-row items-center gap-1 cursor-pointer w-auto !px-0 py-0 hover:bg-white text-black hover:!text-black" />
                    <Button variant="prices" leftIcon={<FaShareAlt />} label="Share" size="sm" className="flex flex-row items-center gap-1 cursor-pointer w-auto !px-0 py-0 hover:bg-white text-black hover:!text-black" onClick={handleShare} />
                    <Button variant="prices" leftIcon={<AiOutlineQuestionCircle />} label="Compare" size="sm" className="flex flex-row items-center gap-1 cursor-pointer w-auto !px-0 py-0 hover:bg-white text-black hover:!text-black" />
                </div>

                <div className="flex flex-col text-[10px]">
                  <p className="w-full flex flex-row justify-start items-center gap-2 mt-2"><GrDeliver/> <span className="font-bold">Estimated Delivery:</span><span>Jul 30 - Aug 03</span></p>
                  <p className="w-full flex flex-row justify-start items-baseline gap-2 mt-2"><GiShipBow/> <span className="font-bold text-[8px]">Free Shipping & Returns:</span><span>On all orders over $75</span></p>
                </div>

                <div className="flex flex-col items-center">
                  <Image src="/images/trustbag.png.svg" alt="cards" width={10} height={10} className="w-4/5 mt-15" />
                  <p className="font-bold text-[10px]">Guarantee safe & secure checkout</p>
                </div>

            </div>
        </div>
    );
    }