"use client";

import { useState } from "react";

export default function QuestQuiz() {
  const [answer, setAnswer] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const answer = data.get("quiz");
    if (answer === "C") {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
    setIsAnswer(true);
  };

  return (
    <div className='bg-[#F5f5f5] p-4 rounded-xl'>
      <h1 className='text-lg xl:text-xl font-medium mb-2'>Kuis</h1>
      <p className='xl:text-lg'>
        Apa saja hal yang harus dipersiapkan dalam tahap persiapan awal sebelum
        melakukan public speaking?
      </p>
      <form
        className='flex flex-col my-2 text-sm xl:text-base'
        onSubmit={submitHandler}
      >
        <div className='flex gap-x-2 my-1'>
          <input value='A' type='radio' id='A' name='quiz' />
          <label htmlFor='A'>
            Menentukan audiens dan memperhatikan aspek teknis saja.
          </label>
        </div>
        <div className='flex gap-x-2 my-1'>
          <input value='B' type='radio' id='B' name='quiz' />
          <label htmlFor='B'>
            Menyiapkan materi presentasi dan memperhatikan aspek teknis saja.
          </label>
        </div>
        <div className='flex gap-x-2 my-1'>
          <input value='C' type='radio' id='C' name='quiz' />
          <label htmlFor='C'>
            Menyiapkan materi presentasi secara matang dan memikirkan strategi
            atau cara yang akan kamu gunakan dalam menyampaikan materi.
          </label>
        </div>
        <div className='flex gap-x-2 my-1'>
          <input value='D' type='radio' id='D' name='quiz' />
          <label htmlFor='D'>
            Menentukan audiens dan memperhatikan aspek teknis saja.
          </label>
        </div>
        {!isAnswer && (
          <button className='mt-4 bg-[#C9D4EA] w-fit px-4 py-2 mx-auto rounded-lg'>
            Check your understanding
          </button>
        )}
      </form>
      {isAnswer && answer && (
        <div className='p-4 bg-green-200 rounded-lg'>
          C. Menyiapkan materi presentasi secara matang dan memikirkan strategi
        </div>
      )}
      {isAnswer && !answer && (
        <div className='p-4 bg-red-400 rounded-lg flex flex-col'>
          <p className='text-sm xl:text-base'>
            Jawaban kamu belum benar. Coba lagi ya!
          </p>
          <button
            onClick={() => setIsAnswer(false)}
            className='bg-slate-200 w-fit py-2 px-6 rounded-lg mx-auto'
          >
            Coba lagi
          </button>
        </div>
      )}
    </div>
  );
}
