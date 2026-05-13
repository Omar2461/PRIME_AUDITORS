import Hero from "@/components/Hero";

import AboutUs from "@/features/about/AboutUs";
import WhyChooseUs from "@/features/about/WhyChooseUs";
import OurServicesSection from "@/features/services/OurServicesSection";
import OurBlogSection from "@/features/blog/OurBlogSection";
import ClientsSection from "@/features/clientPart/ClientsSection";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />

      <OurServicesSection />
      <OurBlogSection />
      <ClientsSection />

      <Footer />
    </main>
  );
}

// export async function generateMetadata() {
//   const { t } = await getT("home");
//   return { title: t("meta_title") };
// }
