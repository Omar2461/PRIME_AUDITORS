import {
  initServerI18next,
  getT,
  getResources,
  generateI18nStaticParams,
} from "next-i18next/server";

import { I18nProvider } from "next-i18next/client";

import i18nConfig from "../../i18n.config";

import Navbar from "@/components/Navbar";

import { DropdownProvider } from "@/context/DropdownContext";
import { PageProvider } from "@/context/PagesContext";

import { Tajawal } from "next/font/google";
import { Metadata } from "next";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

initServerI18next(i18nConfig);

export const metadata:Metadata={
  title:"Prime Auditors",
  description:"شركة برايم للمراجعة والتدقيق المالي",
  icons:{
    icon:"logoF.svg",
  },
}

export async function generateStaticParams() {
  return generateI18nStaticParams();
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const { lng } = await params;

  const { i18n } = await getT(lng);

  const resources = getResources(i18n);

  return (
    <div
      dir={lng === "ar" ? "rtl" : "ltr"}
      className={tajawal.className}
    >
      <PageProvider lng={lng}>
        <DropdownProvider>
          <I18nProvider language={lng} resources={resources}>
            <Navbar />
            {children}
          </I18nProvider>
        </DropdownProvider>
      </PageProvider>
    </div>
  );
}