export type Service = {
  title: string;
  description: string;
  bullets: string[];
  outcome: string;
  cta: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "受託アプリ開発",
    description: "要件整理から設計・実装・運用まで一貫で伴走します。",
    bullets: ["要件定義・設計", "UI/UXと実装", "API/DB構築"],
    outcome: "最短で運用開始",
    cta: "相談する",
    icon: "code",
  },
  {
    title: "開発リソース提供",
    description: "必要なスキルでチームに参画し、開発を加速。",
    bullets: ["フルスタック参画", "品質・速度改善", "保守運用"],
    outcome: "開発スピード向上",
    cta: "相談する",
    icon: "people",
  },
  {
    title: "データ収集・整形",
    description: "必要なデータを継続収集し、使える形へ整備。",
    bullets: ["収集設計", "抽出・正規化", "可視化・納品"],
    outcome: "データ作成工数削減",
    cta: "相談する",
    icon: "dataset",
  },
];
