import { requireEnv, getEnv } from "./env.mjs";

const IMAGE_DIR = "public/images/article";

// 画像バッファをGitHubリポジトリのpublic/images/article/にコミットし、公開URLを返す
export async function uploadImage(buffer, filename, commitMessage) {
  const repo = getEnv("GITHUB_REPO", "chieri639/nom2.jp");
  const branch = getEnv("GITHUB_BRANCH", "main");
  const repoPath = `${IMAGE_DIR}/${filename}`;

  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${repoPath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${requireEnv("GITHUB_TOKEN")}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      message: commitMessage,
      content: buffer.toString("base64"),
      branch,
    }),
  });

  const body = await res.text();
  if (!res.ok) {
    throw new Error(`GitHub uploadImage failed: ${res.status} ${body}`);
  }

  return `https://nom2.jp/images/article/${encodeURIComponent(filename)}`;
}
