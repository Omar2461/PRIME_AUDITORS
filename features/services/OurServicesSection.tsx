"use client";
import { useT } from "next-i18next/client";

import { motion } from "framer-motion";
import OurServices from "./OurServices";
import Button from "../../components/Button";

import { FaArrowRight } from "react-icons/fa6";

function OurServicesSection() {
  const { t } = useT("services");
  const { t: tCommon } = useT("common");
  return (
    <div className="relative">
      <OurServices className="pt-60 pb-30" />
      <div className="text-center absolute top-20 left-0 right-0 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#585656] mb-4"
        >
          {t("title")}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto w-80 md:w-full "
        >
         {t("details")}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-fit absolute bottom-10 right-20 sm:right-65 lg:right-100 xl:right-150 2xl:right-162"
      >
        <Button href="/ourServices">
          {tCommon("btn.showAllServices")}
          <FaArrowRight />
        </Button>
      </motion.div>
    </div>
  );
}

export default OurServicesSection;
