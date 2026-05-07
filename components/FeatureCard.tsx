"use client";

import { motion } from "framer-motion";

type featureCardProps = {
  icon: React.ReactNode;
  details: string;
  title: string;
};

function FeatureCard({ icon, details, title }: featureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl shadow-lg p-8 text-center text-gray-800"
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white w-16 h-16 rounded-xl flex items-center justify-center text-[#E11B35] text-4xl shadow">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-black"> {title}</h3>

      <p className="text-sm leading-relaxed">{details}</p>
    </motion.div>
  );
}

export default FeatureCard;
