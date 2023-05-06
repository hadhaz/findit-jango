import { Feature } from "@/lib/jango/types";
import Image from "next/image";
import FeatureCard from "../card/FeatureCard";

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
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8 lg:mb-10 xl:mb-12'>
        Fitur Kami
      </h1>
      <div className='flex md:max-w-[95%] lg:max-w-[82%] xl:max-w-[73%] gap-x-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-16'>
        {features.map((feature: Feature) => (
          <FeatureCard
            key={feature.name}
            description={feature.description}
            name={feature.name}
            img={feature.img}
          />
        ))}
      </div>
    </section>
  );
}
