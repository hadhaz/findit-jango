"use client";
import ResultCard from "@/components/card/result-card";
import DetailResult from "@/components/dashboard/detail-result";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Result() {
  const overallScore = useSelector(
    (state: RootState) => state.transcript.overallScore
  );
  const topic = useSelector((state: RootState) => state.transcript.topic);

  return (
    <div>
      <h1 className='text-2xl xl:text-3xl font-medium'>Feedback Penilaian</h1>
      <div className='w-full bg-[#F5F5F5] flex flex-col p-8 rounded-2xl my-4'>
        <div className='flex  gap-x-5 xl:gap-x-7 mb-4 xl:mb-8'>
          <ResultCard
            color='#FFE0C3'
            name='Skormu'
            value={overallScore + '/10'}
            key={"skor latihan"}
          />
          <ResultCard
            color='#BFE0FF'
            name='Topik'
            value={topic}
            key={"topik latihan"}
          />
        </div>
        <DetailResult />
      </div>
    </div>
  );
}
