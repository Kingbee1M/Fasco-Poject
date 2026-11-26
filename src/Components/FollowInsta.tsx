import Image from "next/image"

const instagram = [
    "/images/insta1.webp",
    "/images/insta2.webp",
    "/images/insta3.webp",
    "/images/insta4.webp",
    "/images/insta5.webp",
    "/images/insta6.webp",
  ]

export default function FollowInsta() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-20 gap-4">
            <h2 className="text-[25px] font-bold">Follow Us On Instagram</h2>
            <p className="w-9/10 lg:w-1/2 text-[12px] text-center ">Hit our Instagram! Ditch the basic look and dive into our unique catalog of clothes and fashion hacks that&apos;ll instantly level up your style.<span className="hidden lg:inline"> Stop being an average Joe, become the fashion mogul you were meant to be.</span></p>
            <div className="w-full flex flex-row justify-center items-center mt-10">
                    {instagram.map((insta, idx) => (
                      <Image
                        key={idx}
                        src={insta}
                        alt="instagram image"
                        width={100}
                        height={100}
                        className="w-1/6"
                      />
                    ))}
                  </div>
        </div>
    )
}