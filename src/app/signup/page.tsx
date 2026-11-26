"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import signupImage from "@/public/images/signupimage.webp";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 5.1A9.7 9.7 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.6 9.6 0 0 0 4-.9" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.4Z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A11.5 11.5 0 0 0 12 23.5Z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.2a6.9 6.9 0 0 1 0-4.4v-3H1.8a11.5 11.5 0 0 0 0 10.4l3.8-3Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.8l3.8 3C6.5 7.4 9 5.4 12 5.4Z"
      />
    </svg>
  );
}

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password) {
      setError("Please fill in your name, email, and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!acceptTerms) {
      setError("Please agree to the terms and privacy policy to continue.");
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with your real registration call
      await new Promise((r) => setTimeout(r, 1200));
    } catch {
      setError("Unable to create your account right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "peer w-full bg-transparent border-0 border-b border-white/20 pt-5 pb-2 text-[15px] text-white outline-none transition-colors placeholder-transparent focus:border-transparent";
  const labelClass =
    "pointer-events-none absolute left-0 top-5 origin-left text-[14px] text-white/60 transition-all duration-200 peer-focus:-translate-y-4.5 peer-focus:scale-85 peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:-translate-y-4.5 peer-[:not(:placeholder-shown)]:scale-85";
  const underlineClass =
    "pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent-gold transition-transform duration-300 peer-focus:scale-x-100";

  return (
    <main
      className="flex min-h-screen w-full flex-col lg:flex-row bg-[#09090B] text-white overflow-hidden"
      style={{ fontFamily: "var(--font-Poppins)" }}
    >
      {/* Left: dark form panel fading seamlessly into the right visual */}
      <section className="relative z-10 flex w-full lg:w-[48%] xl:w-[45%] items-center justify-center px-6 py-12 sm:px-12 bg-gradient-to-b from-[#09090B] via-[#0C0C0F] to-[#08080A]">
        {/* Subtle ambient gold glow behind the form */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent-gold/10 blur-3xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.2 },
            },
          }}
          className="relative z-10 w-full max-w-md rounded-2xl bg-[#111115]/85 p-7 sm:p-9 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] border border-white/10 backdrop-blur-md"
        >
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
            >
              <span className="font-Volkhov text-xl font-extrabold tracking-[0.18em] text-white">
                FASCO
              </span>
            </Link>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent-gold/90">
              Style With Noir
            </span>
          </div>

          <motion.p
            variants={fade}
            className="mb-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-accent-gold"
          >
            Join the house
          </motion.p>

          <motion.h1
            variants={fade}
            className="font-Volkhov text-[36px] sm:text-[42px] font-bold leading-none tracking-tight text-white"
          >
            Create account
          </motion.h1>

          <motion.p
            variants={fade}
            className="mt-3 mb-7 text-[14px] text-white/65"
          >
            Step into private releases, tailored edits, and priority drops.
          </motion.p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Full Name */}
            <motion.div variants={fade} className="relative">
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder=" "
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
              />
              <label htmlFor="fullName" className={labelClass}>
                Full name
              </label>
              <span className={underlineClass} />
            </motion.div>

            {/* Email */}
            <motion.div variants={fade} className="relative">
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <span className={underlineClass} />
            </motion.div>

            {/* Password */}
            <motion.div variants={fade} className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-10`}
              />
              <label htmlFor="password" className={labelClass}>
                Password (min. 8 characters)
              </label>
              <span className={underlineClass} />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-0 top-4.5 p-1 text-white/60 transition-colors hover:text-accent-gold"
              >
                <EyeIcon open={showPassword} />
              </button>
            </motion.div>

            {/* Terms */}
            <motion.div variants={fade} className="pt-1 text-[12.5px]">
              <label className="flex cursor-pointer select-none items-start gap-2.5 text-white/70 leading-relaxed">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-[#D4AF37]"
                />
                <span>
                  I agree to Fasco&apos;s{" "}
                  <Link
                    href="/terms"
                    className="text-white underline-offset-4 hover:text-accent-gold hover:underline"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-white underline-offset-4 hover:text-accent-gold hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </motion.div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="rounded-lg bg-red-950/60 px-3.5 py-2.5 text-[13px] text-red-300 border border-red-500/30"
              >
                {error}
              </motion.p>
            )}

            {/* Create Account button */}
            <motion.div variants={fade} className="pt-1">
              <button
                type="submit"
                disabled={loading}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                className="relative w-full overflow-hidden rounded-md bg-white py-3.5 text-center text-[#09090B] shadow-lg transition-transform duration-200 hover:scale-[1.015] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{ y: isBtnHovered && !loading ? "0%" : "100%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 z-0 bg-accent-gold"
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-[14px] font-semibold tracking-wide">
                  {loading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  )}
                  {loading ? "Creating account..." : "Create account"}
                </span>
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fade}
              className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45"
            >
              <span className="h-px flex-1 bg-white/15" />
              or
              <span className="h-px flex-1 bg-white/15" />
            </motion.div>

            {/* Google */}
            <motion.div variants={fade}>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-white/15 bg-white/5 py-3 text-[14px] font-medium text-white transition-colors hover:border-accent-gold hover:bg-white/10"
              >
                <GoogleIcon />
                Continue with Google
              </button>
            </motion.div>
          </form>

          <motion.p
            variants={fade}
            className="mt-7 text-center text-[13px] text-white/65"
          >
            Already have an account?{" "}
            <Link
              href="/Sign-In"
              className="font-semibold text-accent-gold underline-offset-4 transition-colors hover:underline"
            >
              Sign in
            </Link>
          </motion.p>
        </motion.div>
      </section>

      {/* Right: draped monochrome portrait fading into pure black */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative min-h-[420px] lg:min-h-screen w-full lg:w-[52%] xl:w-[55%] overflow-hidden bg-[#09090B]"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.03 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={signupImage}
            alt="Draped monochrome fashion portrait"
            fill
            priority
            sizes="(min-width: 1280px) 55vw, (min-width: 1024px) 52vw, 100vw"
            className="object-cover object-[65%_20%] grayscale contrast-115"
          />
        </motion.div>

        {/* Seamless fade from left black into the draped subject, plus bottom/top vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-transparent to-[#09090B]/45"
        />

        {/* Subtle gold edge accent on far right */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-accent-gold/70 to-transparent"
        />

        {/* Editorial caption anchored at bottom right */}
        <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-12 xl:p-16 text-right">
          <div className="ml-auto max-w-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-gold">
              Shadow &amp; Silk
            </p>
            <p className="mt-2 font-Volkhov text-2xl sm:text-3xl font-bold leading-snug text-white">
              Quiet drama in every fold.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}