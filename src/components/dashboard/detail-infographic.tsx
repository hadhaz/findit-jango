"use client";

import { useEffect, useState } from "react";
import LineChart from "./line-chart";
import { Feedback } from "@/lib/jango/types";
import { getFeedbackData } from "@/lib/jango";
import Image from "next/image";
import RadarChart from "./radar-chart";
import { useRouter } from "next/navigation";

export default function DetailInfographic() {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);
  const router = useRouter();

  useEffect(() => {
    const data = getFeedbackData();
    setFeedbackData(data);
  }, []);

  const practiceHandler = () => {
    router.push("/dashboard/latihan");
  };

  return (
    <section className='bg-[#FFEDCE] p-3 xl:py-8 xl:px-12 my-12 rounded-2xl'>
      <h1 className='font-medium xl:text-2xl'>Feedback Latihan Terakhir</h1>
      <div className='flex gap-x-4 xl:my-6 items-center'>
        <div className='flex basis-[78%] my-4'>
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
                <div className='text-sm xl:text-base '>{item.name}</div>
                <div className='text-lg xl:text-2xl'>{item.score}/10</div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={practiceHandler}
          className='bg-[#FF9D42] font-medium py-1 xl:py-3 xl:px-7 px-3 h-fit rounded-xl text-white'
        >
          Latihan Lagi
        </button>
      </div>
      <div className='bg-white rounded-2xl py-4 xl:px-8 px-4'>
        <h1 className='font-medium xl:text-xl mb-4'>Progress Kamu</h1>
        <div className='w-full flex justify-between h-fit'>
          <LineChart />
          <RadarChart />
        </div>
        <div></div>
      </div>
    </section>
  );
}
