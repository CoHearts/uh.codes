import { NextRequest, NextResponse } from "next/server";

const HF_SPACE_URL =
  process.env.HF_SPACE_URL || "https://udasri-uh-info.hf.space";
const HF_ASK_PATH = process.env.HF_SPACE_ASK_PATH || "/ask";
const MAX_WAKE_ATTEMPTS = 12;
const POLL_INTERVAL_MS = 5000;

type AskPayload = {
  question?: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      cache: "no-store",
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function wakeSpace() {
  for (let i = 0; i < MAX_WAKE_ATTEMPTS; i += 1) {
    const healthCheck = await fetchWithTimeout(
      `${HF_SPACE_URL}/`,
      { method: "GET" },
      7000,
    );

    if (healthCheck && healthCheck.status !== 503) {
      return true;
    }

    await sleep(POLL_INTERVAL_MS);
  }

  return false;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as AskPayload;

  if (!body.question || !body.question.trim()) {
    return NextResponse.json(
      { error: "Question is required" },
      { status: 400 },
    );
  }

  const payload = JSON.stringify({ question: body.question });
  const endpoint = `${HF_SPACE_URL}${HF_ASK_PATH}`;

  let upstreamResponse = await fetchWithTimeout(
    endpoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    },
    10000,
  );

  if (!upstreamResponse || upstreamResponse.status === 503) {
    const awake = await wakeSpace();

    if (!awake) {
      return NextResponse.json(
        {
          error: "AI service is waking up. Please try again in a few seconds.",
        },
        { status: 503 },
      );
    }

    upstreamResponse = await fetchWithTimeout(
      endpoint,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      },
      30000,
    );
  }

  if (!upstreamResponse) {
    return NextResponse.json(
      { error: "Unable to reach AI service" },
      { status: 503 },
    );
  }

  const contentType = upstreamResponse.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await upstreamResponse.json();
    return NextResponse.json(data, { status: upstreamResponse.status });
  }

  const text = await upstreamResponse.text();

  return NextResponse.json(
    { error: text || "Unexpected response from AI service" },
    { status: upstreamResponse.status || 500 },
  );
}
