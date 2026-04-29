"use client";

import Link from "next/link";

import { useState } from "react";
import { useLinks } from "@/context/PagesContext";

function NavLinks({className}: {className?: string}) {
  const [isOpen, setIsOpen] = useState("الرئيسية");
  const {links} = useLinks();

  const onClick = (name: string) => {
    setIsOpen(name);
  };

  const renderNavLinks = links.map(({ href, name }, idx) => {
    return (
      <li
        key={idx}
        className={`w-20 h-9 flex justify-center border-b-[3px]  items-center 
         hover:border-b-3 hover:border-[#A9963A] hover:text-[#A9963A] transition-colors duration-450
        ${isOpen == name ? "border-b-3 border-[#A9963A] text-[#A9963A]" : "border-transparent text-black"}
         `}
      >
        <Link href={href} onClick={() => onClick(name)}>
          {name}
        </Link>
      </li>
    );
  });

  return (
    <ul className={`hidden md:flex flex-initial md:justify-center md:w-140 lg:text-[18px] font-medium xl:gap-3 ${className}`}>
      {renderNavLinks}
    </ul>
  );
}

export default NavLinks;
