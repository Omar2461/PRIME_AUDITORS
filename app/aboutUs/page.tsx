import AboutUs from "../../features/about/AboutUs";
import WhyChooseUs from "../../features/about/WhyChooseUs";
import Pane from "../../components/Pane";
import ClientsSection from "../../components/ClientsSection";

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
    </div>
  );
}

export default page;
