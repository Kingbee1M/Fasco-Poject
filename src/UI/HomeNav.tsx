"use client"
import Link from "next/link"
import { useState } from "react"


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Deals', href: '#deals' },
  { name: 'New arrivals', href: '#arrivals' },
  { name: 'Packages', href: '#packages' },
]


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
    <div className="w-full h-auto flex flex-col items-start justify-between px-5 gap-4 lg:flex-row lg:items-center fixed top-0 left-0 right-0 m-auto bg-white z-50 ">

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
      <div className={`${isMenuOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"} overflow-hidden w-full flex-col justify-center items-center lg:max-h-none lg:pb-0 lg:h-auto lg:opacity-100 lg:flex lg:flex-row lg:gap-4 transition-all duration-500 ease-in-out bg-white`}>
        
        {/* lINKS */}
        <div className="w-full h-auto flex flex-col justify-center items-start lg:flex-row gap-5 lg:gap-10 lg:items-center">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]" style={{ fontFamily: 'var(--font-Poppins)' }}>
                {item.name}
              </Link>
            ))}
            <Link href="/Sign-In" className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]" style={{ fontFamily: 'var(--font-Poppins)' }}>Sign in</Link>
            <Link href="/Sign-Up" className=" text-[15px] font-medium hover:underline underline-offset-4 lg:text-[16px] text-white bg-black p-3 rounded-md" style={{ fontFamily: 'var(--font-Poppins)' }}>Sign up</Link>
        </div>

      </div>
    </div>
)
}