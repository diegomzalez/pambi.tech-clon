"use client";
import { useState } from "react";

export default function CopyContractAddress() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="contract-address-container bg-[#1e1e1e] rounded-lg flex p-2">
      <input
        type="text"
        className="flex-1 bg-transparent text-center p-1 text-md text-[#f5f5f5]"
        value="8dGUaPCybF4e2EbqtKcDsvW74shNTsabd5M6z6zG9BN2"
        readOnly
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            "8dGUaPCybF4e2EbqtKcDsvW74shNTsabd5M6z6zG9BN2"
          );
          setCopied((prev) => !prev);
          setTimeout(() => setCopied((prev) => !prev), 2000);
        }}
        className="group bg-primary rounded-lg w-[33px] h-[33px] flex items-center transition-all justify-center ml-2 hover:scale-105 hover:shadow-[0_0_8px_#DF8414]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="absolute bottom-[110%] bg-[#333] px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100">
          {copied ? "Copied" : "Copy"}
        </span>
      </button>
    </section>
  );
}
