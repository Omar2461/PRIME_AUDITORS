import BlogPost from "@/features/blog/BlogPost";
import { blogData } from "@/features/blog/data";
import Pane from "@/components/Pane";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// export async function generateStaticParams() {
//   return blogData.map((article) => ({ slug: article.slug }));
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogData.find((a) => a.slug === slug);
  return {
    title: article
      ? `${article.title} | Prime Auditors`
      : "مقالة | Prime Auditors",
    description: article?.desc,
    icons:{
      icon: "/logoF.svg",
    }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data=blogData.find((item)=>item.slug===slug);
  return (
    <>
      <Pane title={data?.title}  date={data?.date} />
      <BlogPost slug={slug} />
    </>
  );
}
