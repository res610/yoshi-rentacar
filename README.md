# ヨシレンタカー

ヨシレンタカーの公式ウェブサイトです。Next.jsを使用して構築された静的サイトで、SEO最適化が施されています。

## 特徴

- **Next.js 14** with App Router
- **TypeScript** と **Tailwind CSS**
- **SEO最適化**（JSON-LD構造化データ、sitemap、robots.txt）
- **静的エクスポート**（GitHub Pages等でホスティング可能）

## 会社情報

- **屋号**: ヨシレンタカー
- **業界**: レンタカー事業者
- **住所**: 〒901-0401 沖縄県島尻郡八重瀬町東風平923-6
- **電話**: 098-987-4747
- **営業時間**: 年中無休 8:00～20:00
- **連絡方法**: LINEでの顧客やり取りが中心

## サービス

- マイクロバスレンタル（観光旅行・社員旅行・団体旅行向け）
- ハイエースレンタル（ビジネス利用・大人数移動向け）
- 空港送迎サービス（那覇空港送迎）

## 開発環境のセットアップ

### 前提条件

- Node.js 18+
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### ビルド

```bash
npm run build
```

### 静的エクスポート

```bash
npm run export
```

## GitHub Pagesへのデプロイ

1. リポジトリをGitHubにプッシュ
2. Settings > PagesでGitHub Pagesを有効化
3. Sourceを"GitHub Actions"に設定
4. 自動デプロイが実行されます

## プロジェクト構造

```
├── app/
│   ├── layout.tsx          # ルートレイアウト（SEO設定、JSON-LD）
│   ├── page.tsx            # ホームページ
│   └── sitemap.ts          # サイトマップ
├── public/
│   ├── images/             # 静的画像
│   └── robots.txt          # robots.txt
└── next.config.ts          # Next.js設定（静的エクスポート）
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
