export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
  tag: string;
  icon: "product" | "ops" | "data" | "growth";
};

export const services: ServiceItem[] = [
  {
    title: "プロダクト/LP開発",
    description:
      "課題整理からUI/UX、実装、リリースまで。検証と改善を前提に、成果につながる体験を設計します。",
    points: ["MVP設計", "高速リリース", "改善運用"],
    tag: "Build",
    icon: "product",
  },
  {
    title: "業務DX・自動化",
    description:
      "現場の業務フローを整理し、ツール連携や自動化で再現性のある仕組みを構築します。",
    points: ["要件定義", "API連携", "運用支援"],
    tag: "Operate",
    icon: "ops",
  },
  {
    title: "データ活用・可視化",
    description:
      "意思決定につながる指標設計とダッシュボード。データが動く仕組みを整えます。",
    points: ["KPI設計", "ダッシュボード", "分析基盤"],
    tag: "Insight",
    icon: "data",
  },
  {
    title: "グロース伴走",
    description:
      "リリース後の改善サイクルを設計し、施策の優先順位付けから実行まで並走します。",
    points: ["計測設計", "CV改善", "SEO/性能"],
    tag: "Grow",
    icon: "growth",
  },
];
