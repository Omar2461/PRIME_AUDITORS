import "./globals.css";
import { Tajawal } from "next/font/google";

import { DropdownProvider } from "@/context/DropdownContext";
import { PageProvider } from "@/context/PagesContext";
import type { Metadata } from 'next';

import Navbar from "../components/Navbar";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata:Metadata={
  title:"Prime Auditors",
  description:"شركة برايم للمراجعة والتدقيق المالي",
  icons:{
    icon:"logoF.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <PageProvider>
        <DropdownProvider>
          <body className={tajawal.className}>
            {" "}
            <Navbar />
            {children}
          </body>
        </DropdownProvider>
      </PageProvider>
    </html>
  );
}
