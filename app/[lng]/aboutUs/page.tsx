import { getT } from "next-i18next/server";

import AboutUs from "../../../features/about/AboutUs";
import WhyChooseUs from "../../../features/about/WhyChooseUs";
import Pane from "../../../components/Pane";
import ClientsSection from "@/features/clientPart/ClientsSection";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{
    lng: string;
  }>;
};

async function page({ params }: Props) {
  const { lng } = await params;

  const { t } = await getT("aboutUs", { lng });

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
