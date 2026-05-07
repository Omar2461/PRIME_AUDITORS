"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";

import { MdWhatsapp } from "react-icons/md";
import Image from "next/image";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

function Footer() {
  const [showMap, setShowMap] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowMap(true);
      }
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/aboutUs" },
    { name: "خدماتنا", href: "/ourServices" },
    { name: "المدونة", href: "/blog" },
  ];

  return (
    <section
      className="bg-[#3C3C3C] relative flex flex-col justify-center items-center md:flex-row bg-cover bg-center bg-no-repeat w-full min-h-75 pt-10 md:pr-20 lg:pr-40 xl:pr-30 xl:pl-30"
      // style={{
      //   backgroundImage: `url(https://res.cloudinary.com/dijoz9ie7/image/upload/v1774704535/Gemini_Generated_Image_f7mqkaf7mqkaf7mq_w8mlfj.png)`,
      // }}
    >
      <div className="flex flex-col items-center h-fit">
        <Image
          className="w-35 h-35 md:w-30 md:h-30 lg:w-26 xl:w-50 xl:h-50 "
          src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1778142772/ChatGPT_Image_May_7_2026_11_31_38_AM_jj8mvo.png"
          alt="Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="flex flex-col relative gap-6 xl:gap-20 z-10 text-white xl:px-30 pb-5 w-fit h-fit mt-5">
        <div className="flex items-center w-fit">
          <h1 className="w-fit font-bold">روابط سريعة</h1>

          <div className="flex gap-2 w-fit pr-5">
            {links.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-red-700 transition-colors duration-450"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <h1 className="font-bold">تواصل معنا</h1>
          <div className="flex gap-2 w-fit pr-7">
            <Link
              href={"https://wa.me/201142563801"}
              className="hover:text-red-700 hover:cursor-pointer transition-colors duration-450 flex items-center gap-2"
            >
              09585868
            </Link>

            <div className="hover:text-red-700 hover:cursor-pointer transition-colors duration-450">
              INFO@FIRSTF.NET
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="flex flex-col items-center mb-5 lg:mr-20">
        {showMap ? <Map /> : <p>Loading map...</p>}
      </div>
    </section>
  );
}

export default Footer;
