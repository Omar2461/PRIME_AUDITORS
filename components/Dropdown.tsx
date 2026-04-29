"use client";

import { useDropdown } from "@/context/DropdownContext";
import { useLinks } from "@/context/PagesContext";
import Link from "next/link";

function Dropdown() {
  const { isOpen, toggleDropdown } = useDropdown();
  const { links, selected, onChange } = useLinks();

  const handleClick = (name: string) => {
    onChange(name);
    toggleDropdown();
  };

  const renderLinks = links.map(({ name, href }, idx) => {
    return (
      <Link key={idx} href={href} onClick={() => handleClick(name)}>
        <li className={`border border-[#3E444C] p-2 ${selected == name ? "bg-[#3E444C]" : ""}`}>
          {name}
        </li>
      </Link>
    );
  });

  return (
    <ul
      className={`
    absolute top-full left-0 w-full
    bg-[#6B6D55] shadow-md text-white
    transition-all duration-300 ease-in-out
    origin-top
    ${
      isOpen
        ? "opacity-100 translate-y-0 scale-y-100"
        : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
    }
  `}
    >
      {renderLinks}
    </ul>
  );
}

export default Dropdown;
