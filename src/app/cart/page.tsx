"use client"

import Image from "next/image"
import { useCartStore } from "@/store/useCartStore"
import { GrNext } from "react-icons/gr";
import { useState } from "react";
import Button from "@/UI/Button";
import Link from "next/link";
import Newsletter from "@/Components/Newsletter";


export default function Cart () {

    const cart = useCartStore((state) => state.cart)


    console.log("this is the cart :", cart)

    const emptyCart = useCartStore((state) => state.clearCart)
    const removeItem = useCartStore((state) => state.removeFromCart)

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    }

    const totalPrice = cart.reduce((acc, item) => {
  const cleanedPrice = Number(String(item.total).replace(/[^0-9.-]+/g, ""));
  return acc + cleanedPrice;
}, 0);
    cart.forEach((item) => console.log("Item price:", item.price));
    console.log("total price :", totalPrice)

    const calcSubtotal = () => {
        let NewTotal = totalPrice
        if (isChecked) {
        NewTotal = NewTotal + 10
        return NewTotal
        }
        else {
        return NewTotal
        }
    }


    return (
        <div className="mt-30 w-full flex flex-col items-center gap-10 mb-20">
            <div className="flex flex-col items-center gap-5 mb-10">
                <h1 className="text-[30px] font-bold">Shopping cart</h1>
                <div className="flex flex-row justify-center items-center">
                    <p>Home</p>
                    <GrNext />
                    <p>Your Shopping Cart</p>
                </div>
            </div>

            <table className="w-4/5">
                <thead className="border-b-1 border-b-[var(--light-gray4)]">
                    <tr>
                        <th className="text-left text-[13px] sm:text-[16px] pb-7 w-[40%]">Product</th>
                        <th className="text-left text-[13px] sm:text-[16px] pb-7 w-[20%]">Price</th>
                        <th className="text-right text-[13px] sm:text-[16px] pb-7 w-[20%]">Quantity</th>
                        <th className="text-right text-[13px] sm:text-[16px] pb-7 w-[20%]">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map ((item, index) => {
                        return (
                        <tr key={index}>
                            <td className="flex flex-row text-xs gap-3 py-4 border-b border-b-[var(--light-gray4)]">
                                <Image src={item.image} alt="" width={70} height={90} className="w-[50px] h-[70px] sm:w-[70px] sm:h-[90px] " />
                                <div className="w-full flex flex-col gap-1 sm:gap-2">
                                    <p className="w-full text-[9px] sm:w-4/5 sm:text-[12px] font-bold break-words">{item.title}</p>
                                    <p className="w-full text-[7px] sm:w-4/5 sm:text-[12px]">{item.color}</p>
                                    <button onClick={() => removeItem(item.id)} className="text-left text-gray-500 w-auto hover:underline cursor-pointer text-[9px] sm:text-[14px] ">Remove</button>
                                </div>
                            </td>

                            <td className=" py-4 border-b border-b-[var(--light-gray4)]">
                                <p className="text-xs sm:text-[16px] ">{item.price}</p>
                            </td>

                            <td className="text-right py-4 border-b border-b-[var(--light-gray4)]">
                                <p className="text-xs sm:text-[16px] ">{item.quantity} pieces</p>
                            </td>

                            <td className="text-right py-4 border-b border-b-[var(--light-gray4)]">
                                <p className="text-xs sm:text-[16px] ">{item.total}</p>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>

            <Button variant="secondary" label="clear cart" onClick={emptyCart} />

            <div className="sm:w-4/5 flex justify-end">
                <div className="w-full sm:w-3/5 lg:w-2/5 flex flex-col gap-1">
                  <div className="flex gap-2 border-b-1 border-[var(--light-gray4)] pb-4">
                    <input type="checkbox" checked={isChecked} onChange={handleChange} id="chech"/>
                    <label htmlFor="check">For $10.00 please wrap the product</label>
                  </div>

                  <div className="flex justify-between mt-5">
                    <p>Subtotal</p>
                    <p>${calcSubtotal()}</p>
                  </div>

                  <div className="w-full flex flex-col items-center gap-2 my-5">
                      <Link href="/checkout" className="w-4/5"><Button label="checkout" variant="secondary" size="lg" className="w-full bg-black cursor-pointer" /></Link>
                      <Link href="/cart" className="underline font-bold " >View cart</Link>
                    </div>
                </div>
            </div>

            <Newsletter />
        </div>
    )
}