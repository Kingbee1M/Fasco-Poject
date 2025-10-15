import Button from "@/UI/Button"
import Image from "next/image"

export default function Newsletter () {
    return(
        <div className="w-full h-auto flex flex-row justify-center items-center gap-5 mt-30">
                    <Image src={"/images/news1.svg"} alt="newsletter" width={150} height={150} className="w-auto hidden lg:flex" />
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-5">
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 shadow-lg py-7 px-12">
                    <h2 className="text-[32px] font-extrabold text-[var(--grey-text)] text-center">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-[var(--grey-text2)] w-4/5 text-[12px] text-center lg:text-[16px]">
                        Stay updated with the latest news, exclusive offers, and helpful tips delivered straight to your inbox. Join our newsletter and never miss an update!
                    </p>
                    <p className="text-[var(--grey-text2)]">michael@ymail.com:</p>
                    </div>
                    <Button label="Subscribe" variant="secondary"/>
                    </div>
                  <Image src={"/images/news2.svg"} alt="newsletter" width={150} height={150} className="w-auto hidden lg:flex" />
                </div>
    )
}