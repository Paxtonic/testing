import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer_inner">
        <p>
          © {year} Next App. <Link href="/">Home</Link> · <Link href="/about">About</Link>
        </p>
      </div>
    </footer>
  );
}
