"use client";
import pambiiLogo from "@/public/official_logo.webp";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { moreAboutCategories } from "./lib/placeholder-data";
export default function Home() {
  const [toggleAside, setToggleAside] = useState(false);
  const handleToggleAside = useCallback(
    () => setToggleAside((prev) => !prev),
    [toggleAside]
  );
  return (
    <main>
      <section className="main__header-container bg-screen1 lg:bg-cover">
        <header className="max-w-7x1 mx-auto p-6">
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
              <ul className="aside-menu__more-about-container">
                {moreAboutCategories.map((c, c_i) => (
                  <li key={`${c.title}${c_i}`}></li>
                ))}
              </ul>
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
            <section className="nav__right-section-container flex items-center">
              <button className="nav__btn-connect-wallet text-primary mr-1 py-2 px-3 rounded-xl bg-black border border-primary ">
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
      </section>
    </main>
  );
}
