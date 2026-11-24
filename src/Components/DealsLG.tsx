"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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

export default function DealsLG() {
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
    <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-start w-4/5 h-auto my-10">
      {/* Text half */}
      <div className="w-1/2 flex flex-col items-start justify-center gap-3">
        <p className="text-[40px] font-Volkhov font-extrabold">
          Best Deals Of <span className="text-accent-gold">{month}</span>
        </p>
        <p
          className="w-4/5 text-[14px] font-(--font-Poppins)"
          style={{ color: "var(--grey-text)" }}
        >
          Discover our handpicked styles of the month. Trendy, comfortable, and
          made for you. Shop now and enjoy great fashion at prices that won&apos;t break the bank
        </p>
        <p className="w-auto bg-black hover:bg-accent-gold text-white px-4 py-3 rounded-lg transition-colors duration-300 cursor-pointer">
          Buy now
        </p>
        <p className="text-[24px]">Hurry up! Offer ends in:</p>
        <div className="flex flex-row items-center justify-center gap-3">
          <p className="text-[24px] font-bold text-accent-gold">{time.days}d</p>
          <p className="text-[24px] font-bold text-accent-gold">{time.hours}h</p>
          <p className="text-[24px] font-bold text-accent-gold">{time.minutes}m</p>
          <p className="text-[24px] font-bold text-accent-gold">{time.seconds}s</p>
        </div>
      </div>

      {/* Image half */}
      <div className="w-1/2 flex flex-col items-center">
        <div
          {...swipeHandlers}
          className="w-full h-75 flex overflow-hidden relative"
        >
          <motion.div
            className="flex"
            animate={{ x: `-${index * 250}px` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {deals.map((deal, i) => (
              <motion.div
                key={i}
                className="shrink-0 mx-2 relative"
                style={{ width: 250 }}
                animate={{
                  scale: index === i ? 1.1 : 0.9,
                  opacity: index === i ? 1 : 0.6,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={deal.image}
                  alt={deal.description}
                  width={250}
                  height={300}
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                />
                {/* overlay description */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-md text-xs text-center">
                  <p>{deal.description}</p>
                  <p className="font-semibold text-accent-gold">{deal.discount}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex mt-4 gap-3">
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
      </div>
    </div>
  )
}