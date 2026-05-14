import { getT } from "next-i18next/server";

import OurServices from "../../../features/services/OurServices";
import Pane from "../../../components/Pane";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{
    lng: string;
  }>;
};

async function page({ params }: Props) {
  const { lng } = await params;

  const { t } = await getT("services", { lng });
  return (
    <div>
      <Pane title={`${t("pane.title")}`} details={`${t("pane.desc")}`} />
      <OurServices className="flex justify-center items-center py-10" />

      <Footer />
    </div>
  );
}

export default page;
