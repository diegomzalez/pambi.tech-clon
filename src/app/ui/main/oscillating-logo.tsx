"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OscillatingLogo({ logo_src }: { logo_src: string }) {
  const [isLarge, setIsLarge] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setIsLarge((prev) => !prev), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <picture>
      <Image
        className={`ml-2 w-12 h-12 transform transition-transform duration-1000 ease-in-out ${
          isLarge ? "scale-110" : "scale-90"
        } hover:cursor-pointer`}
        src={logo_src}
        alt="raydium logo."
      />
    </picture>
  );
}
