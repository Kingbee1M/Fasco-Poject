"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const HIDE_NAV_ROUTES = [
  "/",
  "/login",
  "/signup"
];

export default function NavbarWrapper() {
  const pathname = usePathname();
  const normalizedPath =
    pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname || "/";

  if (HIDE_NAV_ROUTES.includes(normalizedPath)) {
    return null;
  }

  return <NavBar />;
}