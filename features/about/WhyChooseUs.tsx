"use client";

import { FaHandshake } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

import { motion } from "framer-motion";
import FeatureCard from "../../components/FeatureCard";

const features = [
  {
    icon: <FaHandshake />,
    title: "شريك نجاح",
    details:
      "نؤمن بأن نجاح عملائنا هو أساس نجاحنا، ونعمل لبناء شراكات طويلة  الأمد تقوم على الثقة والاحترافية",
  },

  {
    icon: <IoMdSettings />,
    title: "حلول مخصصة",
    details:
      "نقدم خدمات مالية تلبي احتياجات كل عميل بدقة، ونساعد عملاءنا على تحقيق أهدافهم بكفاءة واستدامة",
  },

  {
    icon: <FaBookReader />,
    title: "خبرة موثوقة",
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
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dijoz9ie7/image/upload/v1772883697/Gemini_Generated_Image_aexlk9aexlk9aexl_elx5xr.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#4b4931]/90"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          لماذا تختارنا؟
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-sm md:text-base mb-16"
        >
          نحرص في شركة القوائم الأولى على تقديم خدمات محاسبية موثوقة تلبي
          احتياجات عملائنا وتحقق لهم التميز والنجاح
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {renderFeatures}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
