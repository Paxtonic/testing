"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const path = usePathname();

  return (
    <ul className="nav_links">
      <li>
        <Link
          href="/"
          className={
            path === "/"
              ? "font-medium text-red-500 underline transition-colors"
              : "font-medium text-black no-underline transition-colors hover:text-black"
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/page1"
          className={
            path === "/page1" || path?.startsWith("/page1/")
              ? "font-medium text-red-500 underline transition-colors"
              : "font-medium text-black no-underline transition-colors hover:text-black"
          }
        >
          Page 1
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={
            path === "/about"
              ? "font-medium text-red-500 underline transition-colors"
              : "font-medium text-black no-underline transition-colors hover:text-black"
          }
        >
          About
        </Link>
      </li>
    </ul>
  );
}
