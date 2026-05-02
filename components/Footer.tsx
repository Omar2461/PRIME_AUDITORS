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
      className="relative flex flex-col md:flex-row bg-cover bg-center bg-no-repeat  w-full min-h-75 pt-10 md:pr-20 lg:pr-40 xl:pr-30 xl:pl-30 "
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dijoz9ie7/image/upload/v1774704535/Gemini_Generated_Image_f7mqkaf7mqkaf7mq_w8mlfj.png)`,
      }}
    >
      <div className="flex flex-col items-center h-fit">
        <Image
          className="w-35 h-35 md:w-30 md:h-30 lg:w-26 xl:w-50 xl:h-50 "
          src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1777494326/copy_of_prime_auditors_n1uwcx_bdb1c7.png"
          alt="Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="flex flex-col relative gap-7 xl:gap-20 z-10 text-black xl:px-30 pb-5  w-fit h-fit ">
        <div className="flex flex-col w-fit">
          <h1 className=" mb-8 mr-2 w-fit font-bold">روابط سريعة</h1>

          <div className="flex flex-col gap-2 w-fit pr-5">
            {links.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:hover:text-[#76692e] transition-colors duration-450"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <h1 className="font-bold">تواصل معنا</h1>

          <Link
            href={"https://wa.me/201142563801"}
            className="hover:hover:text-[#76692e] hover:cursor-pointer transition-colors duration-450 flex items-center gap-2"
          >
            <MdWhatsapp /> 0542820200
          </Link>

          <div className="hover:hover:text-[#76692e] hover:cursor-pointer transition-colors duration-450">
            INFO@FIRSTF.NET
          </div>
        </div>
      </div>

      <div ref={ref} className="flex flex-col items-center lg:mr-20">
        {showMap ? <Map /> : <p>Loading map...</p>}
      </div>
    </section>
  );
}

export default Footer;
