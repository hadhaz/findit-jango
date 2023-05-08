"use client";
import { getTestimony } from "@/lib/jango";
import { Testimony } from "@/lib/jango/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Testimony() {
  const [testimony, setTestimony] = useState<Testimony[]>([]);
  const router = useRouter();
  useEffect(() => {
    const data = getTestimony();
    setTestimony(data);
  }, []);

  const startClickHandler = () => {
    router.push("/dashboard");
  };

  return (
    <section className='z-10 mt-68 md:mt-24 bg-[#F8F8F8]'>
      <h1 className='text-2xl lg:text-4xl text-[#FF9D42] xl:text-5xl font-semibold text-center'>
        Testimoni
      </h1>
      <div className='flex flex-col items-center gap-y-10 xl:gap-y-10 my-12'>
        {testimony.map((item: Testimony, index: number) => (
          <div
            key={item.name}
            className='bg-white rounded-xl w-3/4 xl:w-[55%] flex p-5 xl:py-8 xl:px-20 items-center justify-between'
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={200}
              quality={100}
              className='aspect-square w-1/6'
              style={{
                order: index % 2 === 0 ? 0 : 1,
              }}
            />
            <div className='flex flex-col basis-4/5 gap-y-[1px]'>
              <div className='font-medium'>{item.name}</div>
              <div className=''>
                <em>{item.job}</em>
              </div>
              <div className='mt-5'>&quot;{item.testimony}&quot;</div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center my-36 gap-y-10'>
        <Image
          src='/image-assets/jango-logo-big.svg'
          width={180}
          height={180}
          alt="Jango's Logo"
        />
        <p className='w-[90%] md:w-3/4 xl:w-1/2 text-center text-lg xl:text-xl'>
          Apapun tingkat keahlian public speaking Anda, Jango akan membantu Anda
          mengasah keterampilan dan meningkatkan kemampuan Anda dengan cepat dan
          efektif. Bergabunglah dengan kami untuk meningkatkan keterampilan
          public speaking Anda dan siap untuk berbicara di depan umum dengan
          kepercayaan diri!
        </p>
        <button
          onClick={startClickHandler}
          className='bg-[#FF9D42] px-7 py-3 xl:px-10 xl:py-4 font-medium rounded-2xl text-white text-xl xl:text-2xl'
        >
          Mulai Belajar
        </button>
      </div>
    </section>
  );
}
