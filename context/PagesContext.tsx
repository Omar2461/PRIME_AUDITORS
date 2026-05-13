"use client";

import { useState, useContext, createContext } from "react";

type LinkType = {
  name: string;
  href: string;
};

type pageContextType = {
  links: LinkType[];
  selected: string;
  onChange: (name: string) => void;
};

const pagesContext = createContext<pageContextType>({
  links: [],
  selected: "",
  onChange: () => {},
});

export function PageProvider({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: string;
}) {
  const [selected, seSelected] = useState("");

  const onChange = (name: string) => {
    seSelected(name);
  };

  const links = [
    { name: "home", href: `/${lng}` },
    { name: "about", href: `/${lng}/aboutUs` },
    { name: "services", href: `/${lng}/ourServices` },
    { name: "blog", href: `/${lng}/blog` },
  ];

  return (
    <pagesContext.Provider
      value={{ links, selected, onChange }}
    >
      {children}
    </pagesContext.Provider>
  );
}

export const useLinks = () => useContext(pagesContext);