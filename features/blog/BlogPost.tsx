"use client";

import { blogData } from "./data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa6";
import { notFound } from "next/navigation";

function BlogPost({ slug }: { slug: string }) {
  const article = blogData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
    return null;
  }

  return (
    <div className="bg-[#f5f5f0] min-h-screen pb-20">
      {/* Hero Image */}
      {/* <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div> */}

      {/* Article Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#b89b6b] font-semibold hover:underline mb-8 block"
          >
            <FaArrowLeft />
            العودة إلى المدونة
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed mb-3"
        >
          {article.title}
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-sm text-gray-400 mb-8 border-b border-gray-200 pb-4"
        >
          {article.date}
        </motion.p>

        {/* Content Paragraphs */}
        <div className="space-y-5">
          {article.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="text-gray-700 leading-8 text-base sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#1ebe57] transition-colors duration-300 text-lg"
          >
            <FaWhatsapp size={22} />
            تواصل معنا
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPost;
