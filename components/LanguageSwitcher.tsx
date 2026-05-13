"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    const segments = pathname.split("/");

    segments[1] = lng;

    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => changeLanguage("en")} className="hover:cursor-pointer hover:text-[#E11B35] transition-colors duration-450">
        English
      </button>

      <button onClick={() => changeLanguage("ar")} className="hover:cursor-pointer hover:text-[#E11B35] transition-colors duration-450">
        العربية
      </button>
    </div>
  );
}