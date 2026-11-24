"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import Image from "next/image"
import img1 from "@/public/images/option1.webp"
import img2 from "@/public/images/option2.webp"
import img3 from "@/public/images/option3.webp"

const deals = [
  { image: img1, description: "01 --- spring sale", discount: "20% off" },
  { image: img2, description: "02 --- summer sale", discount: "30% off" },
  { image: img3, description: "03 --- autumn sale", discount: "40% off" },
]

export default function Deals() {
  const [month, setMonth] = useState("")
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const date = new Date()
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    setMonth(monthNames[date.getMonth()])

    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % deals.length)
    }, 4000)

    const updateTime = () => {
      const now = new Date()
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
      const diff = endOfMonth.getTime() - now.getTime()
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    updateTime()
    const countdown = setInterval(updateTime, 1000)

    return () => {
      clearInterval(autoSlide)
      clearInterval(countdown)
    }
  }, [])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % deals.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + deals.length) % deals.length),
    trackMouse: true,
  })

  return (
    <div className="w-4/5 flex flex-col items-center justify-center h-auto mt-20 lg:mt-20 lg:hidden" id="deals">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 mb-7 text-center">
        <p className="text-[26px] font-Volkhov">
          Best Deals Of <span className="text-accent-gold">{month}</span>
        </p>
        <p className="text-[14px] text-grey-text font-(--font-Poppins)">
          Discover our handpicked styles of the month. Trendy, comfortable, and
          made for you. Shop now and enjoy great fashion at prices that won&apos;t break the bank
        </p>
      </div>

      {/* Deal items */}
      <div
        {...swipeHandlers}
        className="w-full max-w-85 sm:max-w-95 h-75 sm:h-85 relative overflow-hidden flex justify-center items-center rounded-lg"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0 w-full h-full flex flex-col items-center"
          >
            <Image
              src={deals[index].image}
              alt={deals[index].description}
              className="w-full h-full object-cover object-top rounded-lg shadow-md"
            />
            <div className="w-auto flex flex-col items-center absolute z-10 bottom-3 left-1/2 -translate-x-1/2 bg-white/95 px-4 py-2 rounded-md shadow-sm">
              <p className="text-[10px] text-center">{deals[index].description}</p>
              <p className="text-[11px] text-center font-semibold text-accent-gold">
                {deals[index].discount}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex mt-4 gap-2">
        {deals.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-accent-gold scale-110" : "bg-black/30"
            }`}
          />
        ))}
      </div>

      {/* Countdown */}
      <div className="mt-5 text-center flex flex-col items-center gap-3">
        <p className="bg-black hover:bg-accent-gold text-white px-4 py-3 rounded-lg transition-colors duration-300">
          Buy now
        </p>
        <p>Hurry up! Offer ends in:</p>
        <div className="flex flex-row items-center justify-center gap-3 mt-1">
          <p className="text-[20px] font-bold text-accent-gold">{time.days}d</p>
          <p className="text-[20px] font-bold text-accent-gold">{time.hours}h</p>
          <p className="text-[20px] font-bold text-accent-gold">{time.minutes}m</p>
          <p className="text-[20px] font-bold text-accent-gold">{time.seconds}s</p>
        </div>
      </div>
    </div>
  )
}