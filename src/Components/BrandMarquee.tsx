"use client";

import { motion } from "framer-motion";

const brands = [
  "CHANEL",
  "LOUIS VUITTON",
  "PRADA",
  "Calvin Klein",
  "DENIM",
  "GUCCI",
  "ZARA",
  "H&M",
  "BALENCIAGA",
  "DIOR",
  "BURBERRY",
  "VERSACE",
  "FENDI",
  "SAINT LAURENT",
  "VALENTINO",
  "ARMANI",
  "GIVENCHY",
  "OFF-WHITE",
  "TOMMY HILFIGER",
  "RALPH LAUREN",
];

export default function BrandMarquee() {
  return (
    <section className="w-full py-8 lg:py-10 bg-white overflow-hidden relative border-y border-accent-gold/20 mt-7">
      {/* Subtle Top & Bottom Gold Accent Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent-gold/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent-gold/50 to-transparent pointer-events-none" />

      {/* Smooth Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center shrink-0"
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex items-center">
              <span
                className="text-base sm:text-lg lg:text-xl font-bold tracking-[0.16em] text-grey-text uppercase hover:text-accent-gold hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none px-4 lg:px-6"
              >
                {brand}
              </span>

              {/* Luxury Gold Diamond Divider */}
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rotate-45 bg-accent-gold/70 shrink-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}