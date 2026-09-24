import { listRecent } from "../lib/microcms.mjs";
import { searchItems } from "../lib/rakuten.mjs";
import { generateImage } from "../lib/geminiImages.mjs";
import { uploadImage } from "../lib/githubPublish.mjs";
import { searchPhoto } from "../lib/pexels.mjs";

async function run(name, fn) {
  process.stdout.write(`\n[${name}] running...\n`);
  try {
    const result = await fn();
    console.log(`[${name}] OK`);
    return result;
  } catch (err) {
    console.error(`[${name}] FAILED: ${err.message}`);
    return null;
  }
}

const args = new Set(process.argv.slice(2));
const runAll = args.size === 0;

if (runAll || args.has("microcms")) {
  await run("microcms.listRecent", async () => {
    const items = await listRecent(5);
    console.log(`  取得件数: ${items.length}`);
    for (const item of items) {
      console.log(`  - [${item.category ?? "(no category)"}] ${item.title}`);
    }
    return items;
  });
}

if (runAll || args.has("rakuten")) {
  await run("rakuten.searchItems", async () => {
    const items = await searchItems("日本酒", 3);
    console.log(`  取得件数: ${items.length}`);
    for (const item of items) {
      console.log(`  - ${item.name} (${item.price}円) affiliateUrl=${item.affiliateUrl}`);
    }
    return items;
  });
}

if (runAll || args.has("gemini")) {
  await run("geminiImages.generateImage", async () => {
    const buf = await generateImage(
      "日本酒の瓶とお猪口が並ぶ、シンプルで温かみのある水彩画風イラスト"
    );
    console.log(`  画像サイズ: ${buf.length} bytes`);
    return buf;
  });
}

if (runAll || args.has("github")) {
  await run("githubPublish.uploadImage", async () => {
    const buf = Buffer.from(
      "89504e470d0a1a0a0000000d494844520000000100000001080600000" +
        "01f15c4890000000a49444154789c6360000002000155a2415d0000000049454e44ae426082",
      "hex"
    );
    const filename = `selftest-${Date.now()}.png`;
    const url = await uploadImage(buf, filename, `chore: selftest upload ${filename}`);
    console.log(`  公開URL: ${url}`);
    console.log(`  ※動作確認用のダミーファイルです。不要であればリポジトリから削除してください。`);
    return url;
  });
}

if (runAll || args.has("pexels")) {
  await run("pexels.searchPhoto", async () => {
    const photo = await searchPhoto("grilled beef steak");
    console.log(`  imageUrl: ${photo.imageUrl}`);
    console.log(`  photographer: ${photo.photographer} (${photo.photographerUrl})`);
    return photo;
  });
}

console.log("\n--- selftest 完了 ---");
