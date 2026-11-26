"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import logo from "@/public/images/logo.jpeg"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Deals', href: '#deals' },
  { name: 'New arrivals', href: '#arrivals' },
  { name: 'Packages', href: '#packages' },
]

// Generate a fixed set of floating particles with random offsets & durations
const floatingParticles = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 3, // 3px to 7px
  x: `${Math.random() * 100}%`,
  duration: Math.random() * 4 + 4, // 4s to 8s
  delay: Math.random() * 2,
}));

export default function Homenav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuVisible, setIsMenuVisible] = useState(true);
  const [isCancelVisible, setIsCancelVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!ismenuVisible);
    setIsCancelVisible(!isCancelVisible);
  }

  return (
    <div className="w-screen dark:bg-white h-auto flex flex-col items-start justify-between px-6 lg:px-16 py-3 md:py-2 gap-4 lg:flex-row lg:items-center fixed top-0 left-0 right-0 bg-white shadow-sm z-50 overflow-hidden">

      {/* Floating Gold Particles Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {floatingParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-accent-gold/40"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              bottom: "-10px",
            }}
            animate={{
              y: [-10, -55],
              x: [0, (particle.id % 2 === 0 ? 15 : -15)],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="w-full h-auto flex flex-row justify-between items-center lg:w-auto relative z-10">
        {/* THE WEBSITE LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="FASCO Logo"
            priority
            className="h-9 lg:h-10 w-auto object-contain"
          />
        </Link>

        {/* MENU LOGIC CONTROLS */}
        <div className="lg:hidden">
          <div className={`${ismenuVisible ? "flex" : "hidden"}`} onClick={handleMenuToggle}>
            <span className="material-symbols-outlined cursor-pointer">dehaze</span>
          </div>
          <div className={`${isCancelVisible ? "flex" : "hidden"}`} onClick={handleMenuToggle}>
            <span className="material-symbols-outlined cursor-pointer">cancel</span>
          </div>
        </div>
      </div>

      {/* RENDERING MENU */}
      <div className={`${isMenuOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"} overflow-hidden w-full flex-col justify-center items-center lg:overflow-visible lg:max-h-none lg:pb-0 lg:h-auto lg:opacity-100 lg:flex lg:flex-row lg:w-auto lg:gap-6 transition-all duration-500 ease-in-out bg-white relative z-10`}>
        
        {/* LINKS */}
        <div className="w-full h-auto flex flex-col justify-center items-start lg:flex-row gap-4 lg:gap-6 lg:items-center">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-[14px] font-medium transition-colors duration-200 hover:text-accent-gold underline-offset-4 hover:underline decoration-accent-gold text-grey-text" 
              style={{ fontFamily: 'var(--font-Poppins)' }}
            >
              {item.name}
            </Link>
          ))}

          <Link 
            href="/login" 
            className="text-[14px] font-medium transition-colors duration-200 hover:text-accent-gold underline-offset-4 hover:underline decoration-accent-gold text-grey-text" 
            style={{ fontFamily: 'var(--font-Poppins)' }}
          >
            Sign in
          </Link>

          <Link 
            href="/signup" 
            className="text-[14px] font-medium text-white bg-accent-gold hover:bg-accent-gold px-4 py-1.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5" 
            style={{ fontFamily: 'var(--font-Poppins)' }}
          >
            Sign up
          </Link>
        </div>

      </div>
    </div>
  )
}