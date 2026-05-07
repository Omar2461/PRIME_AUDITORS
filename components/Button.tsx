import Link from "next/link";

function Button({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link href={href || "#"}>
      <div
        className={`bg-[#E11B35] font-bold flex justify-center items-center text-lg rounded-lg shadow-xl/30  gap-1 py-2 px-5
             hover:scale-112  transition-all duration-400 text-white ${className}`}
      >
        {children}
      </div>
    </Link>
  );
}

export default Button;
