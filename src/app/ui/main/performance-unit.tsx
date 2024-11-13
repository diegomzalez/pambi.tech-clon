import { montserrat } from "@/app/fonts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Children, ReactNode } from "react";

export default function PerformanceUnit({
  logo_src,
  href,
  title,
  content,
}: {
  logo_src: StaticImageData;
  href: string;
  title: string;
  content: string;
}) {
  return (
    <Link
      href={href}
      className="p-8 shadow-[0_0_4px_#21190f] text-center rounded-2xl duration-500 hover:shadow-[0_0_6px_#3b2a16]"
    >
      <picture className="group flex justify-center mb-2">
        <Image
          alt="title"
          src={logo_src}
          className="h-[40px] lg:h-[50px] object-contain transition-all duration-700 group-hover:scale-110"
        />
      </picture>
      <section className="grid">
        <h3 className={`${montserrat.className} font-semibold text-lg`}>
          {title}
        </h3>
        <p className={`text-[#C9C9C9] ${montserrat.className} text-sm`}>
          {content}
        </p>
      </section>
    </Link>
  );
}
