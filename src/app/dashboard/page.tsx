import ArticleCollection from "@/components/dashboard/article-collection";
import Infographic from "@/components/dashboard/infographic";
import localFont from "next/font/local";


export default function Dashboard() {
  return (
    <>
      <h1 className='text-xl lg:text-2xl xl:text-3xl font-semibold'>
        Selamat datang kembali, Rachel! 👋
      </h1>
      {/* @ts-expect-error Async Server Component */}
      <Infographic />
      <ArticleCollection />
    </>
  );
}
