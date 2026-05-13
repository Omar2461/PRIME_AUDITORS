import { getT } from "next-i18next/server";

import Blog from "@/features/blog/Blog";
import Pane from "@/components/Pane";
import Footer from "@/components/Footer";

async function page() {
  const { t } = await getT("blog");

  return (
    <>
      <Pane
        title={`${t("pane.title")}`}
        details={`${t("pane.desc")}`}
      />
      <Blog className="flex flex-col md:flex-row md:justify-center bg-gray-100" />

      <Footer />
    </>
  );
}

export default page;
