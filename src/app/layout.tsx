import Navbar from "@/components/layout/navbar";
import { Suspense } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

const { SITE_NAME } = process.env;

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Aplikasi jago ngomong untuk kamu yang ingin ningkatin public speaking",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id'>
      <body className={rubik.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
