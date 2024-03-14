import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
