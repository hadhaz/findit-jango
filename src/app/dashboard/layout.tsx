import Sidebar from "@/components/layout/navbar/sidebar";
import React, { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex bg-[#F7F7F7] h-screen'>
      <Sidebar />
      <Suspense>{children}</Suspense>
    </section>
  );
}
