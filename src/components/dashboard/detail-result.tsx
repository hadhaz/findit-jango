"use client";

import { getFeedbackOverview } from "@/lib/jango";
import { FeedbackOverview } from "@/lib/jango/types";
import { useEffect, useState } from "react";
import ResultOverview from "../card/result-overview";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { analyze } from "@/store/transcriptSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DetailResult() {
  const [feedbackOverview, setFeedbackOverview] = useState<FeedbackOverview[]>(
    []
  );
  const [feedback, setFeedback] = useState<
    { "highlighted sentence": string; feedback: string }[]
  >([]);

  const transcript = useSelector((state: RootState) => state.transcript.text);
  const time = useSelector((state: RootState) => state.transcript.time);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const sendRequest = async () => {
      const raw: string = await fetch("/api/jangoai/score", {
        body: JSON.stringify(transcript),
        method: "POST",
      }).then(val => val.json());

      const data = getFeedbackOverview();

      // check if json is valid
      const isValid = raw.includes("{") && raw.includes("}");
      if (!isValid) return;

      const jsonStart = raw.indexOf("{");
      const jsonEnd = raw.lastIndexOf("}");
      const jsonText = raw.slice(jsonStart, jsonEnd + 1);
      const json = JSON.parse(jsonText);

      // split text to words using regex so I can word per minute
      const words = transcript.match(/\b[-?(\w+)?]+\b/gi) || [];
      const wordPerMinute = Math.round(words?.length / (time / 1000 / 60));

      json["pace"] = wordPerMinute;

      data.map((item: FeedbackOverview) => {
        item.value = json[item.slug];
      });

      dispatch(analyze(json));

      setFeedbackOverview(data);
    };
    if (transcript && transcript !== "") {
      sendRequest();
    }
  }, [transcript, time, dispatch]);

  useEffect(() => {
    const sendRequest = async () => {
      const raw = await fetch("/api/jangoai/feedback", {
        body: JSON.stringify(transcript),
        method: "POST",
      }).then(val => val?.json());

      // check if array json is valid
      const isValid = raw.includes("[") && raw.includes("]");
      if (!isValid) return;

      const jsonStart = raw.indexOf("[");
      const jsonEnd = raw.lastIndexOf("]");
      const jsonText = raw.slice(jsonStart, jsonEnd + 1);
      const rawJson = JSON.parse(jsonText);

      setFeedback(rawJson);
    };

    if (transcript) {
      sendRequest();
    }
    // extract [] from transcript
  }, [transcript]);

  useEffect(() => {
    if (!transcript) {
      router.push("/dashboard/latihan");
    }
  }, [transcript, router]);

  console.log(feedbackOverview);

  if (!transcript) return <></>;

  return (
    <section className='flex'>
      <div className='basis-1/3 px-5 py-6 bg-white rounded-l-xl gap-y-3 flex flex-col'>
        <h1 className='text-xl font-medium mb-2'>Pembawaaan pembicaraan</h1>
        {feedbackOverview?.map((feedback: FeedbackOverview) => {
          return (
            <ResultOverview
              key={feedback.name}
              color={feedback.color}
              icon={feedback.icon}
              name={feedback.name}
              suggestion={feedback.suggestion}
              unit={feedback.unit}
              value={feedback.value}
              slug={feedback.slug}
            />
          );
        })}
      </div>
      <div className='basis-2/3 bg-[#F2F9FF] px-5 py-6 rounded-r-xl'>
        <h1 className='text-xl font-medium'>Feedback Materi</h1>
        <table className='w-full mt-4 rounded-2xl table-fixed overflow-hidden'>
          <thead>
            <tr className='text-left bg-[#9FD1FF]'>
              <th className='text-center py-3'>Konten Isu</th>
              <th className='text-center py-3'>Umpan Balik</th>
            </tr>
          </thead>
          <tbody className=''>
            {feedback?.map((item, index) => {
              return (
                <tr className='text-left border-2' key={index}>
                  <td className='px-2 py-1 border-2'>
                    {item["highlighted sentence"]}
                  </td>
                  <td className='px-2 py-1 border-2'>{item.feedback}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
