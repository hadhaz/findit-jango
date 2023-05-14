import ContentQuest from "@/components/quest/content-quest";
import NavigationQuest from "@/components/quest/navigation-quest";
import { getQuestByLevel } from "@/lib/jango";
import Image from "next/image";

export default function DetailQuest({ params }: any) {
  console.log(params);
  return (
    <div className='flex flex-col items-center gap-y-2'>
      <Image
        src='/image-assets/example-quest-up.png'
        alt='example quest'
        width={1920}
        height={1080}
        quality={100}
        className='rounded-xl'
      />
      <h1 className='text-xl xl:text-2xl font-medium max-w-sm text-center mt-6'>
        Persiapan Sebelum Melakukan Public Speaking
      </h1>
      <div className='flex gap-x-3'>
        <p>Kelas Pemula</p>
        <p>Quest ke-1</p>
      </div>
      <div className='flex mt-8 gap-x-4'>
        <ContentQuest />
        <NavigationQuest />
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const data = getQuestByLevel("pemula");
//   return {
//     props: {
//       data,
//     },
//   };
// }
