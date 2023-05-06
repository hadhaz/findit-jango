import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function CallToAction() {
  return (
    <div className={rubik.className + " flex flex-col gap-y-3 basis-1/2 pt-10"}>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl'>
        <strong>Kuasai</strong> <em>Public speaking</em>
        <br />
        <strong>Dapatkan feedback</strong> melalui <br />
        dukungan <strong>AI</strong>
      </h1>
      <button className='bg-[#FF9D42] mt-2 rounded-xl w-fit px-10 py-2 font-medium text-white'>
        Mulai
      </button>
    </div>
  );
}
