"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quest = [
  {
    section: 1,
    subtitle: [
      "Pendahuluan",
      "Persiapan Sebelum Melakukan Public Speaking",
      'Mengenal Teknik "Peregangan Mulut"',
    ],
  },
  {
    section: 2,
    subtitle: [
      "Pendahuluan",
      "Mengenal Dirimu Sendiri",
      "Mengenal Berbagai Audiens",
      "Mengenal Jenis Materi",
    ],
  },
  {
    section: 3,
    subtitle: ["Pendahuluan", "Analisis SWOT diri", "Mengenal berbagai macam"],
  },
  {
    section: 4,
    subtitle: ["Relaksasi Sebelum Berbicara", "Mindfulness", "Meditasi"],
  },
];

export default function NavigationQuest() {
  return (
    <section className='basis-1/4'>
      {quest.map((item, index) => {
        return <NavigationList key={index} item={item} />;
      })}
    </section>
  );
}

function NavigationList({ item }: any) {
  const [subtitle, setSubtitle] = useState<
    {
      listName: string;
      done: boolean;
    }[]
  >([]);
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    const data = item.subtitle.map((sub: string) => {
      return {
        listName: sub,
        done: false,
      };
    });
    setSubtitle(data);
  }, [item]);

  return (
    <div className='mb-4'>
      <div
        className='flex justify-between items-center'
        onClick={() => {
          setActive(prev => !prev);
        }}
      >
        <h1 className='font-medium xl:text-lg'>Bagian {item.section}</h1>
        <Image
          src={active ? "/image-assets/up.svg" : "/image-assets/down.svg"}
          alt='arrow'
          width={20}
          height={20}
        />
      </div>
      <AnimatePresence>
        {active && (
          <motion.ul
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className='mt-2 flex-col flex gap-y-1'
          >
            {subtitle.map((sub: any, index: number) => {
              return (
                <li key={index} className='flex gap-x-2'>
                  <Image
                    src={
                      sub.done
                        ? "/image-assets/read.svg"
                        : "/image-assets/not-read.svg"
                    }
                    alt='expand'
                    width={30}
                    height={30}
                    className="w-fit"
                  />
                  <p className="min-h-fit">{sub.listName}</p>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
