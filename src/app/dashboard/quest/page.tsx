import Quest from "@/components/quest/quest";
import { level } from "@/lib/jango";
import { QuestLevel } from "@/lib/jango/types";
import Image from "next/image";

export default function QuestPage() {
  return (
    <>
      <Image
        src={"/image-assets/jango-quest.svg"}
        alt='jango quest'
        width={200}
        height={50}
        className="mb-6 xl:mb-8"
      />
      {level.map((item: string) => (
        <Quest key={item} level={item} />
      ))}
    </>
  );
}
