"use client";

import { blogData } from "./data";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

function Blog({ className }: { className?: string }) {
  const articles = blogData;

  return (
    <section
      className={`py-16 px-4 sm:px-8 md:px-10 lg:px-15 2xl:px-50 ${className || ""}`}
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        {articles.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-85 lg:w-110 xl:w-85 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/20 "></div>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover "
              />
            </div>

            <div className="p-6 flex flex-col items-start">
              <h3 className="text-lg sm:text-lg font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-4 text-[#E11B35] font-semibold hover:underline hover:cursor-pointer">
                <Link
                  href={`/blog/${item.slug}`}
                  className="mt-4 text-[#b89b6b] font-semibold hover:underline"
                >
                  اقرأ المزيد
                </Link>
              </button>
            </div>

            <div className="border-t px-6 py-4 text-sm text-gray-400">
              {item.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
