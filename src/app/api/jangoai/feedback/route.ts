import { NextResponse } from "next/server";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const text = await request.json();
  console.log(request);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Bertindaklah seperti pelatih public speaking profesional, kamu akan menganalisis dan memberikan feedback berupa saran dan masukan pada data transkrip. Kamu tidak perlu menganalisis semuanya, kamu cukup menekankan pada paragraf atau frasa tertentu yang kamu nilai penting. Kamu berikan outputnya dalam bentuk array json seperti ini:\n[{\"highlighted sentence\": string, \"feedback\": string}]\n\n${text}\n\nOutput Valid JSON:`,
    temperature: 0.8,
    max_tokens: 3600,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const raw = response.data.choices[0].text?.trim() || "{}";
  
  return NextResponse.json(raw);
}
