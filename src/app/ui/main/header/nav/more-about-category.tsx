import { IMoreAboutCategory } from "@/app/lib/definitions";
import Link from "next/link";
import { ReactNode } from "react";

export default function MoreAboutCategory({
  title,
  links,
  link,
  isBeta,
}: IMoreAboutCategory): ReactNode {
  return (
    <li className="more-about-category group relative p-2 text-lg font-bold flex gap-x-2 items-center hover:cursor-pointer">
      {link ? (
        <Link
          className="relative transition font-semibold p-2 hover:text-primary group-hover:text-primary"
          href={link}
        >
          {title}
          {isBeta && (
            <span className="text-primary absolute text-xs top-0">beta</span>
          )}
        </Link>
      ) : (
        <p className="group-hover:text-primary">{title}</p>
      )}

      {links && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:text-primary transition-colors"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      )}

      {links && (
        <ul className="more-about-category-links-list z-10 bg-[#161616] absolute left-1/2 top-10 -translate-x-1/2  invisible group-hover:visible px-4 py-6 w-max rounded-lg grid gap-y-2">
          {links.map((l, l_i) => (
            <li key={l.title + l_i}>
              <Link
                className="block py-2 px-4 rounded-md hover:bg-black text-white transition-colors hover:text-primary"
                href={l.link}
              >
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
