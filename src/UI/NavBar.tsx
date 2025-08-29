import Link from "next/link"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdStarOutline } from "react-icons/md";
import { BsBag } from "react-icons/bs";




export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuVisible, setIsMenuVisible] = useState(true);
  const [isCancelVisible, setIsCancelVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuVisible(!ismenuVisible);
    setIsCancelVisible(!isCancelVisible);
  }


  return (
    <div className="w-full h-auto flex flex-col items-start justify-between p-5 gap-4 lg:flex-row lg:items-center">

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
        <div className="w-full h-auto flex flex-col justify-center items-start lg:flex-row gap-5 lg:gap-10">
            <Link href="/" className="font-sans text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]">Home</Link>
            <Link href="/shop" className="font-sans text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]">Shop</Link>
            <Link href="/product" className="font-sans text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]">Product</Link>
            <Link href="/pages" className="font-sans text-[15px] lg:text-[16px] font-medium hover:underline underline-offset-4 text-[var(--grey-text)]">Pages</Link>
        </div>

          {/* ICONS */}
        <div className="w-full flex justify-end items-center gap-5">

           <CiSearch className="text-1xl" />

          <IoPersonOutline className="text-1xl" />

          <MdStarOutline className="text-1xl" />

          <BsBag className="text-1xl" />

        </div>


      </div>
    </div>
)
}