"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  return (
    <section className="flex justify-center items-center h-screen bg-black">
      <section className="rounded-xl h-20 w-20 bg-loading bg-cover animate-ping grid justify-center items-center"></section>
    </section>
  );
}
