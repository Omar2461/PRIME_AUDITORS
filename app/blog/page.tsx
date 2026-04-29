import Blog from "../../features/blog/Blog";
import Pane from "../../components/Pane";

function page() {
  return (
    <>
      <Pane
        title="المدونة"
        details="تابع آخر مقالاتنا واكتشف أحدث الأخبار والنصائح المحاسبية التي تساعدك على تطوير أعمالك واتخاذ قرارات مالية أكثر دقة ووعيًا"
      />
      <Blog className="bg-gray-100" />
    </>
  );
}

export default page;
