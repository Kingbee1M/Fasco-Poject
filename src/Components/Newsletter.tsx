"use client"

import { useState, FormEvent } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import news1Img from "@/public/images/news1.webp"
import news2Img from "@/public/images/news2.webp"

type SubmitState = "idle" | "submitting" | "success" | "error"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubmitState>("idle")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedEmail = email.trim().toLowerCase()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)

    if (!isValidEmail) {
      setStatus("error")
      setFeedback("Please enter a valid email address.")
      return
    }

    setStatus("submitting")
    setFeedback("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setFeedback(data.message || "Could not complete your subscription.")
        return
      }

      setStatus("success")
      setFeedback(data.message || "Welcome to Fasco. You are on the list!")
      setEmail("")
    } catch {
      setStatus("error")
      setFeedback("Network error. Please try again in a moment.")
    }
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="w-full h-auto flex flex-row justify-center items-center gap-4 lg:gap-8 mt-24 px-4 lg:px-10"
    >
      <Image
        src={news1Img}
        alt="Fasco editorial lookbook preview"
        width={180}
        height={240}
        className="w-auto max-h-85 object-contain hidden lg:block rounded-2xl"
      />

      <div className="w-full max-w-2xl bg-white border border-accent-gold/30 shadow-xl rounded-3xl py-9 px-6 sm:px-10 lg:px-12 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent-gold to-transparent"
        />

        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">
            Private Access
          </span>

          <h2
            id="newsletter-heading"
            className="text-[26px] sm:text-[32px] font-extrabold text-grey-text font-Volkhov leading-tight"
          >
            Subscribe to our <span className="text-accent-gold">Newsletter</span>
          </h2>

          <div className="w-14 h-0.5 bg-accent-gold rounded-full" aria-hidden="true" />

          <p className="text-(--grey-text2) max-w-lg text-[13px] sm:text-[15px] font-(--font-Poppins) leading-relaxed">
            Stay updated with the latest drops, seasonal edits, and exclusive offers delivered straight to your inbox.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== "idle") {
                  setStatus("idle")
                  setFeedback("")
                }
              }}
              placeholder="Enter your email address"
              disabled={status === "submitting"}
              className="flex-1 px-4 py-3 rounded-xl border border-grey-text/25 text-sm text-grey-text placeholder:text-grey-text/50 font-(--font-Poppins) focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/25 transition-all duration-200 disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-3 rounded-xl bg-black hover:bg-accent-gold text-white font-medium text-sm transition-colors duration-300 shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
            >
              {status === "submitting" ? "Joining..." : "Subscribe"}
            </button>
          </form>

          {/* Status Feedback */}
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.p
                key={feedback}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                role="status"
                className={`text-xs sm:text-sm font-medium mt-1 ${
                  status === "success" ? "text-accent-gold" : "text-red-500"
                }`}
              >
                {feedback}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Image
        src={news2Img}
        alt="Fasco seasonal collection preview"
        width={180}
        height={240}
        className="w-auto max-h-85 object-contain hidden lg:block rounded-2xl"
      />
    </section>
  )
}