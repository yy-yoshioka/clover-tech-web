export const recruitHero = {
  eyebrow: "Recruit",
  title: "採用",
  subtitle: "業務アプリ受託／営業データ／営業代行を横断",
} as const;

export const recruitPositions = [
  {
    title: "フルスタックエンジニア",
    description: "業務アプリ・管理画面・CRMの設計と実装をリード。",
    tags: ["Next.js", "TypeScript", "MVP開発"],
  },
  {
    title: "データエンジニア",
    description: "営業データセットの設計・ETL・品質設計を担当。",
    tags: ["ETL", "データ整形", "スコアリング"],
  },
  {
    title: "営業オペレーション",
    description: "AI営業の運用、架電フローの改善、レポート整理を推進。",
    tags: ["架電運用", "改善", "レポート"],
  },
] as const;

export const recruitWorkItems = [
  {
    title: "Build",
    description: "業務アプリ／管理画面／CRMを最短で構築。",
  },
  {
    title: "Dataset",
    description: "条件設計→抽出→整形→スコアリングで営業データを作成。",
  },
  {
    title: "Sell",
    description: "AI営業で商談化まで接続し、学びをプロダクトに還元。",
  },
] as const;

export const recruitTraits = [
  "自走して仮説検証できる",
  "顧客価値に責任を持てる",
  "改善が好き",
] as const;

export const recruitWorkStyle = [
  "業務委託 / 副業 OK",
  "リモート中心（必要に応じて出社）",
  "週2〜 / 10時間〜 相談可",
] as const;

export const recruitCta = {
  primaryLabel: "相談する",
  primaryHref: "/contact",
  secondaryLabel: "採用の相談をメールで",
  secondaryHref: "mailto:contact@clover-tech.jp",
} as const;
