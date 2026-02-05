import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next.js app with navbar, footer, and content layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
