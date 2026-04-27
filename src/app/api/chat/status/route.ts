import { NextResponse } from "next/server";

const HF_SPACE_URL =
  process.env.HF_SPACE_URL || "https://udasri-uh-info.hf.space";

async function pingSpace() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(`${HF_SPACE_URL}/`, {
      method: "GET",
      signal: controller.signal,
      cache: "no-store",
    });

    return response.status !== 503;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const isReady = await pingSpace();

  if (isReady) {
    return NextResponse.json({ status: "ready" }, { status: 200 });
  }

  return NextResponse.json({ status: "waking" }, { status: 503 });
}
