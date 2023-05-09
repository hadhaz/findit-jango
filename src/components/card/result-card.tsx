import { Result } from "@/lib/jango/types";

export default function ResultCard({ color, name, value }: Result) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className='gap-x-4 xl:gap-x-8 w-fit px-8 py-3 shadow-lg rounded-xl'
    >
      <div className='flex flex-col'>
        <h2 className='text-sm xl:text-base'>{name}</h2>
        <div className='flex justify-center gap-x-3 text-2xl xl:text-3xl'>
          <span>{value}</span>
          {Number(value) > 75 && <span>&#x1F525;</span>}
        </div>
      </div>
    </div>
  );
}
