import Infographic from "@/components/dashboard/infographic";

export default function Dashboard() {
  return (
    <div className='bg-[#FEFEFE] overflow-scroll basis-3/4 p-8 lg:p-12 m-8 ml-0 rounded-xl'>
      <h1 className='text-xl lg:text-2xl xl:text-3xl font-semibold'>
        Selamat datang kembali, Rachel! 👋
      </h1>
      {/* @ts-expect-error Async Server Component */}
      <Infographic />
    </div>
  );
}
