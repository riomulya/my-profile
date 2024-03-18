import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";


export const metadata: Metadata = {
  title: "MyProfile",
  description: "Rio Mulya Syawal Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  );
}
