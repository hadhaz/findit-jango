import Image from "next/image";

type InfoCardProps = {
  title: string;
  value: number | string;
  unit: string;
  imgSrc: string;
  imgAlt: string;
  color: string;
};

export default function SummaryInfographic() {
  return (
    <section className='xl:w-4/5 pt-10 flex gap-x-6 xl:gap-x-10'>
      <InfoCard
        title='Rata-rata kecepatan bicara'
        value={164}
        unit='WPM'
        imgSrc='/image-assets/wpm.svg'
        imgAlt='arrow up'
        color='#E0F0FF'
      />
      <InfoCard
        title='Streak harian'
        value={3}
        unit='Hari'
        imgSrc='/image-assets/streak.svg'
        imgAlt='arrow up'
        color='#FFCCCC'
      />
      <InfoCard
        title='Topik yang disukai'
        value='Politik'
        unit=''
        imgSrc='/image-assets/topic-liked.svg'
        imgAlt='arrow up'
        color='#E0F0FF'
      />
    </section>
  );
}

function InfoCard({
  title,
  value,
  unit,
  imgSrc,
  imgAlt,
  color,
}: InfoCardProps) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className='w-1/3 xl:w-1/4 py-5 px-6 flex flex-col justify-between rounded-3xl shadow-lg'
    >
      <div>{title}</div>
      <div className='flex items-center justify-between gap-x-4 mt-1 xl:mt-4'>
        <div className='flex items-end gap-x-1 md:text-lg lg:text-xl'>
          <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            {value}
          </span>
          <span>{unit}</span>
        </div>
        <Image
          src={imgSrc}
          width={80}
          height={20}
          alt={imgAlt}
          className='w-full basis-1/4'
        />
      </div>
    </div>
  );
}
