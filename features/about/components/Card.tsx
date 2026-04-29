import { motion } from "framer-motion";

type cardProps = {
  title: string;
  icon: React.ReactNode;
  className?: string;
  children: string;
};

function card({ icon, title, className, children }: cardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{duration:1}}
      viewport={{ once: true }}
      className="bg-[#a7a482] border-2 border-[#3f3f3f] rounded-2xl shadow-[4px_6px_0px_#3f3f3f] p-6 flex items-center justify-between 2xl:h-30 "
    >
      <div className="bg-[#8e8c6f] p-4 rounded-full text-4xl hover:scale-110 transition-all duration-400">
        {icon}
      </div>
      <div className={`mr-2 ${className}`}>
        <h3 className={`text-xl font-bold text-white mb-2 `}>{title}</h3>
        <p className="text-white text-[15px] xl:text-[16px] leading-relaxed">
          {children}
        </p>
      </div>
    </motion.div>
  );
}

export default card;
