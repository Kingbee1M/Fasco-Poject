"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

// Bento images: swap any of these paths later.
// (Reusing current images for now, each tile has its own import.)
import bento1 from "@/public/images/women1.jpeg";
import bento2 from "@/public/images/left.webp";
import bento3 from "@/public/images/right.webp";
import bento4 from "@/public/images/bottom.webp";

// Grid is 8 columns x 6 rows. Tiles are placed in order (left to right,
// top to bottom) and the spans below fill the grid with no gaps.
// If you add/remove/resize tiles, re-check that the total area is 48 cells.
const bento5 =
  "https://plus.unsplash.com/premium_photo-1729523163169-7b4c521615c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento6 =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento7 =
  "https://media.istockphoto.com/id/1352758200/photo/beautiful-curly-hair-woman-has-fun-positive-woman-with-curly-pink-hair-in-magenta-hoodie.webp?s=1024x1024&w=is&k=20&c=tHx3_oeENwElHYBUvBaFKPBMdahKzlwb3MRBIcDh85M=";
const bento8 =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento9 =
  "https://images.unsplash.com/photo-1772757844633-0f1e20b8a199?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento10 =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento11 =
  "https://plus.unsplash.com/premium_photo-1695575576052-7c271876b075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento12 =
  "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento13 =
  "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento14 =
  "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento15 =
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const bento16 =
  "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

const bentoTiles = [
  { src: bento1, alt: "Bento image 1", span: "col-span-2 row-span-3", col: 1 },
  { src: bento2, alt: "Bento image 2", span: "col-span-1 row-span-2", col: 3 },
  { src: bento3, alt: "Bento image 3", span: "col-span-2 row-span-2", col: 4 },
  { src: bento4, alt: "Bento image 4", span: "col-span-1 row-span-1", col: 6 },
  { src: bento5, alt: "Bento image 5", span: "col-span-2 row-span-3", col: 7 },
  { src: bento6, alt: "Bento image 6", span: "col-span-1 row-span-2", col: 6 },
  { src: bento7, alt: "Bento image 7", span: "col-span-1 row-span-1", col: 3 },
  { src: bento8, alt: "Bento image 8", span: "col-span-2 row-span-1", col: 4 },
  { src: bento9, alt: "Bento image 9", span: "col-span-1 row-span-3", col: 1 },
  { src: bento10, alt: "Bento image 10", span: "col-span-2 row-span-2", col: 2 },
  { src: bento11, alt: "Bento image 11", span: "col-span-1 row-span-2", col: 4 },
  { src: bento12, alt: "Bento image 12", span: "col-span-2 row-span-1", col: 5 },
  { src: bento13, alt: "Bento image 13", span: "col-span-2 row-span-3", col: 7 },
  { src: bento14, alt: "Bento image 14", span: "col-span-2 row-span-2", col: 5 },
  { src: bento15, alt: "Bento image 15", span: "col-span-1 row-span-1", col: 2 },
  { src: bento16, alt: "Bento image 16", span: "col-span-2 row-span-1", col: 3 },
];

const GOLD = "212,175,55"; // #D4AF37 as rgb, keep in sync with accent-gold

// Column/row sizes (in fr) for the shifting grid. Everything at 1 = even grid.
const COL_COUNT = 8;
const ROW_COUNT = 6;
const evenTracks = (n) => Array(n).fill(1);

// Pick a couple of random tracks and make them fat or skinny.
function shiftTracks(n: number, sizes: number[]): number[] {
  const next = evenTracks(n);
  const picks = new Set<number>();
  while (picks.size < 2) picks.add(Math.floor(Math.random() * n));
  picks.forEach((idx) => {
    next[idx] = sizes[Math.floor(Math.random() * sizes.length)];
  });
  return next;
}

const toTemplate = (tracks: any[]) =>
  tracks.map((t) => `minmax(0, ${t}fr)`).join(" ");

