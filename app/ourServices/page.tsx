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
      <OurServices className="h-screen flex justify-center items-center"/>

      <Footer/>
    </div>
  );
}

export default page;
