import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/globalComponents/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Doe here, welcome to my blog",
  description: "My frequent topics are about React, Next.js, HyGraph and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex flex-col items-center">
          <Navbar />
          <div className="w-5/6 relative lg:w-3/6 pt-section">{children}</div>
        </div>
      </body>
    </html>
  );
}
