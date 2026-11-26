"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const HIDE_FOOTER_ROUTES = [
  "/",
  "/login",
  "/signup"
];

export default function FooterWrapper() {
  const pathname = usePathname();
  const normalizedPath =
    pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname || "/";

  if (HIDE_FOOTER_ROUTES.includes(normalizedPath)) {
    return null;
  }

  return <Footer />;
}