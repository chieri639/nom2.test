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
// サイト側の自動イベントスクレイパーが同じarticleエンドポイントに大量投稿しているため、
// category=eventのエントリは除外する（除外しないと直近の本当の記事が埋もれてテーマ重複を検知できない）。
export async function listRecent(limit = 30) {
  const url = new URL(baseUrl());
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("orders", "-publishedAt");
  url.searchParams.set("filters", "category[not_equals]event");
  url.searchParams.set("fields", "id,title,category,publishedAt");

  const res = await fetch(url, { headers: headers() });
  if (!res.ok) {
    throw new Error(`microCMS listRecent failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.contents ?? [];
}

// 記事を下書き（status=draft）として作成する。fieldsはtitle/category/content/imageUrl等
// idを渡すと、そのcontentIdで作成する（PUT）。省略時はmicroCMSによる自動採番（POST）。
// idは英数字小文字と "_" "-" のみ（日本語・大文字不可、microCMSの制約）。
export async function createDraft(fields, id) {
  if (id && !/^[a-z0-9_-]+$/.test(id)) {
    throw new Error(`Invalid contentId "${id}": must match ^[a-z0-9_-]+$`);
  }

  const url = new URL(id ? `${baseUrl()}/${id}` : baseUrl());
  url.searchParams.set("status", "draft");

  const res = await fetch(url, {
    method: id ? "PUT" : "POST",
    headers: headers(),
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`microCMS createDraft failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.id;
}

// 既存コンテンツを部分更新する。
// 重要: すでに公開済み（publishedAtがある）のコンテンツに対して ?status=draft を付けてPATCHすると、
// 公開中の本体ではなく別の下書きリビジョンに書き込まれてしまい、サイトには一切反映されない
// （実際にこのバグで公開済み記事の修正が反映されない事故が発生した）。
// そのため、まず現在の公開状態を確認し、公開済みなら status パラメータなしでPATCHして
// 公開中の本体を直接更新する。未公開（下書きのみ）の場合は status=draft を維持する。
export async function updateDraft(id, fields) {
  const checkRes = await fetch(`${baseUrl()}/${id}`, { headers: headers() });
  const isPublished = checkRes.ok && !!(await checkRes.json()).publishedAt;

  const url = new URL(`${baseUrl()}/${id}`);
  if (!isPublished) {
    url.searchParams.set("status", "draft");
  }

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
  return `https://${domain}.microcms.io/apis/${endpoint}/${id}`;
}
