import Image from "next/image";
import CallToAction from "./call-to-action";

export default function Hero() {
  return (
    <div className=''>
      <Image
        src='/image-background/homepage.svg'
        alt='hero background'
        fill
        className='-z-10'
        quality={100}
      />
      <section className='flex'>
        <CallToAction />
        <Image
          src='/image-assets/laptop.png'
          width={500}
          height={500}
          alt='laptop'
          quality={100}
        />
      </section>
    </div>
  );
}
