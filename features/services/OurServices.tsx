"use client";

import { servicesData } from "./data";

import { motion } from "framer-motion";

function OurServices({ className }: { className?: string }) {
  const services = servicesData;

  return (
    <section className={`bg-gray-100 ${className || ""}`}>
      <div className="max-w-7xl mx-auto xl:px-35">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.map((service, index) => (
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className="
              relative
              w-72.5
              h-72.5
              bg-[#E7E3D4]
              border-4
              border-[#6B6A55]
              rounded-[50%]
              shadow-xl/30
              flex
              items-center
              justify-center
              text-center
              p-6
              "
            >
              <div>
                <h3 className="text-xl font-bold text-[#6B6A55] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
