"use client";

import { useContext, createContext } from "react";


const links = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن؟" ,href: "/aboutUs" },
  { name: "خدماتنا", href: "/ourServices" },
  { name: "المدونة", href: "/blog" },
];

type LinkType = {
  name: string;
  href: string;
};

type pageContextType = {
  links: LinkType[];
  // selected: string;
  // onChange: (name: string) => void;
};

const pagesContext = createContext<pageContextType>({
  links,
  // selected: "",
  // onChange: () => {},
});




export function PageProvider({ children }: { children: React.ReactNode }) {
  // const [selected, seSelected] = useState("");

  // const onChange = (name: string) => {
  //   seSelected(name);
  // };

  return (
    <pagesContext.Provider value={{ links }}>
      {children}
    </pagesContext.Provider>
  );
}

export default pageContextType;

export const useLinks = () => useContext(pagesContext);
