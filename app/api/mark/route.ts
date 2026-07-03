import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { buildMarkingSystem } from "@/lib/tutor-prompt";

export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.TUTOR_MODEL || "claude-sonnet-5";

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "The Mark Scheme Simulator needs an ANTHROPIC_API_KEY. Add it to your environment (see README).",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: { question?: string; answer?: string; marks?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const question = (body.question ?? "").trim();
  const answer = (body.answer ?? "").trim();
  if (!question || !answer) {
    return new Response(
      JSON.stringify({ error: "Provide both the question and your answer." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const user = `QUESTION:\n${question}\n\n${
    body.marks ? `MARKS AVAILABLE: ${body.marks}\n\n` : ""
  }STUDENT'S ANSWER:\n${answer}`;

  const client = new Anthropic();
  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 1800,
      system: buildMarkingSystem(),
      messages: [{ role: "user", content: user }],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch {
          controller.enqueue(
            encoder.encode("\n\n_[Marking was interrupted — please retry.]_")
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message =
      err instanceof Anthropic.APIError
        ? `Anthropic API error (${err.status}): ${err.message}`
        : "Unexpected error while marking.";
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}
