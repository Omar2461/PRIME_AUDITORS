import Hero from "../components/Hero";
import AboutUs from "../features/about/AboutUs";

import WhyChooseUs from "../features/about/WhyChooseUs";
import OurServicesSection from "../features/services/OurServicesSection";
import OurBlogSection from "../features/blog/OurBlogSection";
import ClientsSection from "../components/ClientsSection";
// import Footer from "./components/Footer";

function page() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />

      <OurServicesSection />
      <OurBlogSection />
      <ClientsSection />

      {/* <Footer /> */}
    </main>
  );
}

export default page;
