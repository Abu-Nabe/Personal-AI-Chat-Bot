import { NextResponse } from "next/server";
import { API_CONFIG } from "../consts/config";

export async function POST(req: Request) {
  const { userMessage } = await req.json();

  const response = await fetch(API_CONFIG.AI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
