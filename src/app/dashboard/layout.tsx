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
      <Suspense>
        <div className='bg-[#FEFEFE] overflow-y-scroll basis-3/4 p-8 lg:p-12 m-8 ml-0 rounded-xl'>
          {children}
        </div>
      </Suspense>
    </section>
  );
}
