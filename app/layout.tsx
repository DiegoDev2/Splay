import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Splay",
  description: "Splay is streaming reimagined: ad-free, copyright-free, hardstyle, and lofi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
        <Analytics />
        {children}

      </body>
    </html>
  );
}
