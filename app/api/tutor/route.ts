import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import {
  buildTutorSystem,
  TutorMode,
  ExplainStyle,
  LearnerProfile,
} from "@/lib/tutor-prompt";

export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.TUTOR_MODEL || "claude-sonnet-5";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "The AI tutor needs an ANTHROPIC_API_KEY. Add it to your environment (see README) — everything else on the platform works without it.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: {
    messages: ChatMessage[];
    mode?: TutorMode;
    style?: ExplainStyle;
    chapterId?: string;
    profile?: LearnerProfile;
  };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = (body.messages ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim()
    )
    .slice(-24); // keep the conversation bounded

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return new Response(
      JSON.stringify({ error: "Send at least one user message." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const client = new Anthropic();
  const system = buildTutorSystem({
    mode: body.mode ?? "tutor",
    style: body.style ?? "alevel",
    chapterId: body.chapterId,
    profile: body.profile,
  });

  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 1600,
      system,
      messages,
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
        } catch (err) {
          controller.enqueue(
            encoder.encode(
              "\n\n_[The tutor stream was interrupted — please try again.]_"
            )
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
        : "Unexpected error contacting the tutor.";
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}
