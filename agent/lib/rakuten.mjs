import { requireEnv, getEnv } from "./env.mjs";

const SEARCH_URL = "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701";
const REFERER = "https://nom2.jp";

// テーマに関連する商品を検索し、affiliateUrl付きの商品リストを返す。
// 失敗時は例外を投げる（呼び出し側で握りつぶして記事作成を継続する想定）。
export async function searchItems(keyword, hits = 5) {
  const url = new URL(SEARCH_URL);
  url.searchParams.set("format", "json");
  url.searchParams.set("keyword", keyword);
  url.searchParams.set("genreId", "0");
  url.searchParams.set("hits", String(hits));
  url.searchParams.set("applicationId", requireEnv("RAKUTEN_APP_ID"));
  url.searchParams.set("accessKey", requireEnv("RAKUTEN_ACCESS_KEY"));
  url.searchParams.set("affiliateId", getEnv("RAKUTEN_AFFILIATE_ID"));

  const res = await fetch(url, {
    referrer: REFERER,
    referrerPolicy: "strict-origin-when-cross-origin",
    headers: { Origin: REFERER },
  });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(`Rakuten searchItems failed: ${res.status} ${body}`);
  }

  const data = JSON.parse(body);
  if (data.error) {
    throw new Error(`Rakuten API error: ${data.error} ${data.error_description ?? ""}`);
  }

  return (data.Items ?? []).map((wrapper) => {
    const item = wrapper.Item;
    // 楽天のサムネイルURLは末尾の_ex=WxHでサイズ指定できる。既定の128x128は
    // 商品詳細ページ等で大きく表示すると粗くなるため600x600に引き上げる。
    // 商品画像は複数枚ある。1枚目に人物（蔵元など）の切り抜きが入る販売店があるため、
    // 全枚数をimageUrlsで返す。記事に使う前に必ず目視し、人物が写っていれば2枚目以降か別店舗にする。
    const imageUrls = (item.mediumImageUrls ?? [])
      .map((m) => (m.imageUrl ?? "").replace(/_ex=\d+x\d+/, "_ex=600x600"))
      .filter(Boolean);
    const imageUrl = imageUrls[0] ?? "";
    return {
      name: item.itemName,
      price: item.itemPrice,
      shopName: item.shopName,
      itemUrl: item.itemUrl,
      affiliateUrl: item.affiliateUrl || item.itemUrl,
      imageUrl,
      imageUrls,
    };
  });
}
