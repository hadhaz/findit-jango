"use client";
import Sidebar from "@/components/layout/navbar/sidebar";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <section className='flex bg-[#F7F7F7] h-screen py-[3vh] px-6 gap-x-4'>
        <Sidebar />
        <Suspense>
          <div className='bg-[#FEFEFE] overflow-y-scroll basis-3/4 p-[2.5%] ml-0 rounded-xl'>
            {children}
          </div>
        </Suspense>
      </section>
    </Provider>
  );
}
