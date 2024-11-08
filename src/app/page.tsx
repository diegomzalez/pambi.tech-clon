"use client";
import pambiiLogo from "@/public/official_logo.webp";
import { moreAboutCategories } from "@/app/lib/placeholder-data";
import SocialMedias from "@/app/ui/social-media";
import MoreAboutCategoryAside from "@/app/ui/main/header/aside/more-about-category";
import raydiumLogo from "@/public/raydium_logo.svg";
import MoreAboutCategoryHeader from "@/app/ui/main/header/nav/more-about-category";
import { chakra, montserrat } from "@/app/fonts";
import OscillatingLogo from "@/app/ui/main/oscillating-logo";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [toggleAside, setToggleAside] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleToggleAside = useCallback(
    () => setToggleAside((prev) => !prev),
    []
  );
  return (
    <main>
      <section className="main__header-container bg-screen1 lg:bg-cover">
        <header
          className={`${chakra.className} lg:appear_from_top max-w-7xl mx-auto p-6`}
        >
          <aside
            className={`header__aside-menu z-20 bg-transparency fixed h-svh w-screen transition-all duration-700 top-0 bottom-0 left-0 ${
              toggleAside ? "-translate-x-0" : "-translate-x-full"
            }`}
          >
            <section className="aside-menu-container p-6 bg-black h-[1000px] md:h-svh w-screen sm:w-[400px]">
              <section className="aside-menu__top-section flex justify-between items-center mb-10">
                <section className="top-section__pambii-section flex items-center gap-x-4">
                  <picture className="nav__pambii-logo-container">
                    <Image
                      className="w-14 h-14 md:w-16 md:h-16 rounded-md"
                      alt="PAMBII logo"
                      src={pambiiLogo}
                    />
                  </picture>
                  <p className="text-2xl">PAMBII</p>
                </section>
                <button onClick={handleToggleAside}>
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M10 10 L90 90 M90 10 L10 90"
                      stroke="white"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </section>
              <ul className="aside-menu__more-about-category-list grid gap-x-2 mb-8">
                {moreAboutCategories.map((c, c_i) => (
                  <MoreAboutCategoryAside
                    key={`${c.title}-${c_i}`}
                    category_info={c}
                  />
                ))}
              </ul>
              <section className="aside-menu__footer grid sm:flex gap-x-4 gap-y-4 items-center">
                <SocialMedias />
                <Link
                  href="mailto:official@pambi.tech"
                  className="w-max text-primary p-4 rounded-xl bg-black border border-[#6F6F6F] transition-all duration-400 border-primary"
                >
                  Contact Us
                </Link>
              </section>
            </section>
          </aside>
          <nav className="header__nav flex justify-between items-center">
            <picture className="nav__pambii-logo-container">
              <Image
                className="w-14 h-14 md:w-16 md:h-16 rounded-md"
                alt="PAMBII logo"
                src={pambiiLogo}
              />
            </picture>
            <ul className="nav__more-about-category-list gap-x-2 hidden lg:flex">
              {moreAboutCategories.map((c, c_i) => (
                <MoreAboutCategoryHeader
                  title={c.title}
                  isBeta={c.isBeta}
                  key={c.title + c_i}
                  link={c.link}
                  links={c.links}
                />
              ))}
            </ul>
            <section className="nav__right-section-container flex items-center">
              <button className="nav__btn-connect-wallet text-primary mr-1 py-2 px-3 rounded-xl bg-black border border-primary hover:shadow-[0_0_8px]">
                Connect Wallet
              </button>
              <button
                className="nav__toggle-menu-button inline-flex items-center p-2 md:hidden"
                onClick={handleToggleAside}
                type="button"
                aria-label="Toggle aside menu."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </section>
          </nav>
        </header>
        <section className="main__top-section">
          <section className="welcome-and-radium-section-container max-w-6xl mx-auto py-4 px-4 pb-12 grid grid-cols-1 lg:grid-cols-2 lg:mt-12 lg:mb-8">
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
                and quest platform for projects to get sponsored by the largest
                community from Spain! Created by the biggest KOL in Spain, Dalas
              </h3>
              <h5 className="text-center text-sm mb-2">
                Unique Contract Address:
              </h5>
              <section className="contract-address-container bg-[#1e1e1e] rounded-lg flex p-2">
                <input
                  type="text"
                  className="flex-1 bg-transparent text-center p-1 text-md text-[#f5f5f5]"
                  value="8dGUaPCybF4e2EbqtKcDsvW74shNTsabd5M6z6zG9BN2"
                  readOnly
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "8dGUaPCybF4e2EbqtKcDsvW74shNTsabd5M6z6zG9BN2"
                    );
                    setCopied((prev) => !prev);
                    setTimeout(() => setCopied((prev) => !prev), 2000);
                  }}
                  className="group bg-primary rounded-lg w-[33px] h-[33px] flex items-center transition-all justify-center ml-2 hover:scale-105 hover:shadow-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="absolute bottom-[110%] bg-[#333] px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100">
                    {copied ? "Copied" : "Copy"}
                  </span>
                </button>
              </section>
            </section>
            <section className="pambii-on-raydium-section appear_from_right lg:ml-10 relative flex flex-col-reverse justify-end mb-4">
              <section className="pambii-raydium-info mt-10 text-[#373737] rounded-lg py-6 px-6">
                <section className="mt-10 text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 z-10 flex items-center justify-center">
                  <p>PAMBII is Officially on</p>
                  <OscillatingLogo logo_src={raydiumLogo} />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
