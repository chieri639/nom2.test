import { requireEnv, getEnv } from "./env.mjs";

function baseUrl() {
  const domain = requireEnv("MICROCMS_SERVICE_DOMAIN");
  const endpoint = getEnv("MICROCMS_ENDPOINT", "article");
  return `https://${domain}.microcms.io/api/v1/${endpoint}`;
}

function headers() {
  return {
    "X-MICROCMS-API-KEY": requireEnv("MICROCMS_API_KEY"),
    "Content-Type": "application/json",
  };
}

// 直近記事のタイトル・カテゴリを取得（テーマ重複チェック用）
export async function listRecent(limit = 30) {
  const url = new URL(baseUrl());
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("orders", "-publishedAt");
  url.searchParams.set("fields", "id,title,category,publishedAt");

  const res = await fetch(url, { headers: headers() });
  if (!res.ok) {
    throw new Error(`microCMS listRecent failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.contents ?? [];
}

// 記事を下書き（status=draft）として作成する。fieldsはtitle/category/content/imageUrl等
export async function createDraft(fields) {
  const url = new URL(baseUrl());
  url.searchParams.set("status", "draft");

  const res = await fetch(url, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`microCMS createDraft failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.id;
}

// 既存の下書きを部分更新する（statusはdraftのまま維持）
export async function updateDraft(id, fields) {
  const url = new URL(`${baseUrl()}/${id}`);
  url.searchParams.set("status", "draft");

  const res = await fetch(url, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`microCMS updateDraft failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.id;
}

export function draftEditUrl(id) {
  const domain = requireEnv("MICROCMS_SERVICE_DOMAIN");
  const endpoint = getEnv("MICROCMS_ENDPOINT", "article");
  return `https://${domain}.microcms.io/apis/${endpoint}/contents/${id}`;
}
