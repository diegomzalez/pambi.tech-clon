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
          height="6"
          viewBox="0 0 9 6"
          width="9"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white duration-300 transition-all group-hover:stroke-[#DF8414] group-hover:translate-y-[2px]"
          stroke="#fff"
        >
          <path
            d="m1 1 3.35858 3.35858c.0781.0781.20474.0781.28284 0l3.35858-3.35858"
            strokeLinecap="round"
            strokeWidth="1.2"
          ></path>
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
