"use client";

import { useT } from "next-i18next/client";


import { FaHandshake } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

import { motion } from "framer-motion";
import FeatureCard from "../../components/FeatureCard";

const features = [
  {
    icon: <FaHandshake />,
    title: "Success Partner",
    details:
      "نؤمن بأن نجاح عملائنا هو أساس نجاحنا، ونعمل لبناء شراكات طويلة  الأمد تقوم على الثقة والاحترافية",
  },

  {
    icon: <IoMdSettings />,
    title: "Customized Solutions",
    details:
    `العمل على توفير حل لأي مشكلة مهنية أو تقنية تواجه العميل على الفور مع التشاور في الوقت المناسب في بيئة من الاحترام 
    المتبادل`,
  },

  {
    icon: <FaBookReader />,
    title: "Trusted Expertise",
    details:
      "نمتلك خبرة واسعة في المحاسبة والمراجعة، ونلتزم بتطبيق أعلى المعايير لضمان الدقة والموثوقية",
  },
];

const renderFeatures = features.map(({ icon, title, details }, idx) => {
  return (
    <FeatureCard
      key={idx}
      icon={icon}
      title={title}
      details={details}
    ></FeatureCard>
  );
});

function WhyChooseUs() {
  const { t } = useT("aboutUs");
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dijoz9ie7/image/upload/v1772883697/Gemini_Generated_Image_aexlk9aexlk9aexl_elx5xr.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#e3e3e3]"
        >
          {t("whyUs.title")}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-sm md:text-base mb-16"
        >
        {t("whyUs.desc")}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {renderFeatures}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
