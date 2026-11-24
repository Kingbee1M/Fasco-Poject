"use client"

import Button from "@/UI/Button"
import { useState } from "react"
import { FaStar } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import arrivalImg from "@/public/images/arrival.svg"
import arrival1Img from "@/public/images/arrival1.svg"
import arrival2Img from "@/public/images/arrival2.svg"
import arrival3Img from "@/public/images/arrival3.svg"
import arrival4Img from "@/public/images/arrival4.svg"
import arrival5Img from "@/public/images/arrival5.svg"

type Status = "in stock" | "Almost sold out" | "out of stock"

interface Item {
  image: StaticImageData
  name: string
  designer: string
  rating: number
  reviewCount: number
  price: number
  status: Status
}

export default function Arrivals() {
  const [active, setActive] = useState("Men Fashion")
  const [hovered, setHovered] = useState<string | null>(null)

  const buttons = [
    "Men Fashion",
    "Women Fashion",
    "Men Accessories",
    "Women Accessories",
    "Discount Deals",
  ]

  const items: Item[] = [
    {
      image: arrivalImg,
      name: "Shiny Dress",
      designer: "Fashion Co.",
      rating: 5,
      reviewCount: 120,
      price: 29.99,
      status: "in stock",
    },
    {
      image: arrival1Img,
      name: "Long Dress",
      designer: "Fashion Co.",
      rating: 4,
      reviewCount: 80,
      price: 49.99,
      status: "Almost sold out",
    },
    {
      image: arrival2Img,
      name: "Full Sweater",
      designer: "Fashion Co.",
      rating: 5,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
    {
      image: arrival3Img,
      name: "White Dress",
      designer: "Fashion Co.",
      rating: 3,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
    {
      image: arrival4Img,
      name: "Colorful Dress",
      designer: "Fashion Co.",
      rating: 5,
      reviewCount: 200,
      price: 89.99,
      status: "out of stock",
    },
    {
      image: arrival5Img,
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
      <h1 className="text-[32px] text-grey-text font-extrabold">
        New <span className="text-accent-gold">Arrivals</span>
      </h1>
      <div className="w-14 h-0.5 bg-accent-gold rounded-full mb-1" aria-hidden="true" />
      <p className="text-[14px] text-grey-text font-(--font-Poppins) text-center lg:w-4/5">
        Check out our newest arrivals, from trendy clothes and stylish accessories to everyday essentials and statement pieces. Find the perfect look to refresh your wardrobe and stay ahead of the trends.
      </p>

      {/* Bottom-lit selector tabs with smooth fade in/out */}
      <div
        className="w-full flex flex-row items-center justify-center flex-wrap gap-6 lg:gap-8 mt-20"
        style={{ fontFamily: "var(--font-Poppins)" }}
      >
        {buttons.map((label) => {
          const isHighlighted = active === label || hovered === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setActive(label)}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-3 pt-3 pb-2 text-[14px] font-medium text-black cursor-pointer focus:outline-none"
            >
              {/* Fading gold bottom border */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-accent-gold transition-opacity duration-500 ease-in-out ${
                  isHighlighted ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Fading upward gold light beam rising from the bottom border */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-accent-gold/30 via-accent-gold/10 to-transparent transition-opacity duration-500 ease-in-out ${
                  isHighlighted ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Base label */}
              <span className="relative z-10">{label}</span>

              {/* Fading lower-half gold light reflection on the text */}
              <span
                aria-hidden="true"
                style={{ clipPath: "inset(45% 0% 0% 0%)" }}
                className={`pointer-events-none select-none absolute inset-x-0 top-3 px-3 z-20 text-accent-gold transition-opacity duration-500 ease-in-out ${
                  isHighlighted ? "opacity-100" : "opacity-0"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* items */}
      <div className="flex flex-wrap justify-center items-center gap-20 mt-10 mb-15">
        {items.map((item) => (
          <div
            key={item.name}
            className="w-62.5 h-82.5 flex flex-col justify-evenly items-start gap-2 bg-white shadow-lg hover:shadow-xl border border-transparent hover:border-accent-gold/50 transition-all duration-300 p-3 rounded-3xl"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className="w-full h-auto rounded-3xl"
            />
            <div className="flex flex-col w-full gap-1">
              <div className="flex flex-row justify-between items-center w-full">
                <h2 className="font-semibold text-grey-text">{item.name}</h2>
                <div className="flex items-center">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <FaStar key={i} className="text-accent-gold mr-1 text-xs" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-(--light-grey-text)">{item.designer}</p>
            </div>
            <p className="text-[12px]">
              <span className="text-accent-gold font-semibold">({item.reviewCount})</span> customer Reviews
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <p className="font-semibold">
                Price: <span className="text-accent-gold">${item.price}</span>
              </p>
              <p
                className={`text-[14px] font-medium ${
                  item.status === "in stock"
                    ? "text-green-500"
                    : item.status === "Almost sold out"
                    ? "text-accent-gold"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button label="View More" onClick={() => {}} variant="secondary" />
    </div>
  )
}