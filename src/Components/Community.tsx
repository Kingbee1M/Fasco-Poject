"use client"

import Image, { StaticImageData } from "next/image"
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import user1Img from "@/public/images/user1.svg"
import user2Img from "@/public/images/user2.svg"
import user3Img from "@/public/images/profile3.webp"

interface Comment {
  name: string
  review: string
  rating: number
  occupation: string
  image: StaticImageData
}

const comments: Comment[] = [
  {
    name: "James K",
    review:
      "The stitching, drape, and overall fit of these garments are top tier. Easily my go-to pieces on every trip.",
    rating: 5,
    occupation: "Traveler",
    image: user1Img,
  },
  {
    name: "Sarah W",
    review:
      "The best clothing purchase I've made in a long time. The fabric weight, finish, and tailored cut stand out immediately.",
    rating: 5,
    occupation: "Designer",
    image: user2Img,
  },
  {
    name: "Marcy B",
    review:
      "A wardrobe game changer! Breathable, well-cut outfits that transition cleanly from long workdays to evening plans.",
    rating: 5,
    occupation: "Developer",
    image: user3Img,
  },
]

export default function Community() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % comments.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + comments.length) % comments.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % comments.length)
  }

  return (
    <section className="flex flex-col justify-center items-center gap-6 bg-(--whiteish-bg) border-y border-accent-gold/20 py-14 lg:py-16 px-4 w-full overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">
          Community Voices
        </span>
        <h2 className="text-[28px] lg:text-[34px] font-extrabold text-grey-text font-Volkhov leading-tight">
          This is what our <span className="text-accent-gold">community</span> says
        </h2>
        <div className="w-14 h-0.5 bg-accent-gold rounded-full my-1" aria-hidden="true" />
        <p className="text-[14px] text-(--grey-text2) font-(--font-Poppins)">
          Join our community and share your thoughts!
        </p>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden relative w-full max-w-90 h-85 flex justify-center items-center overflow-hidden mt-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-full flex flex-col justify-between items-center shadow-lg bg-white border border-accent-gold/25 p-6 rounded-2xl relative"
          >
            <FaQuoteLeft
              aria-hidden="true"
              className="text-accent-gold/25 text-2xl self-start mb-1"
            />

            <div className="w-16 h-16 relative rounded-full overflow-hidden ring-2 ring-accent-gold/60 mb-3 shrink-0">
              <Image
                src={comments[current].image}
                alt={comments[current].name}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="text-center">
              <p className="font-bold text-grey-text text-base">{comments[current].name}</p>
              <p className="text-xs font-medium text-accent-gold tracking-wide">
                {comments[current].occupation}
              </p>
            </div>

            <p className="text-sm text-center mt-3 text-(--grey-text2) font-(--font-Poppins) leading-relaxed">
              &ldquo;{comments[current].review}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-1.5 mt-4 pt-3 border-t border-accent-gold/15 w-full">
              <div className="flex items-center justify-center">
                {Array.from({ length: comments[current].rating }, (_, i) => (
                  <FaStar key={i} className="text-accent-gold mx-0.5 text-sm" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] text-grey-text/80">
                <FaCheckCircle className="text-accent-gold text-xs" />
                Verified Buyer
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DESKTOP / TABLET VIEW */}
      <div className="hidden lg:flex w-full max-w-5xl py-4 justify-center items-center overflow-hidden relative mt-2">
        {/* Left & Right Soft Edge Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-(--whiteish-bg) to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-(--whiteish-bg) to-transparent z-10" />

        <motion.div
          className="flex items-stretch"
          animate={{ x: `-${(current - 1) * 320}px` }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          {comments.map((item, i) => {
            const isFocused = current === i

            return (
              <motion.div
                key={item.name}
                onClick={() => setCurrent(i)}
                className={`shrink-0 mx-4 relative bg-white rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-colors duration-300 ${
                  isFocused
                    ? "shadow-xl border border-accent-gold/50"
                    : "shadow-md border border-accent-gold/15"
                }`}
                style={{ width: 288 }}
                animate={{
                  scale: isFocused ? 1.04 : 0.94,
                  opacity: isFocused ? 1 : 0.65,
                }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <FaQuoteLeft
                      aria-hidden="true"
                      className="text-accent-gold/30 text-xl"
                    />
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-accent-gold/10 text-accent-gold">
                      {item.occupation}
                    </span>
                  </div>

                  <div className="w-16 h-16 relative rounded-full overflow-hidden ring-2 ring-accent-gold/70 mx-auto mb-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <p className="font-bold text-center text-grey-text text-base">
                    {item.name}
                  </p>

                  <p className="text-sm text-center mt-2.5 text-(--grey-text2) font-(--font-Poppins) leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1.5 mt-5 pt-3 border-t border-accent-gold/15">
                  <div className="flex justify-center">
                    {Array.from({ length: item.rating }, (_, starIdx) => (
                      <FaStar key={starIdx} className="text-accent-gold mx-0.5 text-sm" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-grey-text/80">
                    <FaCheckCircle className="text-accent-gold text-xs" />
                    Verified Buyer
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Navigation Dots & Step Controls */}
      <div className="flex items-center gap-4 mt-1">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-8 h-8 rounded-full border border-accent-gold/40 bg-white text-grey-text hover:bg-accent-gold hover:text-white transition-colors duration-300 flex items-center justify-center text-sm cursor-pointer"
        >
          &larr;
        </button>

        <div className="flex items-center gap-2.5">
          {comments.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`View review by ${item.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === i
                  ? "w-7 bg-accent-gold"
                  : "w-2.5 bg-accent-gold/30 hover:bg-accent-gold/60"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-8 h-8 rounded-full border border-accent-gold/40 bg-white text-grey-text hover:bg-accent-gold hover:text-white transition-colors duration-300 flex items-center justify-center text-sm cursor-pointer"
        >
          &rarr;
        </button>
      </div>
    </section>
  )
}