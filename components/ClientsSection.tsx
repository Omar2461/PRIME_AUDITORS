"use client";
import { useRef } from "react";

import { motion } from "framer-motion";
import ClientsSlider from "./ClientsSlider";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function ClientsSection() {
  const Logo = [
    "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774689836/Frame-11_nwoisl.webp",
    "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774689834/Frame-22_yzsmx0.webp",
    "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774689833/Frame-8_u0jggn.webp",
    "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774689833/Frame-10_npyjme.webp",
    "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774689833/Frame-7_f34j4h.webp",
    "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774689833/Frame-9_ysm2dp.webp",
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-gray-100 text-center py-20">
      <motion.h2
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#6B6A55] mb-4"
      >
        أبرز عملائنا
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-gray-600 max-w-3xl mx-auto"
      >
        نفتخر بثقة نخبة من عملائنا الذين شاركونا مسيرة النجاح، وكانوا جزءًا من
        رحلتنا في تقديم حلول مالية ومحاسبية مبتكرة
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 relative mt-12 text-black"
      >
        <button
          ref={nextRef}
          className="prev-btn absolute left-0 xl:-left-3 top-1/2 -translate-y-1/2 z-10"
        >
          <IoIosArrowBack className="cursor-pointer text-md xl:text-2xl" />
        </button>

        <button
          ref={prevRef}
          className="next-btn absolute right-0 xl:-right-3 top-1/2 -translate-y-1/2 z-10"
        >
          <IoIosArrowForward className="cursor-pointer text-md xl:text-2xl" />
        </button>
        <ClientsSlider logos={Logo} nextRef={nextRef} prevRef={prevRef} />
      </motion.div>
    </section>
  );
}

export default ClientsSection;
