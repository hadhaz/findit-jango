import Image from "next/image";
import QuestQuiz from "./quest-quiz";

export default function ContentQuest() {
  return (
    <section className='flex flex-col gap-y-4 basis-3/4 pr-12 border-r-2'>
      <h3 className='font-semibold text-lg xl:text-xl'>
        Persiapan Awal Public Speaking
      </h3>
      <p>
        Persiapan awal dalam public speaking sangat penting untuk memastikan
        kesuksesan presentasi yang kamu berikan. Tahap persiapan awal ini
        mencakup beberapa hal, seperti memahami tema atau topik yang akan kamu
        presentasikan, menentukan audiens yang akan kamu sampaikan materi,
        menyiapkan materi presentasi secara matang dan memikirkan strategi atau
        cara yang akan kamu gunakan dalam menyampaikan materi. Selain itu, kamu
        juga harus memperhatikan aspek-aspek teknis, seperti pengaturan tempat,
        alat bantu presentasi, serta suara dan penampilanmu saat berbicara di
        depan umum. Dengan mempersiapkan diri secara matang dan teliti di tahap
        persiapan awal ini, kamu akan lebih siap dan percaya diri dalam
        menghadapi presentasi dan menjadi seorang pembicara yang sukses.
      </p>
      <h3 className='font-semibold text-lg xl:text-xl'>
        Peregangan Mulut Sebelum Mulai Berbicara
      </h3>
      <Image
        src='/image-assets/example-quest.png'
        alt='example quest'
        width={1920}
        height={1080}
        quality={100}
        className='rounded-xl'
      />
      <QuestQuiz />
    </section>
  );
}
