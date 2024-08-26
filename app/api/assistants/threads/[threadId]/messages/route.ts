import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";
import { json } from "stream/consumers";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content } = await request.json();

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}

// List all messages on the thread
export async function GET(request, { params: { threadId } }) {
  try {
    const res = await openai.beta.threads.messages.list(threadId);

    return new Response(JSON.stringify(res), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error in GET request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}