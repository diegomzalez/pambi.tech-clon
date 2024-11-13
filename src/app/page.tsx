import pambiiLogo from "@/public/official_logo.webp";
import beeLogo from "@/public/bee.webp";
import raydiumLogo from "@/public/raydium_logo.svg";
import dexTools from "@/public/dextools.webp";
import coinmarketcapLogo from "@/public/coinmarketcap-logo.webp";
import dexScreener from "@/public/dexscreenerlogo_transparent-1.webp";
import { chakra, montserrat } from "@/app/fonts";
import OscillatingLogo from "@/app/ui/main/oscillating-logo";
import FinancialInfo from "@/app/ui/main/financial-info";
import Header from "@/app/ui/main/header/header";
import CopyContractAddress from "@/app/ui/main/copy-contract-address";
import PerformanceUnit from "@/app/ui/main/performance-unit";
import Link from "next/link";
import Image from "next/image";
import SocialMedias from "./ui/social-media";
import MoreAboutFooter from "./ui/more-about-footer";

export default function Home() {
  return (
    <>
      <aside
        className={`z-20 top-banner ${chakra.className} bg-primary sticky h-[50px] flex justify-center items-center`}
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
      <main>
        <section className="main__header-container bg-screen1 lg:bg-cover">
          <Header />
          <section className="main__top-section">
            <section className="welcome-and-radium-section-container max-w-6xl mx-auto py-4 px-4 pb-12 grid grid-cols-1 lg:grid-cols-2 lg:mt-12">
              <section className="welcome-section appear-from-left relative text-center lg:text-start mb-10">
                <h1 className="text-3xl lg:text-5xl font-semibold mb-4 lg:mb-6">
                  Welcome to the
                  <br />
                  <span className="text-primary-light whitespace-nowrap">
                    PAMBII
                  </span>
                  &nbsp;Universe!
                </h1>
                <h3
                  className={
                    "text-lg lg:text-xl mb-4 text-[#C9C9C9] font-normal" +
                    montserrat.className
                  }
                >
                  <span className="text-primary-light">$PAMBII</span> is a token
                  with functionality! A Pokémon-Style fighting game, and a news
                  and quest platform for projects to get sponsored by the
                  largest community from Spain! Created by the biggest KOL in
                  Spain, Dalas
                </h3>
                <h5 className="text-center text-sm mb-2">
                  Unique Contract Address:
                </h5>
                <CopyContractAddress />
              </section>
              <section className="raydium-section appear_from_right lg:ml-10 relative flex flex-col justify-end mb-4">
                <section className="z-10 -mb-10 flex justify-center relative">
                  <picture>
                    <Image
                      alt="Bee image"
                      src={beeLogo}
                      className="absolute w-[60px] h-[60px] -translate-x-full top-0"
                    />
                  </picture>
                  <picture>
                    <Image
                      alt="PAMBII logo"
                      src={pambiiLogo}
                      className="w-48 h-48 rounded-xl"
                    />
                  </picture>
                </section>
                <section className="z-0 bg-gray-opacity border border-[#373737] rounded-lg py-6 px-6">
                  <section className="mt-10 text-[#F9F9F9] text-lg sm:text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 z-10 flex items-center justify-center">
                    <p>PAMBII is Officially on</p>
                    <OscillatingLogo
                      key="raydium-logo"
                      logo_src={raydiumLogo}
                    />
                  </section>
                  <section className="flex flex-col items-center">
                    <button className="mb-2 rounded-full border border-[#6F6F6F] px-6 py-2 transition-all hover:border-primary-light hover:shadow-[0_0_8px_#DF8414] flex justify-center w-max">
                      <Link
                        href="https://raydium.io/swap/?inputMint=sol&outputMint=8dGUaPCybF4e2EbqtKcDsvW74shNTsabd5M6z6zG9BN2"
                        className="text-base font-semibold"
                      >
                        Trade on Raydium Now
                      </Link>
                    </button>
                    <button className="rounded-full w-max border border-[#6F6F6F] px-10 py-4 transition-all hover:border-primary-light hover:shadow-[0_0_8px] hover:shadow-primary-light flex justify-center">
                      <Link
                        key="how-to-buy-on-raydium"
                        href="https://medium.com/@PAMBII/how-to-buy-pambii-tokens-on-solana-a4a433de3db8"
                        className="text-lg font-semibold"
                      >
                        How to buy on Raydium
                      </Link>
                    </button>
                  </section>
                </section>
              </section>
              <FinancialInfo />
            </section>
          </section>
        </section>
        <section className="main__mid-section flex flex-col-reverse lg:block bg-[#080808]">
          <section className="mb-14">
            <section className="max-w-6xl mx-auto py-4 px-4">
              <h2 className="h-[40px] text-primary-light text-center text-2xl lg:text-[40px] font-semibold mb-6 md:mb-8 lg:mb-12">
                Explore Our Performance
              </h2>
              <section className="grid grid-col-1 md:grid-cols-3 gap-4">
                <PerformanceUnit
                  logo_src={coinmarketcapLogo}
                  title="Market Tracking"
                  content="See our Real-Time Data!"
                  href="https://www.pambi.tech/coinmarketcap"
                />
                <PerformanceUnit
                  logo_src={dexTools}
                  title="Market Tracking"
                  content="Check our stats!"
                  href="https://www.dextools.io/app/en/solana/pair-explorer/B6qQgSLeqV3Tp6SJwGqZBegTeKZ7oBQVoiTrxvFhw4qS?t=1718737126405"
                />
                <PerformanceUnit
                  logo_src={dexScreener}
                  title="Market Tracking"
                  content="See our Real-Time Data!"
                  href="https://www.pambi.tech/coinmarketcap"
                />
              </section>
            </section>
          </section>
          <section className="bg-screen2 bg-[#080808] lg:bg-cover mb-6 lg:mb-14">
            <section className="max-w-6xl mx-auto py-4 px-4">
              <h2 className="h-[40px] text-primary-light text-center text-2xl lg:text-[40px] font-semibold font-sora mb-6 md:mb-8 lg:mb-12">
                Meet the PAMBII Founder
              </h2>
              <section className="relative md:bg-black md:border-4 border-[#DC7B0E] md:p-2 rounded-xl">
                <iframe
                  className="w-full h-[200px] sm:h-[380px] md:h-[550px] lg:h-[605px]"
                  src="https://www.youtube.com/embed/i9yN7-9GJgw?si=zAky7aXhHh2YzAzL"
                  title="Youtube Pambi 2.0"
                ></iframe>
              </section>
            </section>
          </section>
        </section>
      </main>
      <footer className="max-w-6xl mx-auto p-4 pb-6">
        <section className="flex justify-center items-center">
          <SocialMedias />
        </section>
        <div className="border border-[#D8D8D81F] my-6"></div>
        <MoreAboutFooter />
        <section className="copyright-section border-t-2 border-[#D8D8D81F] my-4"></section>
        <p className="text-base lg:text-lg text-[#7E7E7E] text-center">
          Copyright 2024{" "}
          <span className="text-[#DF8414] font-semibold uppercase">PAMBII</span>
        </p>
      </footer>
    </>
  );
}
