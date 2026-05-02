import AboutUs from "../../features/about/AboutUs";
import WhyChooseUs from "../../features/about/WhyChooseUs";
import Pane from "../../components/Pane";
import ClientsSection from "@/features/clientPart/ClientsSection";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Pane
        title="لماذا تختارنا؟"
        details="تعرف علينا عن قرب واكتشف كيف نصنع الفرق في عالم المحاسبة"
      />
      <AboutUs />
      <WhyChooseUs />
      <ClientsSection />

      <Footer/>
    </div>
  );
}

export default page;
