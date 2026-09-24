import { requireEnv, getEnv } from "./env.mjs";

const ENDPOINT = "sake";

function baseUrl() {
  const domain = requireEnv("MICROCMS_SERVICE_DOMAIN");
  return `https://${domain}.microcms.io/api/v1/${ENDPOINT}`;
}

function headers() {
  return {
    "X-MICROCMS-API-KEY": requireEnv("MICROCMS_API_KEY"),
    "Content-Type": "application/json",
  };
}

// 既存カタログを全件取得（重複チェック用）。name/brand/purchaseUrlだけ取得して軽量化。
export async function listExistingSake() {
  const all = [];
  let offset = 0;
  const limit = 100;
  while (true) {
    const url = new URL(baseUrl());
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("offset", String(offset));
    url.searchParams.set("fields", "id,name,brand,purchaseUrl");

    const res = await fetch(url, { headers: headers() });
    if (!res.ok) {
      throw new Error(`microCMS sake listExistingSake failed: ${res.status} ${await res.text()}`);
    }
    const data = await res.json();
    all.push(...(data.contents ?? []));
    offset += limit;
    if (offset >= (data.totalCount ?? 0)) break;
  }
  return all;
}

// 既存銘柄を部分更新する
export async function updateSake(id, fields) {
  const res = await fetch(`${baseUrl()}/${id}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`microCMS sake updateSake failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.id;
}

// 新規銘柄を登録する。デフォルトで即公開（既存カタログと同じ運用に合わせる）。
// fields: { name, brewery, brand, price, description, imageUrl, purchaseUrl }
// 注意: 実スキーマにprefectureフィールドは存在しない。都道府県情報はdescriptionに含めること。
export async function createSake(fields) {
  const res = await fetch(baseUrl(), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`microCMS sake createSake failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.id;
}
