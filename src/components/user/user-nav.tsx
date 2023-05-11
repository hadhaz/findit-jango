"use client";

import { getUserMenu } from "@/lib/jango";
import { UserMenu } from "@/lib/jango/types";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { setCameraStart, setCameraWarning } from "@/store/cameraSlice";

export default function UserNav() {
  const router = useRouter();
  let pathname = usePathname();
  const [menu, setMenu] = useState<UserMenu[]>([]);
  const cameraStart = useSelector(
    (state: RootState) => state.camera.cameraStarted
  );
  const dispatch = useDispatch();

  function navHandler(path: string) {
    if (
      cameraStart &&
      path !== "/dashboard/latihan" &&
      pathname === "/dashboard/latihan"
    ) {
      dispatch(setCameraWarning(true));
    }
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
      <ul className='flex flex-col gap-y-[3vh]'>
        {menu.map((item: UserMenu) => (
          <li
            key={item.name}
            onClick={() => navHandler(item.path)}
            style={{
              backgroundColor: pathname === item.path ? "#FEDCBD" : "",
            }}
            className='flex cursor-pointer items-center gap-x-3 py-[4%] px-4 xl:px-7 rounded-xl text-lg lg:text-xl xl:text-2xl'
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className='w-[18%] xl:w-[12%]'
            />
            <div className=''>{item.name}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
