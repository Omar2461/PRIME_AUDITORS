"use client";
import { useT } from "next-i18next/client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";

import { MdWhatsapp } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

function Footer() {
  const [showMap, setShowMap] = useState(false);
  const ref = useRef(null);
  const { t } = useT("links");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowMap(true);
      }
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/aboutUs" },
    { name: "services", href: "/ourServices" },
    { name: "blog", href: "/blog" },
  ];

  return (
    <section
      className="bg-[#3C3C3C] relative flex flex-col items-center md:flex-row
        w-full min-h-65 pt-10 md:pt-0 md:px-2 lg:justify-center xl:pr-30 xl:pl-30 "
      // style={{
      //   backgroundImage: `url(https://res.cloudinary.com/dijoz9ie7/image/upload/v1774704535/Gemini_Generated_Image_f7mqkaf7mqkaf7mq_w8mlfj.png)`,
      // }}
    >
      <div className="flex flex-col items-center h-fit">
        <Image
          className="w-35 h-35 md:w-30 md:h-30 lg:w-26 xl:w-50 xl:h-50 "
          src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1778244615/ChatGPT_Image_May_8_2026_03_48_43_PM_dalhjc.png"
          alt="Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="flex flex-col relative gap-6 z-10 text-white xl:mx-5 w-fit h-fit mt-5 mb-5 md:mb-0 md:mt-0 md:mx-2 lg:mx-4">
        <div className="flex items-center w-fit">
          <h1 className="w-fit font-bold">{t("links")} :</h1>

          <div className="flex space-x-1.5 w-fit pr-5 md:pr-2">
            {links.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-red-700 transition-colors duration-450"
              >
                {t(name)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <h1 className="font-bold">{t("contact")} :</h1>
          <div className="flex gap-10 w-fit pr-7">
            <Link
              href={"https://wa.me/201142563801"}
              className="hover:text-red-700 hover:cursor-pointer transition-colors duration-450 flex items-center gap-2"
            >
              <MdWhatsapp size={20} />
            </Link>

            <Link
              href={"mailto:omarhassan.mansour@gmail.com"}
              className="hover:text-red-700 hover:cursor-pointer transition-colors duration-450 flex items-center gap-2"
            >
              <IoMdMail size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div ref={ref} className="flex flex-col xl:w-150 xl:h-60">
        {showMap ? <Map /> : <p>Loading map...</p>}
        <LanguageSwitcher/>
      </div>
    </section>
  );
}

export default Footer;
