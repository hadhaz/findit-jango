import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function CallToAction() {
  return (
    <div className={rubik.className + " flex flex-col gap-y-3 basis-1/2 pt-10"}>
      <h1 className='text-2xl lg:text-3xl'>
        <strong>Kuasai</strong> <em>Public speaking</em>
        <br />
        <strong>Dapatkan feedback</strong> melalui <br />
        dukungan <strong>AI</strong>
      </h1>
      <button className='bg-[#FF9D42] rounded-xl w-fit px-6 py-1 font-medium text-white'>
        Mulai
      </button>
    </div>
  );
}
