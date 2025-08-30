"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSwipeable } from "react-swipeable"

const deals = [
  { image: "/images/option1.svg", description: "01 --- spring sale", discount: "20% off" },
  { image: "/images/option2.svg", description: "02 --- summer sale", discount: "30% off" },
  { image: "/images/option3.svg", description: "03 --- autumn sale", discount: "40% off" },
]

export default function Deals() {
  const [month, setMonth] = useState("")
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [index, setIndex] = useState(0) // ✅ added state for active slide

  useEffect(() => {
    // set month
    const date = new Date()
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    setMonth(monthNames[date.getMonth()])

    // auto slide every 4 seconds
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % deals.length)
    }, 4000)

    // countdown timer
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

    // ✅ single cleanup for both intervals
    return () => {
      clearInterval(autoSlide)
      clearInterval(countdown)
    }
  }, [])

  // swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % deals.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + deals.length) % deals.length),
    trackMouse: true,
  })

  return (
    <div className="w-7/10 flex flex-col items-center justify-center h-auto mt-10 lg:mt-20">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 mb-7">
        <p className="text-[26px] font-Volkhov">Best Deals Of {month}</p>
        <p className="text-[14px] text-[var(--grey-text)] font-[var(--font-Poppins)]">
          Discover our handpicked styles of the month. Trendy, comfortable, and
          made for you. Shop now and enjoy great fashion at prices that won&apos;t break the bank
        </p>
      </div>

      {/* Deal items */}
      <div
        {...swipeHandlers}
        className="w-[400px] h-[250px] relative overflow-hidden flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-4/5 h-full flex flex-col items-center gap-5"
          >
            <img
              src={deals[index].image}
              alt={deals[index].description}
              className="w-full h-full"
            />
            <div className="w-auto flex flex-col items-center absolute z-10 bottom-3 left-21 bg-white px-3 py-6 ">
            <p className="text-[8px] text-center">{deals[index].description}</p>
            <p className="text-[8px] text-center font-semibold">
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
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-black" : "bg-black/30"
            }`}
          ></button>
        ))}
      </div>

      {/* Countdown */}
      <div className="mt-5 text-center flex flex-col items-center gap-3">
        <p className="bg-black text-white px-4 py-3 rounded-lg">Buy now</p>
        <p>Hurry up! Offer ends in:</p>
        <div className="flex flex-row items-center justify-center gap-3 mt-3">
          <p className="text-[20px] font-bold">{time.days}d</p>
          <p className="text-[20px] font-bold">{time.hours}h</p>
          <p className="text-[20px] font-bold">{time.minutes}m</p>
          <p className="text-[20px] font-bold">{time.seconds}s</p>
        </div>
      </div>
    </div>
  )
}