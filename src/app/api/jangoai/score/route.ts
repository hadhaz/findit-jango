import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const text = await request.json();
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      'Act as professional public speaking coach, analyze this transcript and give me output just like this:\n{"overallScore":number,"smoothness":number,"structure":number,"topic":string}\n\nwhere overallScore is overall aspect of public speaking quality, and smoothness is the minimization of filler word and something else, while structure is how the transcript flow. And make sure topic value just in 1-2 word\n' +
      text +
      "\n",
    temperature: 0.1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const raw = response.data.choices[0].text?.trim() || "{}";

  return NextResponse.json(raw);
}
