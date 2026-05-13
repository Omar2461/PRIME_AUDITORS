"use client";

import { useT } from "next-i18next/client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";
import { useLinks } from "@/context/PagesContext";

function NavLinks({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState("الرئيسية");
  const { links } = useLinks();

  const { t, i18n } = useT("links");

  const lang = i18n.language;
  const pathname = usePathname().split("/")[2];


  const onClick = (name: string) => {
    setIsOpen(name);
  };

  const renderNavLinks = links.map(({ href, name }, idx) => {
    return (
      <li
        key={idx}
        className={`w-20 h-9 flex justify-center border-b-[3px]  items-center 
         hover:border-b-3 hover:border-[#E11B35] hover:text-[#E11B35] transition-colors duration-450 ${lang == "en" ? "w-26" : ""}
        ${pathname == href.split("/")[2] ? "border-b-3 border-[#E11B35] text-[#E11B35]" : "border-transparent text-black"}
         `}
      >
        <Link href={href} onClick={() => onClick(name)}>
          {t(name)}
        </Link>
      </li>
    );
  });

  return (
    <ul
      className={`hidden md:flex flex-initial md:justify-center md:w-140 lg:text-[18px] font-medium xl:gap-3 ${className}`}
    >
      {renderNavLinks}
    </ul>
  );
}

export default NavLinks;
