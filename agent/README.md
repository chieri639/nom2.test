# nom2.jp 記事自動生成エージェント

nom2.jp（日本酒メディア）向けに、季節・時期のトレンドをリサーチして記事を1本執筆し、楽天アフィリエイトリンクと生成画像を組み込んでMicroCMSに**下書き**として保存するための自動化ツール一式。

- 実行本体: `.claude/skills/sake-article-routine/SKILL.md`（Claude Codeのスキルとして起動）
- 公開は自動化しない。必ず人間がMicroCMS管理画面で内容を確認してから公開する。

## セットアップ

1. Node.js v20以上が必要（`.mjs`はネイティブ`fetch`を利用、外部パッケージ不要）
2. `.env.example` を `.env` にコピーし、各APIキーを設定
   - MicroCMS: サービスドメイン・APIキー
   - 楽天: Application ID・Access Key・Affiliate ID（[webservice.rakuten.co.jp](https://webservice.rakuten.co.jp/)で「ウェブアプリケーション」タイプとして登録し、許可サイトに`https://nom2.jp`を設定）
   - OpenAI: 画像生成用APIキー
   - GitHub: `chieri639/nom2.jp`へのContents: Read and write権限を持つFine-grained PAT

## 疎通確認

```bash
node scripts/selftest.mjs          # 全API
node scripts/selftest.mjs microcms # 個別
node scripts/selftest.mjs rakuten
node scripts/selftest.mjs openai
node scripts/selftest.mjs github
```

## 手動で記事を1本作る

Claude Codeで「sake-article-routineスキルで記事を1本作って」のように依頼する。

## スケジュール実行

3日に1回、このスキルを自動起動するスケジュールタスクを別途登録している（Claude Codeのスケジュール機能）。
