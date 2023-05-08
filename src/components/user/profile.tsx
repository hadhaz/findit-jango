import Image from "next/image";
import UserNav from "./user-nav";

export default function UserProfile() {
  return (
      <div className='flex flex-col items-center gap-y-2 mb-[10%]'>
        <Image
          src='/image-assets/user-photo.png'
          width={100}
          height={100}
          alt='user'
        />
        <h1 className='font-medium lg:text-xl xl:text-2xl'>Rachel Naragifta</h1>
      </div>
  );
}
