"use client"

import Button from "@/UI/Button"
import { useState } from "react"
import { FaStar } from "react-icons/fa";
import Image from "next/image";

type Status = "in stock" | "Almost sold out" | "out of stock"

interface Item {
  image: string
  name: string
  designer: string
  rating: number
  reviewCount: number
  price: number
  status: Status
}

export default function Arrivals () {

    const [active, setActive] = useState("Men Fashion")

    const buttons = [
        "Men Fashion",
        "Women Fashion",
        "Men Accessories",
        "Women Accessories",
        "Discount Deals",
    ]

    const items: Item[] = [
    {
      image: "/images/arrival.svg",
      name: "Shiny Dress",
      designer: "Fashion Co.",
      rating: 5,
      reviewCount: 120,
      price: 29.99,
      status: "in stock",
    },
    {
      image: "/images/arrival1.svg",
      name: "Long Dress",
      designer: "Fashion Co.",
      rating: 4,
      reviewCount: 80,
      price: 49.99,
      status: "Almost sold out",
    },
    {
      image: "/images/arrival2.svg",
      name: "Full Sweater",
      designer: "Fashion Co.",
      rating: 5,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
    {
      image: "/images/arrival3.svg",
      name: "White Dress",
      designer: "Fashion Co.",
      rating: 3,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
    {
      image: "/images/arrival4.svg",
      name: "Colorful Dress",
      designer: "Fashion Co.",
      rating: 5,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
    {
      image: "/images/arrival5.svg",
      name: "White Shirt",
      designer: "Fashion Co.",
      rating: 3,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
  ]

    return (
        <div className="w-4/5 flex flex-col justify-center items-center gap-3 my-10" id="arrivals">
            <h1 className="text-[32px] text-[var(--grey-text)] font-extrabold">New Arrivals</h1>
            <p className="text-[14px] text-[var(--grey-text)] font-[var(--font-Poppins)] text-center lg:w-4/5">Check out our newest arrivals, from trendy clothes and stylish accessories to everyday essentials and statement pieces. Find the perfect look to refresh your wardrobe and stay ahead of the trends.</p>
            <div className="w-full flex flex-row items-center justify-center flex-wrap gap-3 mt-20">
                {buttons.map((label) => (
                <Button
                    key={label}
                    label={label}
                    onClick={() => setActive(label)}
                    isActive={active === label}
                />
                ))}
            </div>

            {/* items */}
            <div className="flex flex-wrap justify-center items-center gap-20 mt-10 mb-15">
                {items.map((item) => (
                        <div key={item.name} className="w-[250px] h-[330px] flex flex-col justify-evenly items-start gap-2 bg-white shadow-lg p-3 rounded-3xl">
                            <Image src={item.image} alt={item.name} width={250} height={250} className="w-full h-auto rounded-3xl" />
                            <div className="flex flex-col w-full gap-1">
                              <div className="flex flex-row justify-between items-center w-full">
                                  <h2>{item.name}</h2>
                                  <div className="flex items-center">
                                      {Array.from({ length: item.rating }, (_, i) => (
                                          <FaStar key={i} className="text-yellow-500 mr-1" />
                                      ))}
                                  </div>
                              </div>
                              <p className="text-[11px] text-[var(--light-grey-text)]">{item.designer}</p>
                            </div>
                            <p className="text-[12px]">({item.reviewCount}) customer Reviews</p>
                            <div className="w-full flex flex-row justify-between items-center">
                                <p>Price: ${item.price}</p>
                                <p className={` text-[14px] ${
                                    item.status === "in stock"
                                        ? "text-green-500"
                                        : item.status === "Almost sold out"
                                        ? "text-yellow-500"
                                        : "text-red-500"
                                }`}> {item.status}</p>
                            </div>
                        </div>
                    ))}
            </div>

            <Button label="View More" onClick={() => {}} variant="secondary" />
        </div>
    )
}