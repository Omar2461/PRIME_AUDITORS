"use client";

import { blogData } from "./data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa6";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

function BlogPost({ slug }: { slug: string }) {
  const article = blogData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
    return null;
  }

  return (
    <>
      <section className="bg-[#f5f5f0] min-h-screen pb-20">

        <div className="flex flex-col md:flex-row gap-5 max-w-7xl mx-auto items-center md:items-start md:justify-center py-15 px-3 sm:pt-20">
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative md:sticky top-0 w-87 h-65 sm:h-80 md:w-60 md:h-40 lg:w-80 lg:h-55
              shadow-xl/50 shadow-[4px_6px_0px_#E11B35] rounded-2xl overflow-hidden"
            > <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            /> </motion.div>
          

          <div className="flex flex-col items-center max-w-2xl md:w-130 lg:w-2xl">
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#E11B35] font-semibold hover:underline mb-8 "
              >
                <FaArrowLeft />
                العودة إلى المدونة
              </Link>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed mb-3 text-center md:text-start "
            >
              {article.title}
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm text-gray-400 mb-8 border-b border-gray-200 pb-4"
            >
              {article.date}
            </motion.p> */}

            <div className="space-y-6">
              {article.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="text-gray-700 w-fit px-3 md:leading-6 sm:text-md"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 flex justify-center"
            >
              <Button href="https://wa.me/966500000000">
                <FaWhatsapp size={22} />
                تواصل معنا
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Back Link */}
      </section>

      <Footer />
    </>
  );
}

export default BlogPost;
