import LogoJango from "@/components/jango/Logo";
import UserProfile from "@/components/user/profile";
import UserNav from "@/components/user/user-nav";

export default function Sidebar() {
  return (
    <div className='flex flex-col items-center basis-1/4 h-full gap-y-6'>
      <LogoJango />
      <div className='flex flex-col h-full pt-12 xl:pt-[16%] items-center bg-[#FEFEFE] w-full rounded-xl py-4'>
        <UserProfile />
        <UserNav />
      </div>
    </div>
  );
}
