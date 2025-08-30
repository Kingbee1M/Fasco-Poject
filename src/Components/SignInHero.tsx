import Image from "next/image"
import Link from "next/link";

export default function SignInHero() {
  return (
    <div className="w-7/10 h-auto flex flex-row items-center justify-center h-screen mt-8 gap-5">
        <Image src="/images/left.svg" alt="left Image" width={500} height={300} className="hidden lg:flex lg:w-1/3" />

        {/* Centered images   */}
        <div className="w-full h-auto flex flex-col items-center justify-center gap-7 lg:gap-6 xl:gap-9">
          <Image src="/images/top.svg" alt="center Image" width={500} height={300} className="" />
          <Image src="/images/ultimate.svg" alt="center Image" width={500} height={300} />
          <Image src="/images/SALE.svg" alt="center Image" width={500} height={300} />
          <p className="text-center text-[16px] text-[var(--grey-text)] font-[var(--font-Poppins)]">New Collection</p>
          <Link href={"/shop"} className="text-center py-3 px-6 rounded-md bg-black text-white " style={{ fontFamily: 'var(--font-Poppins)' }}>Shop now</Link>
          <Image src="/images/bottom.svg" alt="center Image" width={500} height={300} />
        </div>

        <Image src="/images/right.svg" alt="right Image" width={500} height={300} className="hidden lg:flex lg:w-1/3" />
    </div>
  );
}
