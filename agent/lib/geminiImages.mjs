import { requireEnv, getEnv } from "./env.mjs";

function apiUrl() {
  const model = getEnv("GEMINI_IMAGE_MODEL", "gemini-2.5-flash-image");
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}

// プロンプトから画像を生成し、Bufferを返す
export async function generateImage(prompt) {
  const res = await fetch(apiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": requireEnv("GEMINI_API_KEY"),
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  const body = await res.text();
  if (!res.ok) {
    throw new Error(`Gemini image generation failed: ${res.status} ${body}`);
  }

  const data = JSON.parse(body);
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.data);
  if (!imagePart) {
    throw new Error(`Gemini image generation returned no image data: ${body}`);
  }
  return Buffer.from(imagePart.inlineData.data, "base64");
}
