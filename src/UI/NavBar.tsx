"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdStarOutline } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import React from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import logo from "@/public/images/logo.jpeg"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'shop', href: '/shop' },
  { name: 'Product', href: '/product' },
  { name: 'Pages', href: '/pages' },
]

const icons = [
  { name: 'search', href: '#', icon: <CiSearch /> },
  { name: 'profile', href: '#', icon: <IoPersonOutline /> },
  { name: 'wishlist', href: '/cart', icon: <MdStarOutline /> },
]

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuVisible, setIsMenuVisible] = useState(true);
  const [isCancelVisible, setIsCancelVisible] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!ismenuVisible);
    setIsCancelVisible(!isCancelVisible);
  }

  const cart = useCartStore((state => state.cart))
  const cartnumber = cart.length

  return (
    <div className="w-screen h-auto flex flex-col items-start justify-between px-6 lg:px-16 py-3 md:py-2 gap-4 lg:flex-row lg:items-center fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">

      <div className="w-full h-auto flex flex-row justify-between items-center lg:w-auto">
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
      <div className={`${isMenuOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"} overflow-hidden w-full flex-col justify-center items-center lg:overflow-visible lg:max-h-none lg:pb-0 lg:h-auto lg:opacity-100 lg:flex lg:flex-row lg:w-auto lg:gap-6 transition-all duration-500 ease-in-out bg-white`}>
        
        {/* LINKS */}
        <div className="w-full h-auto flex flex-col justify-center items-center lg:w-auto lg:flex-row gap-4 lg:gap-6">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`text-[14px] font-medium transition-colors duration-200 hover:text-accent-gold underline-offset-4 hover:underline decoration-accent-gold text-grey-text lg:text-[14px] ${
                    isActive ? "lg:underline lg:font-bold lg:text-accent-gold decoration-accent-gold" : ""
                  }`} 
                  style={{ fontFamily: 'var(--font-Poppins)' }}
                >
                  {item.name}
                </Link>
              );
            })}
        </div>

          {/* ICONS */}
        <div className="w-full flex justify-center lg:justify-end items-center gap-5 lg:w-auto mt-2 lg:mt-0">
          {icons.map((icon) => (
            <Link key={icon.name} href={icon.href} className="text-grey-text hover:text-accent-gold transition-all duration-300 ease-in-out">
              {React.cloneElement(icon.icon, {className: "text-xl transition-all duration-300 ease-in-out"})}
            </Link>
          ))}
          <div className="relative">
            <Link href="/cart" className="text-grey-text hover:text-accent-gold transition-all duration-300 ease-in-out">
              <BsBag className="text-xl transition-all duration-300 ease-in-out" />
            </Link>
            {cartnumber > 0 && (
              <div className="text-white text-center text-[10px] bg-accent-gold w-4 h-4 absolute rounded-full -bottom-1 -right-2 flex items-center justify-center p-2 font-bold shadow-sm">
                {cartnumber}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}