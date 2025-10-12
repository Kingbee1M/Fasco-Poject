import Link from "next/link"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdStarOutline } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import React from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'shop', href: '/shop' },
  { name: 'Product', href: '/product' },
  { name: 'Pages', href: '/pages' },
]

const icons = [
  { name: 'search', href: '#', icon: <CiSearch /> },
  { name: 'profile', href: '#', icon: <IoPersonOutline /> },
  { name: 'wishlist', href: '#', icon: <MdStarOutline /> },
  { name: 'cart', href: '#', icon: <BsBag /> },
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


  return (
    <div className="w-full h-auto flex flex-col items-start justify-between p-5 gap-4 lg:flex-row lg:items-center fixed top-0 left-0 right-0 bg-white">

      <div className="w-full h-auto flex flex-row justify-between items-center lg:w-2/5">
        {/* THE WEBSITE LOGO */}
        <h1 className="w-auto font-Volkhov font-extrabold text-[25px] lg:text-[52px]">FASCO</h1>

          {/* MENU LOGIC CONTROLS */}
        <div className= "lg:hidden">
          <div className={`${ismenuVisible ? "flex" : "hidden"}`} onClick={handleMenuToggle}><span className="material-symbols-outlined cursor-pointer">dehaze</span></div>
          <div className={`${isCancelVisible ? "flex" : "hidden"}`} onClick={handleMenuToggle}><span className="material-symbols-outlined cursor-pointer">cancel</span></div>
        </div>

      </div>

        {/* RENDERING MENU */}
      <div className={`${isMenuOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"} overflow-hidden w-full flex-col justify-center items-center lg:max-h-none lg:pb-0 lg:h-auto lg:opacity-100 lg:justify-between lg:flex lg:flex-row lg:gap-4 transition-all duration-500 ease-in-out bg-white`}>
        
        {/* lINKS */}
        <div className="w-full h-auto flex flex-col justify-center items-center lg:w-auto lg:flex-row gap-5 lg:gap-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={` ${pathname === item.href ? "lg:underline lg:font-bold" : ""} text-[15px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)] lg:text-[25px] `} style={{ fontFamily: 'var(--font-Poppins)' }}>
                {item.name}
              </Link>
            ))}
        </div>

          {/* ICONS */}
        <div className="w-full flex justify-end items-center gap-5 lg:w-auto">
          {icons.map((icon) => (
            <Link key={icon.name} href={icon.href} className=" text-[var(--grey-text)] hover:text-black transition-all duration-300 ease-in-out">
              {React.cloneElement(icon.icon, {className: "text-xl hover:text-yellow-500 transition-all duration-300 ease-in-out",
          })}
            </Link>
          ))}
        </div>


      </div>
    </div>
)
}