import { getT } from "next-i18next/server";

import OurServices from "../../../features/services/OurServices";
import Pane from "../../../components/Pane";
import Footer from "@/components/Footer";

async function page() {
  const { t } = await getT("services");
  return (
    <div>
      <Pane title={`${t("pane.title")}`} details={`${t("pane.desc")}`} />
      <OurServices className="flex justify-center items-center py-10" />

      <Footer />
    </div>
  );
}

export default page;
