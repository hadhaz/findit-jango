import { Feature } from "@/lib/jango/types";
import Image from "next/image";

export default function FeatureCard(feature: Feature) {
  return (
    <div className='relative basis-1/3 rounded-2xl overflow-hidden shadow-xl'>
      <Image
        src={feature.img}
        alt={feature.name}
        width={370}
        height={249}
        quality={100}
        className='w-full'
      />
      <div className='flex flex-col h-full text-lg xl:text-xl bg-white px-1 py-4 gap-y-1 items-center'>
        <h2 className='font-medium'>{feature.name}</h2>
        <p className='text-center'>{feature.description}</p>
      </div>
    </div>
  );
}
