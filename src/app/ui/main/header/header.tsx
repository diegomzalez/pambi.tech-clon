"use client";
import { moreAboutCategories } from "@/app/lib/placeholder-data";
import SocialMedias from "@/app/ui/social-media";
import MoreAboutCategoryAside from "@/app/ui/main/header/aside/more-about-category";
import MoreAboutCategoryHeader from "@/app/ui/main/header/nav/more-about-category";
import { chakra } from "@/app/fonts";
import pambiiLogo from "@/public/official_logo.webp";
import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [toggleAside, setToggleAside] = useState(false);
  const handleToggleAside = useCallback(
    () => setToggleAside((prev) => !prev),
    []
  );
  return (
    <header className={`${chakra.className} max-w-7xl mx-auto p-6`}>
      <aside
        className={`header__aside-menu z-20 bg-transparency fixed h-svh w-screen transition-all duration-700 top-0 bottom-0 left-0 ${
          toggleAside ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <section
          className={`aside-menu-container z-40 p-6 bg-black h-svh w-screen sm:w-[400px] transition-all duration-500 delay-100 ${
            toggleAside ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
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
      <nav className="header__nav flex justify-between items-center lg:animate-appear-from-top animation-delay-200">
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
            <Link target="_blank" href="https://phantom.app">
              Connect Wallet
            </Link>
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
  );
}
