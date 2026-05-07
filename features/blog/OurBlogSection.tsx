"use client";

import { motion } from "framer-motion";
import Blog from "./Blog";
import Button from "../../components/Button";

import { FaArrowRight } from "react-icons/fa6";

function OurBlogSection() {
  return (
    <div className="relative bg-white">
      <Blog className="pt-60 pb-30" />
      <div className=" text-center h-fit md:flex md:items-center absolute top-20 left-4 right-4 md:left-12 md:right-12 xl:right-36 xl:left-36 2xl:right-70 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-bold text-[#585656] mb-5 md:mb-0 md:w-40 lg:w-fit"
        >
          آخر المقالات
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-gray-600 mx-auto w-85 md:w-110 lg:w-180 xl:w-200 text-[16px] lg:text-xl text-center"
        >
          تابع آخر مقالاتنا واكتشف أحدث الأخبار والنصائح المحاسبية التي تساعدك
          على تطوير أعمالك واتخاذ قرارات مالية أكثر دقة ووعيًا
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-fit absolute bottom-10 right-20 sm:right-65 lg:right-100 xl:right-150 2xl:right-162"
      >
        <Button href="/blog">
          عرض جميع الخدمات
          <FaArrowRight />
        </Button>
      </motion.div>
    </div>
  );
}

export default OurBlogSection;
