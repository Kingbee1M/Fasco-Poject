"use client"

import Newsletter from "@/Components/Newsletter"
import Image from "next/image"
import { useCartStore } from "@/store/useCartStore"
import Button from "@/UI/Button"

export default function Checkout () {

    const cart = useCartStore((state) => state.cart)
    const totalPrice = cart
  .reduce((acc, item) => {
    const cleanedPrice = Number(String(item.total).replace(/[^0-9.-]+/g, ""));
    return acc + cleanedPrice;
  }, 0)
  .toFixed(2);

  const Total = Number(totalPrice) + 40.00
    return (
        <div className="w-full flex flex-col items-center gap-15 mt-35 mb-20 ">
            <h1 className="w-full text-center text-[20px] sm:text-[30px] font-extrabold pb-10">FASCO Demo Checkout</h1>

            
            <div className="w-4/5 py-5 border-b-1 border-t-1 border-b-black flex flex-col lg:flex-row items-center lg:items-start justify-center gap-3">

                {/* first div */}
                <div className=" w-4/5 lg:w-2/5 py-7 flex flex-col justify-center items-start gap-5 text-[var(--grey-text2)]">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-[20px] lg:text-[25px] font-bold text-black">Contact</h2>
                        <input type="text" placeholder="Email" className="inputCheckout" />
                    </div>

                    <div className="w-full flex flex-col items-start gap-3">
                        <h2 className="text-[20px] lg:text-[25px] font-bold text-black">Delivery</h2>
                        <select className="inputCheckout">
                            <option value="">Country/region</option>
                            <option value="">Nigeria</option>
                            <option value="">Ghana</option>
                            <option value="">Niger</option>
                            <option value="">Congo</option>
                            <option value="">Benin</option>
                            <option value="">Ethiopia</option>
                        </select>
                        <div className="w-full flex gap-1">
                            <input type="text" placeholder="First Name" className="inputCheckout" />
                            <input type="text" placeholder="Last Name" className="inputCheckout" />
                        </div>
                        <input type="text" placeholder="Address" className="inputCheckout" />
                        <div className="w-full flex gap-1">
                            <input type="text" placeholder="City" className="inputCheckout" />
                            <input type="text" placeholder="Postal Code" className="inputCheckout" />
                        </div>
                        <div className="flex items-end gap-2"><input type="checkbox" /> <label className="text-[10px]">Save This Info For The Future </label></div>
                    </div>

                    <div className="w-full flex flex-col">
                        <h2 className="text-[20px] lg:text-[25px] font-bold text-black mb-2">Payment</h2>
                        <select className="inputCheckout">
                            <option value="" className="inputCheckout">Credit Card</option>
                            <option value="" className="inputCheckout">Master Card</option>
                            <option value="" className="inputCheckout">Verve Card</option>
                            <option value="" className="inputCheckout">visa Card</option>
                        </select>
                        <div className="w-full bg-[var(--gray-bg1)] flex flex-col items-center gap-5 justify-center py-6 ">
                            <div className="w-[85%] flex flex-col items-center gap-3 ">
                                <input type="text" placeholder="Card Number" className="inputCheckout" />
                                <div className="w-full flex gap-1">
                                    <input type="text" placeholder="Expiration Date" className="inputCheckout" />
                                    <input type="text" placeholder="Security Code" className="inputCheckout" />
                                </div>
                                <input type="text" placeholder="Card Holder Name" className="inputCheckout" />
                            </div>
                        <div className="w-[95%] flex items-end gap-2"><input type="checkbox"  /> <label className="text-[10px]">Save This Info For The Future </label></div>    
                        </div>
                    </div>

                    <p className=" w-full text-center text-[7px] md:text-[10px] ">Copyright © 2022 FASCO . All Rights Reseved.</p>
                </div>

                {/* cart pieces */}
                <div className="bg-[var(--gray-bg1)] w-4/5 lg:w-1/2 flex flex-col items-center gap-5 py-5">
                    <div className="w-7/10 flex flex-col gap-3 mt-10">
                        {cart.map ((item) => (
                            <div key={item.id} className="w-full flex flex-row justify-between items-center">
                                <div className="relative">
                                <Image src={item.image} alt={item.title} width={100} height={120} className="w-[30px] h-[50px] lg:w-[100px] lg:h-[120px] " />
                                <div className="bg-red-500 w-3 h-3 lg:w-5 lg:h-5 absolute top-0 right-0 text-white rounded-full text-[9px] lg:text-[12px] flex justify-center text-center">{item.quantity}</div>
                                </div>

                                <div>
                                    <p className="text-[12px] lg:text-[17px] ">{item.title}</p>
                                    <p>{item.color}</p>
                                </div>

                                <div>
                                    <p>${item.total}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                        <div className="w-7/10 flex items-center gap-4">
                            <input type="text" placeholder="Discount Code" className="w-full text-[8px] sm:text-[16px] bg-white text-[var(--grey-text2)] h-12 outline-0 px-3 " />
                            <Button variant="secondary" label="Apply" className="bg-black" />
                        </div>

                        <div className="w-7/10 flex flex-col gap-6">
                            <div className="w-fulll flex justify-between">
                                <p>Subtotal</p>
                                <p>${totalPrice}</p>
                            </div>


                            <div className="w-fulll flex justify-between">
                                <p>Shipping</p>
                                <p>$40.00</p>
                            </div>

                            <div className="w-fulll flex justify-between">
                                <p>Total</p>
                                <p>${Total}.00</p>
                            </div>


                        </div>
                    
                </div>

            </div>

            <Newsletter />
        </div>
    )
}