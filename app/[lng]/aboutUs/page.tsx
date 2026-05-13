import { getT } from "next-i18next/server";

import AboutUs from "../../../features/about/AboutUs";
import WhyChooseUs from "../../../features/about/WhyChooseUs";
import Pane from "../../../components/Pane";
import ClientsSection from "@/features/clientPart/ClientsSection";
import Footer from "@/components/Footer";

async function page() {
  const { t } = await getT("aboutUs");

  return (
    <div>
      <Pane title={`${t("pane.title")}`} details={`${t("pane.desc")}`} />
      <AboutUs />
      <WhyChooseUs />
      <ClientsSection />

      <Footer />
    </div>
  );
}

export default page;
