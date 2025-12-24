export type Service = {
  title: string;
  description: string;
  bullets: string[];
  outcome: string;
  cta: string;
};

export const services: Service[] = [
  {
    title: "受託アプリ開発",
    description: "要件整理から設計・実装・運用まで一貫対応。",
    bullets: ["要件定義", "UI実装", "API・DB設計"],
    outcome: "最短で運用開始",
    cta: "相談する",
  },
  {
    title: "開発リソース提供",
    description: "開発チームへ参画し、実装を推進します。",
    bullets: ["フルスタック参画", "速度改善", "品質担保"],
    outcome: "開発スピード向上",
    cta: "相談する",
  },
  {
    title: "スクレイピング・データ収集",
    description: "必要なデータを継続収集し、使える形に整えます。",
    bullets: ["収集設計", "抽出", "正規化・保存"],
    outcome: "データ作成工数削減",
    cta: "相談する",
  },
  {
    title: "データセット作成（営業向け）",
    description: "ターゲット法人向けに用途別データセットを作成します。",
    bullets: ["法人リスト整備", "属性付与", "フォーマット納品"],
    outcome: "営業の再現性向上",
    cta: "相談する",
  },
  {
    title: "営業代行",
    description: "データ整備〜アプローチ支援まで、運用を仕組み化します。",
    bullets: ["設計", "実行支援", "改善"],
    outcome: "アポ獲得の安定化",
    cta: "相談する",
  },
];
