"use client";
import { useT } from "next-i18next/client";
import { usePathname } from "next/navigation";

import { blogData } from "./data";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

function Blog({ className }: { className?: string }) {
  const articles = blogData;

  const { t } = useT("blog");
  const { t: tCommon } = useT("common");

   const pathName = usePathname();
  const currentLang = pathName.split("/")[1];

  return (
    <section
      className={`py-16 px-4 sm:px-8 md:px-10 lg:px-15 2xl:px-50 ${className || ""}`}
    >
      <div className="flex flex-col md:max-w-6xl flex-wrap md:flex-row gap-8 place-items-center">
        {articles.map(({title,id,image,slug}) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={id}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-85 md:w-80 lg:w-105 xl:w-85 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/20 "></div>
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover "
              />
            </div>

            <div className="p-6 flex flex-col items-start">
              <h3 className="text-lg sm:text-lg font-bold text-gray-800">
                {t(`blogs.${title}.title`)}
              </h3>

              <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
                {t(`blogs.${title}.desc`)}
              </p>

              <button className="mt-4 font-semibold hover:underline hover:cursor-pointer">
                <Link
                  href={`/${currentLang}/blog/${slug}`}
                  className="mt-4 text-[#E11B35] font-semibold hover:underline"
                >
                 {tCommon("btn.learnMore")}
                </Link>
              </button>
            </div>

            <div className="border-t px-6 py-4 text-sm text-gray-400">
              {t(`blogs.${title}.date`)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
