import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  variable: "--inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini shop",
  description: "Sarvarbek tomonidan yaratildi ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
