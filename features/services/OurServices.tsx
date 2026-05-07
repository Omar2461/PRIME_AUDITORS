"use client";

import { servicesData } from "./data";

import { motion } from "framer-motion";

function OurServices({ className }: { className?: string }) {
  const services = servicesData;

  return (
    <section className={`bg-white ${className || ""}`}>
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
              bg-[#]
              text-black
              border-4
              border-[#E11B35]
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
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed">
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
