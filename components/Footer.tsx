import Link from "next/link";

import { MdWhatsapp } from "react-icons/md";

function Footer() {
  return (
    <section
      className="relative flex flex-col bg-cover bg-center bg-no-repeat w-full min-h-75 pt-10"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dijoz9ie7/image/upload/v1774704535/Gemini_Generated_Image_f7mqkaf7mqkaf7mq_w8mlfj.png)`,
      }}
    >
      <div className="flex relative gap-20 z-10 text-black px-40 ">
        <div className="flex flex-col  w-fit">
          <h1 className="text-2xl font-bold mb-4  w-fit">روابط سريعة</h1>

          <div className="flex flex-col gap-2  w-fit">
            <Link href="/">الرئيسية</Link>
            <Link href="/services">خدماتنا</Link>
            <Link href="/blog">المدونة</Link>
            <Link href="/contact">اتصل بنا</Link>
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <h1>تواصل معنا</h1>
          <div className="flex items-center gap-2">
            <MdWhatsapp /> 0542820200
          </div>
          <div>INFO@FIRSTF.NET</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
