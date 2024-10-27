"use client";
import { IMoreAboutCategory } from "@/app/lib/placeholder-data";
import { useState } from "react";

export default function MoreAboutCategory({
  category_info,
}: {
  category_info: IMoreAboutCategory;
}) {
  const [toggleMAL, setToggleMAL] = useState(false);
  return (
    <li>
      <button onClick={() => setToggleMAL((prev) => !prev)}>
        <section className="category-info-container">
          <p>{category_info.title}</p>
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
    </li>
  );
}
