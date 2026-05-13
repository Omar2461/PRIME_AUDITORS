import { IconType } from "react-icons";
import { FaEye } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";

type Card = {
  id: number;
  key: "vision" | "mission" | "values";
  icon: IconType;
};

type AboutUs = {
  id: number;
  key: "about";
  cards: Card[];
};

export const aboutUsData: AboutUs[] = [
  {
    id: 1,
    key: "about",
    cards: [
      {
        id: 1,
        key: "vision",
        icon: FaEye,
      },
      {
        id: 2,
        key: "mission",
        icon: GrMailOption,
      },
      {
        id: 3,
        key: "values",
        icon: FaMedal,
      },
    ],
  },
];