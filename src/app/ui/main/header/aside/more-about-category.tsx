"use client";
import { IMoreAboutCategory } from "@/app/lib/placeholder-data";
import Link from "next/link";
import { useState } from "react";

export default function MoreAboutCategory({
  category_info,
}: {
  category_info: IMoreAboutCategory;
}) {
  const [toggleMAL, setToggleMAL] = useState(false);
  return (
    // text-lg font-bold flex justify-between gap-x-2 items-center transition-colors hover:cursor-pointer bg-[#DF8414] py-2 px-4 rounded-lg
    <li className="more-about-category-list__item">
      <button
        className={`item__button w-full transition-colors ${
          toggleMAL ? "bg-primary" : undefined
        } hover:cursor-pointer py-2 px-4 rounded-lg`}
        onClick={() => setToggleMAL((prev) => !prev)}
      >
        <section className="item-container flex justify-between gap-x-2 items-center category-info-container">
          <p className="text-lg font-bold">{category_info.title}</p>
          {category_info?.links && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={!toggleMAL ? "M7 10l5 5 5-5" : "M17 14l-5-5-5 5"} />
            </svg>
          )}
        </section>
      </button>
      <ul
        className={`${
          !toggleMAL ? "hidden" : undefined
        } more-about-category__link-list mt-4 w-max rounded-lg transition-all`}
      >
        {category_info?.links?.map((l, l_i) => (
          <li className="link-list__item mb-2" key={"link-list-item-" + l_i}>
            <Link
              className="py-[8px] px-[16px] rounded-md hover:bg-black text-white transition-colors hover:text-primary"
              href={l.link}
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
