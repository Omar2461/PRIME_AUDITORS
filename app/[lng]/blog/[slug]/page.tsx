import { getT } from "next-i18next/server";

import BlogPost from "@/features/blog/BlogPost";
import { blogData } from "@/features/blog/data";
import Pane from "@/components/Pane";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string; lng: string }>;
};

// export async function generateStaticParams() {
//   return blogData.map((article) => ({ slug: article.slug }));
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getT("blog");
  const { slug } = await params;
  const article = blogData.find((a) => a.slug === slug);
  return {
    title: article
      ? `${t(`blogs.${article.title}.title`)} | Prime Auditors`
      : "مقالة | Prime Auditors",
    icons: {
      icon: "/logoF.svg",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug, lng } = await params;
  const { t } = await getT("blog", { lng });

  const data = blogData.find((item) => item.slug === slug);
  const date = t(`blogs.${data?.title}.date`);
  const title = t(`blogs.${data?.title}.title`);
  return (
    <>
      <Pane title={title} date={date} />
      <BlogPost slug={slug} />
    </>
  );
}
