"use client"
import { createPortal } from "react-dom";
import Image from "next/image";
import Button from "@/UI/Button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

type dataprops = {
  id: number,
  title: string,
  image: string,
  color: string,
  size: string,
  quantity: number,
  price: string
  maxQuantity: number
  total: number
}

type Props = {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemData: dataprops
};

const CartPortal = ({setCartOpen, itemData,}: Props) => {

  const [orderCount, setOrderCount] = useState(itemData.quantity)
  const [initialValue, setInitialValue] = useState(0)
  const [isChecked, setIsChecked] = useState(false);

  const editCartItem = useCartStore((state) => state.editCartItem)
  
  const Testcombined = Number(`${initialValue}${orderCount}`);
   
    const firstMax = Math.floor(itemData.maxQuantity / 10);
    const secondMax = itemData.maxQuantity % 10    



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    editCartItem(itemData.id, { quantity: 5, price: itemData.price})

  };

  useEffect(() => {
  const a = itemData.quantity;
  if (a > 9) {
    const first = Math.floor(a / 10);
    const second = a % 10;
    setOrderCount(second);
    setInitialValue(first);
  } else {
    setOrderCount(itemData.quantity);
  }
}, [itemData.quantity]);

  const preventNegartive = () => (orderCount < 2 ? setOrderCount(1) : setOrderCount(orderCount - 1))

  const upgradeCount = () => {
    if (Testcombined === itemData.maxQuantity) {
      setOrderCount(secondMax)
      setInitialValue(firstMax)
    }
    else {
    setOrderCount(0);
    setInitialValue(initialValue + 1)
  }
  }

  const downgradeCount2  = () => {
    setOrderCount(9)
    setInitialValue(initialValue - 1)
  }

  const downgradeCount = () => (orderCount === 0 ? downgradeCount2() : setOrderCount(orderCount - 1))

  const preventmax = () => {
    if (Testcombined === itemData.maxQuantity) {
      setOrderCount(secondMax)
      setInitialValue(firstMax)
    }
    else {
    setOrderCount(orderCount + 1);
    }
  }

  const reduceCount = () => (initialValue === 0 ? preventNegartive() : downgradeCount())


  const increaseCount = () => (orderCount === 9 ? upgradeCount() : preventmax());


  const calcSubtotal = () => {
    const combined = Number(`${initialValue}${orderCount}`);
    const price = itemData.price;
    const numericPrice = Number(price.replace("$", ""));
    const total = combined * numericPrice
    if (isChecked) {
      const newTotal = total + 10
      return newTotal
    }
    else {
      return total
    }
  }



    const portalRoot = document.getElementById("portal-root");
        if (!portalRoot) return null;

    return createPortal(
        <div className="fixed inset-0 flex justify-end items-center z-50 pointer-events-none">
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/70 pointer-events-auto"
          onClick={() => setCartOpen(false)}
        ></div>

            {/* content */}
            <div className="relative flex flex-col justify-between p-5 w-[500px] h-screen bg-[var(--background)] shadow-[var(--shadow-grey)] py-4 pointer-events-auto text-[var(--grey-text)]">
                
                {/* Top div */}
                <div className="flex flex-col gap-1">
                  <h1 className="text-[25px]">Shopping Cart</h1>
                  <p>Buy $122.35 more and get free shipping</p>

                  <div className="mt-5 flex gap-3 border-b-1 border-[var(--light-gray4)] pb-4">
                    <Image src={itemData.image} alt={itemData.title} width={10} height={10} className="w-[100px] h-[150px]" />
                    <div className="mt-3 flex flex-col gap-1">
                      <p>{itemData.title}</p>
                      <p>Color: {itemData.color}</p>
                      <p>size: {itemData.size}</p>
                      <div className="w-4/5 flex flex-row justify-between items-center border border-[var(--light-gray5)] bg-[var(--bg-gar-1)] p-1">
                          <button className="w-full text-left cursor-pointer" onClick={reduceCount}>-</button>
                          <span className="w-full text-center">{initialValue}{orderCount}</span>
                          <button className="w-full text-right cursor-pointer" onClick={increaseCount}>+</button>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Bottom div */}
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 border-b-1 border-[var(--light-gray4)] pb-4">
                    <input type="checkbox" checked={isChecked} onChange={handleChange} id="chech"/>
                    <label htmlFor="check">For $10.00 please wrap the product</label>
                  </div>

                  <div className="flex justify-between mt-5">
                    <p>Subtotal</p>
                    <p>${calcSubtotal()}</p>
                  </div>

                  <div className="w-full flex flex-col items-center gap-2 my-5">
                      <Button label="checkout" variant="secondary" size="lg" className="w-4/5 bg-black cursor-pointer" />
                      <Link href="/cart" className="underline font-bold " >View cart</Link>
                    </div>
                </div>

            </div>    
        </div>
        , portalRoot
    )
}
CartPortal.displayName = "ConnectAccountComp";
export default CartPortal;