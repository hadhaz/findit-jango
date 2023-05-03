import { getUserMenu } from "@/lib/jango";
import { UserMenu } from "@/lib/jango/types";
import Image from "next/image";
import Link from "next/link";

export default async function UserNav() {
  const menu: UserMenu[] = await getUserMenu();

  return (
    <nav className='w-[90%] flex justify-center'>
      <ul className='flex flex-col gap-y-6'>
        {menu.map((item: UserMenu) => (
          <li key={item.name}>
            <Link href={item.path} className='flex gap-x-3 text-lg'>
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
