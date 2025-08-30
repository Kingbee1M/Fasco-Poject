"use client"
import Link from "next/link"
import { useState } from "react"





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
    <div className="w-full h-auto flex flex-col items-start justify-between px-5 gap-4 lg:flex-row lg:items-center fixed top-0 left-0 right-0 m-auto bg-white z-50">

      <div className="w-full h-auto flex flex-row justify-between items-center lg:w-2/5">
        {/* THE WEBSITE LOGO */}
        <h1 className="w-auto font-Volkhov font-extrabold text-[25px] lg:text-[52px]">FASCO</h1>

          {/* MENU LOGIC CONTROLS */}
        <div className= "lg:hidden">
          <div className={`${ismenuVisible ? "flex" : "hidden"}`} onClick={handleMenuToggle}><span className="material-symbols-outlined">dehaze</span></div>
          <div className={`${isCancelVisible ? "flex" : "hidden"}`} onClick={handleMenuToggle}><span className="material-symbols-outlined">cancel</span></div>
        </div>

      </div>

        {/* RENDERING MENU */}
      <div className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col justify-center items-center lg:flex lg:flex-row lg:gap-4 `}>
        
        {/* lINKS */}
        <div className="w-full h-auto flex flex-col justify-center items-start lg:flex-row gap-5 lg:gap-10 lg:items-center">
            <Link href="/" className="font-[var(--font-Poppins)] text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]"  style={{ fontFamily: 'var(--font-Poppins)' }}>Home</Link>
            <Link href="/shop" className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]"  style={{ fontFamily: 'var(--font-Poppins)' }}>Deals</Link>
            <Link href="/product" className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]"  style={{ fontFamily: 'var(--font-Poppins)' }}>New arrivals</Link>
            <Link href="/pages" className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]"  style={{ fontFamily: 'var(--font-Poppins)' }}>Packages</Link>
            <Link href="/pages" className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]"  style={{ fontFamily: 'var(--font-Poppins)' }}>Packages</Link>
            <Link href="/pages" className=" text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]" style={{ fontFamily: 'var(--font-Poppins)' }}>Sign in</Link>
            <Link href="/pages" className=" text-[15px] font-medium hover:underline underline-offset-4 lg:text-[16px] text-white bg-black p-3 rounded-md" style={{ fontFamily: 'var(--font-Poppins)' }}>Sign up</Link>
        </div>



      </div>
    </div>
)
}