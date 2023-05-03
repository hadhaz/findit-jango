import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import { getMenu } from "@/lib/jango";
import { Menu } from "@/lib/jango/types";
import LogoJango from "@/components/jango/Logo";

export default async function Navbar() {
  const menu = await getMenu();
  return (
    <nav>
      <div className='block w-1/3 md:hidden'>
        <MobileMenu menu={menu} />
      </div>
      <div className='flex items-center justify-between py-4 px-10'>
        <LogoJango />
        {menu.length ? (
          <ul className='hidden md:flex'>
            {menu.map((item: Menu) => (
              <li key={item.name}>
                <Link href={item.path} className='py-1 px-4'>
                  {item.name}
                </Link>
              </li>
            ))}
            <button>
              <Link
                href='/login'
                className='py-1 px-4 bg-[#FF9D42] rounded-lg text-white'
              >
                Masuk
              </Link>
            </button>
          </ul>
        ) : null}
      </div>
    </nav>
  );
}
