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
      <body className={`antialiased text-white ${inter.className}`}>
        <aside
          className={`top-banner ${chakra.className} bg-primary sticky h-[50px] flex justify-center items-center`}
        >
          <p className="text-base md:text-xl font-semibold">
            <span className="font-bold">
              <Link className="underline" href={"https://pambii.quest"}>
                Pambii Quest
              </Link>
              &nbsp;IS LIVE
            </span>
            , participate to get reward
          </p>
        </aside>
        {children}
      </body>
    </html>
  );
}
