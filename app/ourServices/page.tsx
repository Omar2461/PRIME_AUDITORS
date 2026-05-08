import OurServices from "../../features/services/OurServices";
import Pane from "../../components/Pane";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Pane
        title="خدماتنا"
        details="عملكم محل اهتمامنا لذلك نقدم لكم مجموعة من الخدمات المتميزة لنساهم في تنمية أعمالكم"
      />
      <OurServices className="flex justify-center items-center py-10"/>

      <Footer/>
    </div>
  );
}

export default page;
