import "./globals.css";
import { inter, chakra } from "@/app/fonts";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAMBII",
  description:
    "pambi.tech website clone by Dalas. This is not the official website.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-white ${inter.className} bg-[#080808]`}
      >
        {children}
      </body>
    </html>
  );
}
