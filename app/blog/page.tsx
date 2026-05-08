import Blog from "../../features/blog/Blog";
import Pane from "../../components/Pane";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <Pane
        title="المدونة"
        details="تابع آخر مقالاتنا واكتشف أحدث الأخبار والنصائح المحاسبية التي تساعدك على تطوير أعمالك واتخاذ قرارات مالية أكثر دقة ووعيًا"
      />
      <Blog className="flex flex-col md:flex-row md:justify-center bg-gray-100" />

      <Footer/>
    </>
  );
}

export default page;
