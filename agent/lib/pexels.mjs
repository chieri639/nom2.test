import { requireEnv } from "./env.mjs";

const SEARCH_URL = "https://api.pexels.com/v1/search";

// キーワードに合う一般的な写真を検索する。商用利用可・改変可のPexelsライセンス。
// 返り値のphotographer/photographerUrl/pexelsUrlはキャプションでの出典表記に使う。
export async function searchPhoto(query, { orientation = "landscape" } = {}) {
  const url = new URL(SEARCH_URL);
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("orientation", orientation);

  const res = await fetch(url, {
    headers: { Authorization: requireEnv("PEXELS_API_KEY") },
  });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(`Pexels searchPhoto failed: ${res.status} ${body}`);
  }

  const data = JSON.parse(body);
  const photo = data.photos?.[0];
  if (!photo) {
    throw new Error(`Pexels searchPhoto: no results for "${query}"`);
  }

  return {
    imageUrl: photo.src.large,
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
    pexelsUrl: photo.url,
  };
}
