"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import loginImage from "@/public/images/loginimage.webp";

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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with your real auth call, e.g. signIn("credentials", {...})
      await new Promise((r) => setTimeout(r, 1200));
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "peer w-full bg-transparent border-0 border-b border-[#d9d9d9] pt-5 pb-2 text-[15px] text-[#18181b] outline-none transition-colors placeholder-transparent focus:border-transparent";
  const labelClass =
    "pointer-events-none absolute left-0 top-5 origin-left text-[14px] text-[#6b6b6b] transition-all duration-200 peer-focus:-translate-y-4.5 peer-focus:scale-85 peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:-translate-y-4.5 peer-[:not(:placeholder-shown)]:scale-85";
  const underlineClass =
    "pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent-gold transition-transform duration-300 peer-focus:scale-x-100";

  return (
    <main
      className="flex min-h-screen w-full bg-white"
      style={{ fontFamily: "var(--font-Poppins)" }}
    >
      {/* Left: editorial image panel */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative hidden lg:block lg:w-1/2 xl:w-[55%] overflow-hidden bg-[#0D0D0F]"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.14 }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={loginImage}
            alt="FASCO editorial look"
            fill
            priority
            sizes="(min-width: 1280px) 55vw, 50vw"
            className="object-cover object-top grayscale contrast-110"
          />
        </motion.div>

        {/* Strong top & bottom editorial gradients so white/gold copy always pops over light backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/85" />

        {/* Gold accent line along the right edge */}
        <div className="absolute right-0 top-0 h-full w-[3px] bg-accent-gold/90" />

        <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">
          <Link href="/" className="inline-flex items-center gap-2.5 self-start group">
            <span className="h-2 w-2 rounded-full bg-accent-gold transition-transform duration-300 group-hover:scale-125" />
            <span className="font-Volkhov text-2xl font-extrabold tracking-[0.18em] text-white">
              FASCO
            </span>
          </Link>

          <div className="max-w-md rounded-2xl bg-black/45 p-6 backdrop-blur-xs border border-white/10">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-accent-gold">
              New Collection
            </p>
            <h2 className="font-Volkhov text-[38px] xl:text-[48px] font-bold leading-[1.08] tracking-tight text-white">
              Style that moves
              <br />
              with you.
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/80">
              Sign in to unlock member pricing, track your orders, and get early
              access to every seasonal drop.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Right: form panel */}
      <section className="flex w-full lg:w-1/2 xl:w-[45%] items-center justify-center px-6 py-12 sm:px-12 bg-[#fcfcfb]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.2 },
            },
          }}
          className="w-full max-w-md rounded-2xl bg-white p-7 sm:p-9 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.12)] border border-black/5"
        >
          <div className="mb-6 lg:hidden">
            <Link
              href="/"
              className="font-Volkhov text-xl font-extrabold tracking-[0.16em] text-accent-gold"
            >
              FASCO
            </Link>
          </div>

          <motion.p
            variants={fade}
            className="mb-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-accent-gold"
          >
            Welcome back
          </motion.p>

          <motion.h1
            variants={fade}
            className="font-Volkhov text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#18181b]"
          >
            Sign in
          </motion.h1>

          <motion.p
            variants={fade}
            className="mt-3 mb-8 text-[14px] text-[#6b6b6b]"
          >
            Enter your details to continue shopping.
          </motion.p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
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
                autoComplete="current-password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-10`}
              />
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <span className={underlineClass} />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-0 top-4.5 p-1 text-[#6b6b6b] transition-colors hover:text-accent-gold"
              >
                <EyeIcon open={showPassword} />
              </button>
            </motion.div>

            {/* Remember + forgot */}
            <motion.div
              variants={fade}
              className="flex items-center justify-between text-[13px]"
            >
              <label className="flex cursor-pointer select-none items-center gap-2 text-[#52525b]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 cursor-pointer rounded accent-[#D4AF37]"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="font-medium text-[#52525b] underline-offset-4 transition-colors hover:text-accent-gold hover:underline"
              >
                Forgot password?
              </Link>
            </motion.div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="rounded-lg bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600 border border-red-200"
              >
                {error}
              </motion.p>
            )}

            {/* Sign in button */}
            <motion.div variants={fade} className="pt-1">
              <button
                type="submit"
                disabled={loading}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                className="relative w-full overflow-hidden rounded-md bg-black py-3.5 text-center text-white shadow-md transition-transform duration-200 hover:scale-[1.015] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{ y: isBtnHovered && !loading ? "0%" : "100%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 z-0 bg-accent-gold"
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-[14px] font-medium tracking-wide">
                  {loading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}
                  {loading ? "Signing in..." : "Sign in"}
                </span>
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fade}
              className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]"
            >
              <span className="h-px flex-1 bg-[#e5e5e5]" />
              or
              <span className="h-px flex-1 bg-[#e5e5e5]" />
            </motion.div>

            {/* Google */}
            <motion.div variants={fade}>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-[#d9d9d9] bg-white py-3 text-[14px] font-medium text-[#18181b] transition-colors hover:border-accent-gold hover:bg-[#fffdf5]"
              >
                <GoogleIcon />
                Continue with Google
              </button>
            </motion.div>
          </form>

          <motion.p
            variants={fade}
            className="mt-8 text-center text-[13px] text-[#6b6b6b]"
          >
            New here?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#18181b] underline-offset-4 transition-colors hover:text-accent-gold hover:underline"
            >
              Create an account
            </Link>
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}