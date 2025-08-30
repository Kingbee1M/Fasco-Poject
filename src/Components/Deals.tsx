"use client"
import { useState, useEffect } from "react"

export default function Deals() {
  const [month, setMonth] = useState("");

  useEffect(() => {
    const date = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    setMonth(monthNames[date.getMonth()]);
  }, []);

  return (
    <div className="w-7/10 flex flex-col items-center justify-center h-auto lg:mt-20">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 mb-7">
        <p className="text-[26px] font-Volkhov">
          Best Deals Of {month}
        </p>
        <p className="text-[14px] text-[var(--grey-text)] font-[var(--font-Poppins)]">
          Discover our handpicked styles of the month. Trendy, comfortable, and
          made for you. Shop now and enjoy great fashion at prices that won&apos;t break the bank
        </p>
      </div>

      {/* Deal items */}
      <div></div>

      {/* View all button */}
      <div></div>
    </div>
  );
}