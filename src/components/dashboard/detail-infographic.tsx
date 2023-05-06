"use client";

import { useEffect, useState } from "react";
import LineChart from "./line-chart";
import { Feedback } from "@/lib/jango/types";
import { getFeedbackData } from "@/lib/jango";
import Image from "next/image";
import RadarChart from "./radar-chart";

export default function DetailInfographic() {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);

  useEffect(() => {
    const data = getFeedbackData();
    setFeedbackData(data);
  }, []);

  return (
    <section className='bg-[#FFEDCE] p-3 xl:py-6 xl:px-10 my-12 rounded-2xl'>
      <h1 className='font-medium xl:text-2xl'>Feedback Latihan Terakhir</h1>
      <div className='flex gap-x-4 xl:my-6 items-center'>
        <div className='flex basis-[80%]'>
          {feedbackData.map((item: Feedback) => (
            <div
              key={item.name}
              className='flex justify-center items-center basis-1/3 gap-x-2'
            >
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                className='w-1/6'
              />
              <div className='flex flex-col'>
                <div className='xl:text-lg '>{item.name}</div>
                <div className='text-2xl xl:text-3xl'>{item.score}/10</div>
              </div>
            </div>
          ))}
        </div>
        <button className='bg-[#FF9D42] font-medium py-2 xl:py-3 xl:px-7 px-5 h-fit rounded-xl text-white'>
          Latihan Lagi
        </button>
      </div>
      <div className='bg-white rounded-2xl py-4 px-8'>
        <h1 className='font-medium xl:text-xl'>Progress Kamu</h1>
        <div className='w-full flex items-center h-fit'>
          <LineChart />
          <RadarChart />
        </div>
        <div></div>
      </div>
    </section>
  );
}
