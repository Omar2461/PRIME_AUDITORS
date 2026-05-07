"use client";

import { aboutUsdata } from "./data";

import { motion } from "framer-motion";

import Card from "./components/Card";
import { MdWhatsapp } from "react-icons/md";

import Button from "../../components/Button";
import { Fragment } from "react/jsx-runtime";

function AboutUs() {
  return (
    <section className="bg-white py-30 px-6 sm:py-30 sm:px-15 2xl:py-30 transition-all duration-400">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col 2xl:w-250 2xl:h-100 2xl:mr-20 sm:flex-row lg:flex-row items-center sm:items-start gap-16 ">
          {aboutUsdata.map((data) => (
            <Fragment key={data.id}>
              <div className="w-full sm:w-70 sm:mt-10 lg:mt-20 2xl:mt-10 flex flex-col md:items-center lg:w-1/2 text-center  space-y-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-[#585656]"
                >
                  {data.title}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className="text-gray-700 sm:leading-5 lg:leading-normal text-md sm:text-lg 2xl:text-[17px] "
                >
                  {data.description}
                </motion.div>
              </div>

              <div className="flex flex-col sm:w-80 gap-4 w-full 2xl:h-100 lg:w-1/2 border">
                {data.cards.map((item) => (
                  <Fragment key={item.id}>
                    <Card
                      icon={<item.icon className="text-white" />}
                      title={item.title}
                    >
                     {item.description}
                    </Card>
                  </Fragment>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-fit absolute -bottom-20 right-20 sm:right-60 lg:right-95 xl:right-120 2xl:right-105"
              >
                <Button href="https://wa.me/201142563801">
                  تواصل معنا
                  <MdWhatsapp />
                </Button>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
