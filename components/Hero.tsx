"use client";

import { useT } from "next-i18next/client";


import { motion } from "framer-motion";

import Image from "next/image";
import Button from "./Button";

import { MdWhatsapp } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  const { t, i18n } = useT("home");
  const { t: tCommon } = useT("common");



  const lang = i18n.language;

  return (
    <section className="bg-white relative overflow-hidden bg-cover bg-center">
      {/* <Image
        src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1771697534/Gemini_Generated_Image_k4lmkbk4lmkbk4lm_az0jxd.png"
        alt="background"
        fill
        className="object-cover -z-10"
      /> */}
      <div
        className="hidden md:block absolute right-0 top-0 h-full w-[35%] bg-[#E11B35] z-20"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div
        className="container text-center mx-auto h-200  md:px-6 lg:py-24 flex flex-col items-center sm:items-start md:flex-row pt-30 sm:pt-65 relative 
         xl:py-20 xl:pl-0 xl:pr-0 transition-all duration-400
      "
      >
        <div
          className={`flex flex-col items-center  sm:items-start lg:justify-center lg:items-center w-90 md:w-fit h-fit space-y-6 
        md:-mt-10 ${lang == "ar" ? "md:-mr-5 xl:mr-25 2xl:ml-0 2xl:mr-60 lg:mr-10 " : "2xl:ml-40"} relative  2xl:mr-20 2xl:mt-30 lg:w-130 lg:mt-25 transition-all duration-400 border-black
        `}
        >
          <h1
            className="flex flex-col text-center md:ml-15 xl:ml-0 text-[38px] sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#585656]
        md:w-100 lg:w-fit transition-all duration-400
          "
          >
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span>{t("hero.title1")}</span>
              <br />
              <span>{t("hero.title2")}</span>
            </motion.div>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`w-80 sm:w-90 md:w-100 md:mr-8 md:mt-3 ${lang == "en" ? "" : ""}
               lg:mr-0 lg:ml-17 xl:ml-0 xl:mt-0 lg:text-[24px] text-[22px] text-[#E11B35] `}
          >
            {t("hero.details")}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`md:flex md:justify-center text-center text-black text-[21px] 
           md:text-xl ${lang === "ar" ? "eading-relaxed tracking-[.25em] 2xl:right-60 2xl:bottom-80 xl:right-20 md:right-2 md:mr-0" : ""}l w-90 md:w-110 lg:w-140 2xl:w-140 md:absolute sm:-mr-3 mt-6 md:bottom-64 md:pl-8 z-30
           lg:pl-0 lg:bottom-75 2xl:left-40 xl:items-center xl:bottom-83 2xl:bottom-65 xl:text-md transition-all duration-400 `}
        >
          {t("hero.desc")}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-fit h-fit flex gap-5 mt-10 sm:mt-0 sm:absolute sm:bottom-45 sm:right-50 md:bottom-42 md:right-50
         2xl:bottom-40 2xl:right-150"
        >
          <Button href="https://wa.me/201142563801">
            {tCommon("btn.whatsapp")}
            <MdWhatsapp />
          </Button>

          <Button href="/aboutUs">
            {tCommon("btn.learnMore")}
            <FaArrowRight />
          </Button>
        </motion.div>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden sm:block h-fit ml-14 md:flex md:justify-center lg:mr-20 lg:mt-33 xl:mr-30 xl:mt-20 "
        >
          <Image
            src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1771672474/cpa-1-reub66lczybg6qaul99hiu2nofz3i74114fkee2s88_nlo7fa.png"
            alt="Accounting"
            width={300}
            height={300}
            className="w-95 -mr-15 md:mr-0 xl:mr-8 xl:w-85 lg:w-57 transition-all duration-400"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
