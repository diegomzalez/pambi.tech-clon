import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";
export const metadata: Metadata = {
  title: "PAMBII",
  description:
    "pambi.tech website clone by Dalas. This is not the official website.",
};
const font_chakra = Chakra_Petch({ subsets: ["latin"], weight: "700" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-white ${font_chakra.className}`}>
        <aside className="top-banner bg-primary sticky h-[50px] flex justify-center items-center">
          <p className="text-base md:text-xl">
            <span className="font-semibold">
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
