"use client";

import { getUserMenu } from "@/lib/jango";
import { UserMenu } from "@/lib/jango/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserNav() {
  const router = useRouter();

  const [menu, setMenu] = useState<UserMenu[]>([]);
  const [menuActived, setMenuActived] = useState<string>("Beranda");

  function navHandler(itemName: string, path: string) {
    setMenuActived(itemName);
    router.push(`${path}`);
  }

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getUserMenu();
      setMenu(data);
    };
    fetchMenu();
  }, []);


  return (
    <nav className='w-[90%] flex justify-center'>
      <ul className='flex flex-col gap-y-5 xl:gap-y-8'>
        {menu.map((item: UserMenu) => (
          <li
            key={item.name}
            onClick={() => navHandler(item.name, item.path)}
            style={{
              backgroundColor: menuActived === item.name ? "#FEDCBD" : "",
            }}
            className='flex cursor-pointer items-center gap-x-3 py-3 px-4 xl:px-7 rounded-xl text-lg lg:text-xl xl:text-2xl'
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className='w-[12%]'
            />
            <div className=''>{item.name}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
