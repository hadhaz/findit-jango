"use client";
import { getQuestByLevel } from "@/lib/jango";
import { Quest } from "@/lib/jango/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import QuestCard from "../card/quest-card";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Quest({ level }: { level: string }) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [quest, setQuest] = useState<Quest[]>([]);

  useEffect(() => {
    const data = getQuestByLevel(level);
    setQuest(data);

    if (level === "Pemula") setDropdown(true);
  }, [level]);

  return (
    <section>
      <div
        onClick={() => setDropdown(!dropdown)}
        className='flex justify-between cursor-pointer'
      >
        <h1 className='text-2xl xl:text-3xl font-medium'>{level}</h1>
        <Image
          src={dropdown ? "/image-assets/up.svg" : "/image-assets/down.svg"}
          alt='arrow'
          width={30}
          height={30}
        />
      </div>
      <div className='flex flex-col gap-y-3 xl:gap-y-5 my-5'>
        <AnimatePresence>
          {dropdown &&
            quest.map((item: Quest) => (
              <QuestCard
                key={item.title}
                img={item.img}
                title={item.title}
                description={item.description}
                progress={item.progress}
                questNumber={item.questNumber}
                overlay={item.overlay}
              ></QuestCard>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
