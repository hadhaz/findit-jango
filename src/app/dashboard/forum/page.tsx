"use client";
import { useEffect, useState } from "react";
import SearchForum from "./search-forum";
import { Forum } from "@/lib/jango/types";
import getForum from "@/lib/jango";
import ForumCard from "./forum-card";

export default function Forum() {
  const [forum, setForum] = useState<Forum[]>([]);

  useEffect(() => {
    const data = getForum();
    setForum(data);
  }, []);

  return (
    <div>
      <SearchForum />
      <div className="flex flex-col gap-y-8 my-10">
        {forum.map((item: Forum) => (
          <ForumCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