export default function SignInHero() {
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [colTracks, setColTracks] = useState(evenTracks(COL_COUNT));
  const [rowTracks, setRowTracks] = useState(evenTracks(ROW_COUNT));
  const reduceMotion = useReducedMotion();

  // Living grid: every few seconds some columns/rows swell or shrink.
  // It gets more restless while the Shop now button is hovered.
  useEffect(() => {
    if (reduceMotion) return;
    const tick = () => {
      setColTracks(shiftTracks(COL_COUNT, [0.45, 0.6, 1.8, 2.3]));
      setRowTracks(shiftTracks(ROW_COUNT, [0.5, 0.65, 1.6, 2]));
    };
    const first = setTimeout(tick, 1500);
    const id = setInterval(tick, isShopHovered ? 1400 : 2800);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [isShopHovered, reduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-160 sm:h-180 lg:h-200 lg:mt-10 overflow-hidden"
      id="hero"
    >
      {/* Gold light that spills out of the hero text into the gaps between tiles.
          It sits behind the grid, so only the gaps (and tile glows) show it. */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{
          clipPath: isShopHovered
            ? "circle(150% at 80% 50%)"
            : "circle(0% at 80% 50%)",
        }}
        transition={{
          duration: isShopHovered ? 1.1 : 0.6,
          ease: "easeInOut",
          delay: isShopHovered ? 0.35 : 0,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #B8942A 0%, #F6E27A 25%, #D4AF37 50%, #F6E27A 75%, #B8942A 100%)",
            backgroundSize: "250% 100%",
          }}
          animate={
            isShopHovered
              ? { backgroundPosition: ["0% 50%", "250% 50%"] }
              : { backgroundPosition: "0% 50%" }
          }
          transition={
            isShopHovered
              ? { duration: 2.5, ease: "linear", repeat: Infinity }
              : { duration: 0 }
          }
        />
      </motion.div>

      {/* Background: full-cover grayscale bento grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 },
          },
        }}
        className="absolute inset-0 z-1 grid gap-2 lg:gap-3 p-2 lg:p-3"
        style={{
          gridTemplateColumns: toTemplate(colTracks),
          gridTemplateRows: toTemplate(rowTracks),
          transition:
            "grid-template-columns 1.6s cubic-bezier(0.65, 0, 0.35, 1), grid-template-rows 1.6s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        {bentoTiles.map((tile, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className={`relative overflow-hidden rounded-md ${tile.span}`}
            style={{
              // Gold edge glow that ripples in from the right (where the card is)
              boxShadow: isShopHovered
                ? `0 0 0 2px rgba(${GOLD},0.95), 0 0 24px 4px rgba(${GOLD},0.6)`
                : `0 0 0 0 rgba(${GOLD},0), 0 0 0 0 rgba(${GOLD},0)`,
              transition: "box-shadow 0.6s ease-out",
              transitionDelay: isShopHovered
                ? `${0.3 + Math.abs(7 - tile.col) * 0.09}s`
                : "0s",
            }}
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 80vw"
              className="object-cover grayscale"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Foreground: text on a plain card, pinned to the right */}
      <div className="relative z-10 h-full w-full flex items-center justify-center lg:justify-end lg:pr-[6%] pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.5,
                staggerChildren: 0.15,
                delayChildren: 0.7,
              },
            },
          }}
          style={{
  backgroundColor: isShopHovered
    ? "rgba(212,175,55,0.4)"   // gold blur on hover
    : "rgba(255,255,255,0.55)", // white blur at rest
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  boxShadow: isShopHovered
    ? `0 0 90px 12px rgba(${GOLD},0.5), 0 25px 50px -12px rgba(0,0,0,0.25)`
    : "0 25px 50px -12px rgba(0,0,0,0.25)",
  transition: `background-color 0.9s ease-in-out ${
    isShopHovered ? "0.35s" : "0s"
  }, box-shadow 0.7s ease-out`,
}}
className="pointer-events-auto w-[92%] sm:w-auto rounded-xl px-4 py-5 sm:px-8 sm:py-7 xl:px-10 xl:py-8 flex flex-col items-center justify-center gap-3 xl:gap-4"
        >
          {/* ULTIMATE Text (Stage 4 of Gold Rise) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="relative select-none leading-none"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {/* Base Charcoal Layer */}
            <h2 className="text-[40px] sm:text-[64px] xl:text-[82px] font-medium tracking-tight text-grey-text uppercase leading-none">
              ULTIMATE
            </h2>

            {/* Rising Gold Fill Layer */}
            <motion.h2
              aria-hidden="true"
              initial={false}
              animate={{
                clipPath: isShopHovered
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(100% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
                delay: isShopHovered ? 0.6 : 0,
              }}
              className="text-[40px] sm:text-[64px] xl:text-[82px] font-medium tracking-tight text-accent-gold uppercase leading-none absolute inset-0 pointer-events-none"
            >
              ULTIMATE
            </motion.h2>
          </motion.div>

          {/* SALE Hollow Outline Text (Stage 3 of Gold Rise) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="relative select-none leading-none -mt-2"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {/* Base Hollow Outlined Text */}
            <h2
              className="text-[72px] sm:text-[115px] xl:text-[148px] font-bold tracking-tight text-transparent uppercase leading-[0.85]"
              style={{
                WebkitTextStroke: "1.5px #484848",
              }}
            >
              SALE
            </h2>

            {/* Rising Gold Liquid Fill Layer */}
            <motion.h2
              aria-hidden="true"
              initial={false}
              animate={{
                clipPath: isShopHovered
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(100% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
                delay: isShopHovered ? 0.4 : 0.2,
              }}
              className="text-[72px] sm:text-[115px] xl:text-[148px] font-bold tracking-tight text-accent-gold uppercase leading-[0.85] absolute inset-0 pointer-events-none"
              style={{
                WebkitTextStroke: "1.5px #D4AF37",
              }}
            >
              SALE
            </motion.h2>
          </motion.div>

          {/* New Collection Subtitle (Stage 2 of Gold Rise) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="relative select-none"
          >
            {/* Base Grey Text */}
            <p
              className="text-center text-[16px] tracking-[0.2em] uppercase text-(--grey-text) font-medium"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              New Collection
            </p>

            {/* Rising Gold Fill Layer */}
            <motion.p
              aria-hidden="true"
              initial={false}
              animate={{
                clipPath: isShopHovered
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(100% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
                delay: isShopHovered ? 0.2 : 0.4,
              }}
              className="text-center text-[16px] tracking-[0.2em] uppercase text-accent-gold font-medium absolute inset-0 pointer-events-none"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              New Collection
            </motion.p>
          </motion.div>

          {/* Shop Now Button with Bold Hollow Expanding Ripple Effect */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
          >
            <Link
              href="/shop"
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
              className="relative overflow-hidden text-center py-3.5 px-10 rounded-md bg-black text-white inline-block shadow-md transition-transform duration-200 hover:scale-105"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              {/* Bold, Noticeable Hollow Expanding Rings */}
              {!isShopHovered && (
                <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-md z-0">
                  <motion.span
                    className="absolute inset-0 m-auto rounded-full border-2 border-accent-gold bg-transparent"
                    initial={{ width: "0px", height: "0px", opacity: 1 }}
                    animate={{ width: "280px", height: "280px", opacity: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute inset-0 m-auto rounded-full border-2 border-accent-gold/80 bg-transparent"
                    initial={{ width: "0px", height: "0px", opacity: 0.8 }}
                    animate={{ width: "280px", height: "280px", opacity: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
                  />
                </span>
              )}

              {/* Gold Background Rising From Bottom on Hover */}
              <motion.span
                aria-hidden="true"
                initial={false}
                animate={{
                  y: isShopHovered ? "0%" : "100%",
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                  delay: isShopHovered ? 0 : 0.6,
                }}
                className="absolute inset-0 bg-accent-gold z-0"
              />

              {/* Button Label */}
              <span className="relative z-10 font-medium transition-colors duration-300">
                Shop now
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}