import { Feature } from "@/lib/jango/types";
import Image from "next/image";

const features = [
  {
    name: "Latihan",
    description: "Latihan public speaking dengan berbagai topik",
    img: "/image-assets/latihan.png",
  },
  {
    name: "JangoAI",
    description: "Menggunakan AI untuk mendapatkan feedback",
    img: "/image-assets/jango-ai.png",
  },
  {
    name: "Lacak Progress",
    description: "Lacak progress kamu dari waktu ke waktu",
    img: "/image-assets/lacak-progress.png",
  },
];

export default function Feature() {
  return (
    <section className='bg-[#F5CC86] w-screen flex flex-col items-center -mt-16'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8 lg:mb-10 xl:mb-12'>Fitur Kami</h1>
      <div className='flex md:max-w-[95%] lg:max-w-[82%] xl:max-w-[73%] gap-x-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-16'>
        {features.map((feature: Feature) => (
          <div key={feature.name} className='relative basis-1/3 rounded-2xl overflow-hidden'>
            <Image
              src={feature.img}
              alt={feature.name}
              width={370}
              height={249}
              quality={100}
              className='w-full'
            />
            <div className="flex flex-col bg-white px-1 py-4 gap-y-1 items-center">
              <h2 className="font-medium">{feature.name}</h2>
              <p className="text-center">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
