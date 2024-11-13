import { IMoreAboutCategory } from "@/app/lib/definitions";
import { moreAboutCategories } from "@/app/lib/placeholder-data";
import { chakra } from "@/app/fonts";
import Link from "next/link";

function MoreAboutCategoryFooter({ title, links }: IMoreAboutCategory) {
  return (
    <section className="grid md:justify-center">
      <section className={chakra.className}>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <ul>
          {links!.map((l, li) => {
            return (
              <li key={l.title + li} className="mb-2">
                <Link
                  href={l.link}
                  className="text-[#FFFFFFCC] transition-colors hover:text-white"
                >
                  {l.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
export default function MoreAboutFooter() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 md:justify-center gap-y-4 ml-6 md:ml-0">
      {moreAboutCategories.map((c, ci) => {
        if (c.links)
          return (
            <MoreAboutCategoryFooter
              key={c.title + ci}
              title={c.title}
              links={c.links}
            />
          );
      })}
    </section>
  );
}
