"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    setInterval(() => {
      if (dots.length !== 3) setDots((prev) => prev.concat("."));
      else setDots("");
    }, 500);
  }, [dots]);
  return (
    <section className="pambii-loading h-screen w-screen">
      <p className="text-2xl text-primary-light">PAMBII{dots}</p>
    </section>
  );
}
