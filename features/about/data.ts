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
    description: ` نحن في شركة القوائم الأولى نقدم مجموعة شاملة من الخدمات المحاسبية
              والمالية للشركات والمؤسسات بمختلف أنواعها، حيث نركز في المقام
              الأول على مساعدة عملائنا في تحقيق تطلعاتهم وأهدافهم المالية بكفاءة
              واحترافية. نسعى دائمًا إلى تحقيق التوازن بين الجهود المالية
              والإدارية بما يضمن استدامة النجاح، كما نحرص على بناء علاقات قائمة
              على الثقة والولاء من خلال جودة خدماتنا وتميز أدائنا. نؤمن بأن
              التميز يكمن في الطريقة التي نعالج بها تحديات عملائنا، ولهذا نقدم
              حلولًا مهنية مبتكرة تختلف عن منافسينا وتحقق نتائج ملموسة تسهم في
              نمو أعمالهم بثبات.`,
    cards: [
      {
        id:1,
        title: "رؤيتنا",
        description:
          "أن نساهم في تحقيق رؤية 2030 عبر حلول مالية مبتكرة تعزز الشفافية والاستدامة",
        icon: FaEye,
      },
      {
        id:2,
        title: "رسالتنا",
        description: ` نقدم خدمات محاسبية احترافية تعتمد على الدقة والابتكار لبناء الثقة
              وتحقيق النمو المستدام لعملائنا`,
        icon: GrMailOption,
      },
      {
        id:3,
        title: "قيمنا",
        description: ` النزاهة - الشفافية - الالتزام - الابتكار - الشراكة`,
        icon: FaMedal,
      },
    ],
  },
];
