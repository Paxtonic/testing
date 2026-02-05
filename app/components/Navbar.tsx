import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav_inner">
        <Link href="/" className="nav_logo">
          Next App
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
