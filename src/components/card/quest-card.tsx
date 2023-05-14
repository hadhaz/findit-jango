import { Quest } from "@/lib/jango/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function QuestCard({
  description,
  img,
  progress,
  questNumber,
  title,
  overlay,
}: Quest) {
  const router = useRouter();

  const directHandler = () => {
    router.push(
      `/dashboard/quest/${title
        .replaceAll(" ", "-")
        .toLowerCase()
        .replaceAll("?", "")
        .replaceAll(".", "")
        .replaceAll(":", "")
        .replaceAll("!", "")}`
    );
  };

  return (
    <motion.div
      onClick={directHandler}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      className='relative md:h-[24vh] w-full rounded-xl overflow-hidden'
    >
      <Image
        src={img}
        alt={title}
        fill
        quality={100}
        className='object-cover'
      />
      <div
        style={{
          backgroundImage: overlay
            ? "linear-gradient(to bottom, rgba(255,255,255,0.15) 30%, rgba(255, 255, 255, .3) 50%, rgba(255, 255, 255, 0.45) 100%"
            : "rgba(0,0,0,0)",
        }}
        className='absolute flex w-full h-full items-end p-4'
      >
        <div className='basis-[80%]'>
          <h2 className='text xl:text-lg'>Quest {questNumber}</h2>
          <h1 className='text-lg xl:text-xl font-medium max-w-[80%]'>
            {title}
          </h1>
          <p className='max-w-[75%] xl:text-base text-sm'>{description}</p>
        </div>
        <div className='border-l-4 py-2 px-4 xl:px-6'>
          {progress > 0 ? (
            <div className='flex gap-x-2 items-center'>
              <span className='text-xl xl:text-2xl font-medium'>
                {progress} %
              </span>
              <span>Selesai</span>
            </div>
          ) : (
            <div>
              <h3 className='font-medium'>Quest {questNumber}</h3>
              <p>Belum diselesaikan</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
