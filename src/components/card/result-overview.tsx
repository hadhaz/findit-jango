import { FeedbackOverview } from "@/lib/jango/types";
import Image from "next/image";

export default function ResultOverview({
  color,
  icon,
  name,
  suggestion,
  unit,
  value,
}: FeedbackOverview) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className='px-5 py-5 xl:max-w-[90%] rounded-2xl'
    >
      <h2 className='text-sm xl:text-base'>{name}</h2>
      <div className='flex justify-between my-3 px-2 xl:px-8'>
        <h3 className='text-2xl xl:text-3xl'>
          {value} <span className='text-base'>{unit}</span>
        </h3>
        <Image src={icon} alt={name} width={40} height={40} quality={100} />
      </div>
      {suggestion && (
        <p className='text-xs xl:text-sm py-1 px-2 rounded-xl bg-[#FFC998] text-[#A80D0D]'>
          {suggestion}
        </p>
      )}
    </div>
  );
}
