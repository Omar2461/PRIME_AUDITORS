"use client";
import { useT } from "next-i18next/client";

import { blogData } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

function BlogPost({ slug }: { slug: string }) {
  const article = blogData.find((a) => a.slug === slug);
  const { t } = useT("blog");

  if (!article) {
    notFound();
    return null;
  }
  const content = t(`blogs.${article.title}.content`, {
    returnObjects: true,
  }) as string[];
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
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col items-center max-w-2xl md:w-130 lg:w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed mb-3 text-center md:text-start "
            >
              {t(`blogs.${article.title}.title`)}
            </motion.h1>

            <div className="space-y-6">
              {content.map((paragraph, index) => (
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
