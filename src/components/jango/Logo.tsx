import Link from "next/link";
import Image from "next/image";

export default function LogoJango() {
  return (
    <div>
      <Link
        href='/'
        aria-label='Kembali ke menu utama'
        className='font-semibold text-2xl text-[#FF9D42]'
      >
        <Image
          src='/image-assets/jango-logo.svg'
          width={100}
          height={100}
          alt='logo'
          quality={100}
        />
      </Link>
    </div>
  );
}
