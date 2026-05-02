import { IconType } from "react-icons";

import { FaEye } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";

type Card = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

type aboutUs = {
  id: number;
  title: string;
  description: string;
  cards: Card[];
};

export const aboutUsdata: aboutUs[] = [
  {
    id: 1,
    title: "من نحن؟",
    description: `مكتب برايم للإستشارات هو إحدى مكاتب الخدمات المهنية المحترفة في مصر، 
    ويقدم خدمات المراجعة والتدقيق، والخدمات الضريبية المختلفة، 
    والاستشارات القانونية، والاستشارات المالية لمجموعة واسعة من العملاء المحليين والمتعددة الجنسيات.`,
    cards: [
      {
        id: 1,
        title: "رؤيتنا",
        description:
          "ان نقترب من مجالات عمل عملائنا ، ونسعى جاهدين لتجاوز توقعاتهم من منظور متكامل، وتحديد البدائل المختلفة لانجاز اعمالهم بشكل مقبول .",
        icon: FaEye,
      },
      {
        id: 2,
        title: "رسالتنا",
        description: ` نلتزم بتقديم خدمات تدقيق واستشارات مالية وضريبية متكاملة، تساعد عملاءنا على تحقيق أهدافهم بثقة وكفاءة،
        `,
        icon: GrMailOption,
      },
      {
        id: 3,
        title: "قيمنا",
        description: ` النزاهة - الشفافية - الالتزام - الابتكار - الجودة`,
        icon: FaMedal,
      },
    ],
  },
];
