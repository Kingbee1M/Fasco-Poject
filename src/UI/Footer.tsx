import Link from "next/link"
import Image from "next/image"
import logo from "@/public/images/logo.jpeg"

const footerColumns = [
  {
    title: "Support",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "Invoicing", href: "/invoicing" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contract", href: "/contract" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full mt-28 bg-[#0D0D0F] text-white overflow-hidden border-t border-accent-gold/30">
      {/* Subtle Ambient Gold Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(212,175,55,0.16),transparent_62%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10 flex flex-col justify-between min-h-[420px] gap-12">
        {/* Top / Center Focal Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 my-auto">
          {/* Left Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-accent-gold/60 bg-white flex items-center justify-center shrink-0">
                <Image
                  src={logo}
                  alt="FASCO Logo"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="font-Volkhov text-xl font-extrabold tracking-[0.16em] text-accent-gold">
                FASCO
              </span>
            </Link>
            <p
              className="text-sm sm:text-base text-white/85 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              Tailored silhouettes and timeless essentials for everyday presence.
            </p>
          </div>

          {/* Center Halftone Gold Ring Focal Medallion */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
              {/* Halftone Dot Ring SVG */}
              <svg
                viewBox="0 0 240 240"
                aria-hidden="true"
                className="w-full h-full text-accent-gold/75 animate-[spin_48s_linear_infinite]"
              >
                <defs>
                  <radialGradient id="goldDotFade" cx="50%" cy="50%" r="50%">
                    <stop offset="55%" stopColor="currentColor" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="currentColor" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 36 }).map((_, idx) => {
                  const angle = (idx * 360) / 36
                  const rad = (angle * Math.PI) / 180
                  const radius = idx % 2 === 0 ? 102 : 92
                  const cx = 120 + radius * Math.cos(rad)
                  const cy = 120 + radius * Math.sin(rad)
                  const r = idx % 3 === 0 ? 3.2 : 2

                  return (
                    <circle
                      key={idx}
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="url(#goldDotFade)"
                    />
                  )
                })}
              </svg>

              {/* Inner Circular Emblem */}
              <div className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border-2 border-accent-gold/80 shadow-[0_0_40px_rgba(212,175,55,0.28)] flex flex-col items-center justify-center p-4 text-center">
                <span className="font-Volkhov text-lg sm:text-xl font-extrabold tracking-[0.18em] text-accent-gold">
                  FASCO
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.24em] text-grey-text mt-1"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  Atelier Edit
                </span>
              </div>
            </div>
          </div>

          {/* Right Grouped Navigation Columns */}
          <div
            className="lg:col-span-4 grid grid-cols-2 gap-8 text-center lg:text-left lg:justify-items-end"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-xs sm:text-sm text-white/75 hover:text-accent-gold underline-offset-4 hover:underline decoration-accent-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-white/60"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          <div className="flex items-center gap-5 uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-accent-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent-gold transition-colors">
              Terms of Use
            </Link>
          </div>

          <p className="text-center">
            Copyright &copy; {currentYear} <span className="text-accent-gold">Fasco</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}