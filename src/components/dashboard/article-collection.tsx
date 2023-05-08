"use client";

import { getArticles } from "@/lib/jango";
import { Article } from "@/lib/jango/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ArticleCollection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const data = getArticles();
    setArticles(data);
  }, []);

  return (
    <section>
      <h1 className='text-xl xl:text-3xl font-medium'>
        Kiat-Kiat Jadi #Jagoan Public Speaking 👇
      </h1>
      <div className='flex xl:px-6 gap-x-4 xl:gap-x-9 pt-6 justify-center'>
        {articles.map((article: Article) => (
          <div
            key={article.title}
            className='bg-[#BFE0FF] basis-1/3 p-3 xl:py-5 xl:px-10 rounded-xl relative flex flex-col gap-y-1'
          >
            <Image
              src='/image-assets/expand.svg'
              alt='expand'
              width={20}
              height={20}
              className='absolute top-3 right-3'
            />
            <div className="basis-full">
              <h1 className='font-medium max-w-[95%]'>{article.title}</h1>
              <h2 className="text-sm"><em>Bacaan {article.timeRead} menit</em></h2>
            </div>
            <p className='mt-3 xl:mt-6 text-sm'>{article.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
