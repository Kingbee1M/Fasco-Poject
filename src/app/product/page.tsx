import Image from "next/image"
import { MdErrorOutline } from "react-icons/md";


export default function productpage() {
    return (
        <div className="w-full flex flex-col items-center gap-5 mt-40">
            <p className="text-[50px]"><MdErrorOutline /></p>
            <h1 className="w-4/5 text-[18px] md:text-[30px] text-center font-extrabold">Oops seems you came into the product page a little premature</h1>
            <p className="w-4/5 text-center">Kindly go to the shop and select you item to purchase to access the product display</p>
        </div>
    )
}