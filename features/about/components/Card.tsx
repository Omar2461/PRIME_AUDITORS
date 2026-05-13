import { motion } from "framer-motion";

import { getT } from "next-i18next/server";

type cardProps = {
  title: string;
  icon: React.ReactNode;
  className?: string;
  lang:string;
  children: string;
};

function card({ icon, title, className,lang,children }: cardProps) {
  //  const { t, i18n } =await getT("aboutUs");

  //  console.log(i18n.language);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{duration:1}}
      viewport={{ once: true }}
      className={`border-2 border-[#3f3f3f] rounded-2xl shadow-[4px_6px_0px_#3f3f3f] p-2 ${lang=="ar"?"p-6":""} flex items-center justify-between 2xl:h-30 ${className} `}
    >
      <div className={`bg-[#E11B35] p-4 rounded-full text-4xl mr-2 ${lang=="ar"?"mr-0":""} hover:scale-110 transition-all duration-400`}>
        {icon}
      </div>
      <div className={` ${lang=="ar"?"mr-2":""} `}>
        <h3 className={`text-xl font-bold text-black mb-2 `}>{title}</h3>
        <p className="text-black text-[15px] xl:text-[16px] leading-relaxed">
          {children}
        </p>
      </div>
    </motion.div>
  );
}

export default card;
