"use client"

import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface Comment {
  name: string
  review: string
  rating: number
  occupation: string
  image: string
}

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

export default function Community() {

    const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % comments.length)
    }, 20000)
    return () => clearInterval(interval)
  }, [])


    return (
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
    )
}