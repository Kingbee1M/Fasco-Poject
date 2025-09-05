"use client"

import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Button from "./Button"

interface Comment {
  name: string
  review: string
  rating: number
  occupation: string
  image: string
}

export default function Footer() {
  const instagram = [
    "/images/insta1.svg",
    "/images/insta2.svg",
    "/images/insta3.svg",
    "/images/insta4.svg",
    "/images/insta5.svg",
    "/images/insta6.svg",
  ]

  const comments: Comment[] = [
    {
      name: "James K",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 5,
      occupation: "Traveler",
      image: "/images/user1.svg",
    },
    {
      name: "Sarah W",
      review: "The best purchase I've made in a long time. Highly recommend!",
      rating: 5,
      occupation: "Designer",
      image: "/images/user2.svg",
    },
    {
      name: "Marcy B",
      review: "A game changer! My workflow has improved dramatically.",
      rating: 5,
      occupation: "Developer",
      image: "/images/user3.svg",
    },
  ]

  const [current, setCurrent] = useState(0)

  // Auto-cycle every 5s (used for both mobile + desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % comments.length)
    }, 20000)
    return () => clearInterval(interval)
  }, [comments.length])

  return (
    <div className="w-full flex flex-col justify-center items-center gap-40">
      {/* follow on instagram */}
      <div className="w-full flex flex-row justify-center items-center">
        {instagram.map((insta, idx) => (
          <Image
            key={idx}
            src={insta}
            alt="instagram image"
            width={100}
            height={100}
            className="w-1/6"
          />
        ))}
      </div>

      {/* our Community */}
      <div className="flex flex-col justify-center items-center gap-10 bg-[var(--whiteish-bg)] py-10 w-full">
        <h2 className="text-[32px] font-extrabold text-[var(--grey-text)] text-center">
          This is what our community says
        </h2>
        <p className="text-[var(--grey-text2)]">
          Join our community and share your thoughts!
        </p>

        {/* MOBILE VIEW */}
        <div className="lg:hidden relative w-[400px] h-[300px] flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute flex flex-col justify-center items-center shadow-lg bg-white p-6 rounded-2xl"
            >
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={comments[current].image}
                  alt={comments[current].name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="font-bold">{comments[current].name}</p>
              <p className="text-sm text-center mt-2 text-gray-600">
                {comments[current].review}
              </p>
              <div className="flex items-center mt-3">
                {Array.from({ length: comments[current].rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP/TABLET VIEW */}
        <div className="hidden lg:flex w-3/4 h-[320px] justify-center items-center overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: `-${current * 280}px` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {comments.map((item, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 mx-4 relative bg-white shadow-lg rounded-xl p-6"
                style={{ width: 260 }}
                animate={{
                  scale: current === i ? 1.05 : 0.95,
                  opacity: current === i ? 1 : 0.6,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 relative mx-auto mb-3">
                    <div className="bg-[var(--dark-gray2)] w-15 h-15"></div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className=" w-15 h-15 object-cover absolute bottom-50 left-50 z-10"
                  />
                </div>
                <p className="font-bold text-center">{item.name}</p>
                <p className="text-sm text-center mt-2 text-gray-600">
                  {item.review}
                </p>
                <div className="flex justify-center mt-3">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* desktop/tablet cards ends */}

      </div>

        {/* Newsletter */}
        <div className="w-full h-auto flex flex-row justify-center items-center gap-5">
            <Image src={"/images/news1.svg"} alt="newsletter" width={150} height={150} className="w-auto hidden lg:flex" />
            <div className="w-full h-auto flex flex-col justify-center items-center gap-5">
            <div className="w-full h-auto flex flex-col justify-center items-center gap-5 shadow-lg py-7 px-12">
            <h2 className="text-[32px] font-extrabold text-[var(--grey-text)] text-center">
                Subscribe to our Newsletter
            </h2>
            <p className="text-[var(--grey-text2)] w-4/5 text-[12px] text-center lg:text-[16px]">
                Stay updated with the latest news, exclusive offers, and helpful tips delivered straight to your inbox. Join our newsletter and never miss an update!
            </p>
            <p className="text-[var(--grey-text2)]">michael@ymail.com:</p>
            </div>
            <Button label="Subscribe" variant="secondary"/>
            </div>
          <Image src={"/images/news2.svg"} alt="newsletter" width={150} height={150} className="w-auto hidden lg:flex" />
        </div>


        <div className="w-full h-auto py-10 border-t-2 border-[var(--light-gray2)] flex flex-col justify-center items-start gap-5 px-3  lg:items-center lg:gap-20">
          <div  className="w-full flex flex-col justify-center items-start gap-5 lg:flex-row lg:justify-between lg:items-center lg:w-9/10">
            <p className="text-[var(--grey-text2)] text-[17px] lg:text-[25px] font-extrabold">FASCO</p>
            <ul className="flex flex-col justify-center items-start gap-5 ml-0 lg:flex-row lg:justify-end">
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Support Center</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Invoicing</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Contract</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Careers</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Blog</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">FAQs</li>
            </ul>
          </div>
          <p className="w-full text-[var(--grey-text2)] text-[10px] text-center lg:text-[16px]">copyright &copy; 2024 Fasco. All rights reserved.</p>
        </div>

      </div>
  )
}