import { getColor } from "@/lib/jango";
import { Forum } from "@/lib/jango/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ForumCard({
  author,
  content,
  dislike,
  img,
  like,
  time,
  title,
  topic,
}: Forum) {
  return (
    <div className='flex gap-x-4 relative p-6 h-[25vh] bg-[#F5F5F5] rounded-lg'>
      <Image
        src={img}
        alt={title}
        width={133}
        height={113}
        quality={100}
        className='rounded-lg h-full w-fit'
      />
      <div className='flex flex-col h-full w-full'>
        <div className='basis-5/6'>
          <h1 className='font-medium text-lg lg:text-xl'>{title}</h1>
          <h2 className='italic font-sm lg:font-base mb-2'>{author}</h2>
          <div className='flex gap-x-2'>
            {topic.map((item: string) => (
              <span
                key={item}
                style={{
                  backgroundColor: getColor(item)[0],
                  color: getColor(item)[1],
                }}
                className='rounded-xl px-2'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='self-end mr-4 mb-4'>
          <div className='flex w-fit bg-white rounded-2xl'>
            <div className='basis-1/2 flex border-r-2 gap-x-2 px-4 py-2 items-center'>
              <Image
                src='/image-assets/like.svg'
                alt='like'
                width={20}
                height={20}
              />
              <span>{like}</span>
            </div>
            <div className='basis-1/2 flex gap-x-2 px-4 py-2 items-center'>
              <Image
                src='/image-assets/dislike.svg'
                alt='dislike'
                width={20}
                height={20}
              />
              <span>{dislike}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
