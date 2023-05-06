import Image from "next/image";
import CallToAction from "./call-to-action";

export default function Hero() {
  return (
    <div className='w-full relative mt-[3vh] min-h-[80vh]'>
      <Image
        src='/image-background/homepage.svg'
        alt='hero background'
        fill
        className='-z-10 object-cover object-center'
        quality={100}
      />
      <section className='flex p-12 md:p-18 lg:p-24 pb-0 md:pb-0 lg:pb-0 xl:pb-0 xl:p-32'>
        <CallToAction />
        <Image
          src='/image-assets/laptop.png'
          width={700}
          height={500}
          alt='laptop'
          quality={100}
          className="w-2/5"
        />
      </section>
    </div>
  );
}
