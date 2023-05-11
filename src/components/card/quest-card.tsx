import { Quest } from "@/lib/jango/types";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QuestCard({
  description,
  img,
  progress,
  questNumber,
  title,
}: Quest) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      className='relative md:h-[20vh] w-full rounded-xl overflow-hidden'
    >
      <Image
        src={img}
        alt={title}
        fill
        quality={100}
        className='object-cover'
      />
      <div className='absolute flex w-full bg-overlay h-full items-end p-4'>
        <div className='basis-[80%]'>
          <h2 className='text-lg xl:text-xl'>Quest {questNumber}</h2>
          <h1 className='text-xl xl:text-2xl font-medium max-w-[80%]'>
            {title}
          </h1>
          <p className='max-w-[75%]'>{description}</p>
        </div>
        <div className='border-l-4 py-2 px-4 xl:px-6'>
          {progress > 0 ? (
            <div className='flex gap-x-2 items-center'>
              <span className='text-2xl xl:text-3xl font-medium'>
                {progress} %
              </span>
              <span>Selesai</span>
            </div>
          ) : (
            <div>
              <h3>Quest {questNumber}</h3>
              <p>Belum diselesaikan</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
