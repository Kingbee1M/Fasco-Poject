

import Image from "next/image"
import { FaStar } from "react-icons/fa";

interface comments {
    name: string;
    review: string;
    rating: number;
    occupation: string;
    image: string;
}

export default function Footer() {

    const instagram= [
        "/images/insta1.svg",
        "/images/insta2.svg",
        "/images/insta3.svg",
        "/images/insta4.svg",
        "/images/insta5.svg",
        "/images/insta6.svg",
    ]

    const comments = [
        {
            name: "James K",
            review: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            rating: 5,
            occupation: "Traveler",
            image: "/images/user1.svg"
        },
        {
            name: "Sarah W",
            review: "The best purchase I've made in a long time. Highly recommend!",
            rating: 5,
            occupation: "Designer",
            image: "/images/user2.svg"
        },
        {
            name: "Marcy B",
            review: "A game changer! My workflow has improved dramatically.",
            rating: 5,
            occupation: "Developer",
            image: "/images/user3.svg"
        }
    ]

    return (
        <div className="w-full flex flex-col justify-center items-center gap-40">

            {/* follow on instagram */}
            <div className="flex flex-row justify-center items-center">
                {instagram.map((insta, idx) =>
                <Image key={idx} src={insta} alt="instagram image" width={100} height={100} className="full" />
                )}    
            </div>


            {/* our Community */}
            <div className="flex flex-col justify-center items-center bg-[var(--whiteish-bg)] ">
                <h2 className="text-[32px font-extrabold] text-[var(--grey-text)] ">This is what our community says</h2>
                <p className="text-[var(--grey-text2)]">Join our community and share your thoughts!</p>

                {/* cards begins here */}
                <div className="flex flex-col justify-center items-center shadow-lg gap-3">
                    {comments.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center w-[400px] h-[300px] ">
                            <div className="w-2/5 relative">
                                <div className="bg-[var(--dark-gray2)] w-4/5"></div>
                                <Image src={item.image} alt={item.name} width={50} height={50} className="w-full" />
                            </div>
                            <p>{item.name}</p>
                            <p>{item.review}</p>
                            <div className="flex items-center">
                                {Array.from({ length: item.rating }, (_, i) => (
                                    <FaStar key={i} className="text-yellow-500 mr-1" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Newsletter */}

        </div>
    )
}