import Image from "next/image";

export default function Footer() {
  return (
    <footer className='bg-[#FF9330] flex items-center justify-between p-14'>
      <div className="flex flex-col items-center">
        <Image
          src='/image-assets/jango-logo-white.svg'
          width={150}
          height={50}
          alt='logo'
        />
        <div className="flex justify-between w-full mt-5">
          <Image
            src='/image-assets/instagram.svg'
            width={100}
            height={100}
            className="w-1/5"
            alt='instagram'
          />
          <Image
            src='/image-assets/twitter.svg'
            width={100}
            height={100}
            className="w-1/5"
            alt='twitter'
          />
          <Image
            src='/image-assets/linkedin.svg'
            width={100}
            height={100}
            className="w-1/5"
            alt='linkedin'
          />
        </div>
      </div>
      <div className='flex flex-col text-white text-xl xl:text-2xl gap-y-2'>
        <div>Tentang Kami</div>
        <div>Pertanyaan Umum</div>
        <div>Testimoni</div>
        <div>Kebijakan Privasi</div>
      </div>
    </footer>
  );
}
