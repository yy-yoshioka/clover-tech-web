export type Offering = {
  title: string;
  description: string;
  bullets: string[];
  cta: string;
};

export const offerings: Offering[] = [
  {
    title: "営業代行",
    description: "データ起点でターゲット設計からアプローチまで一貫支援。",
    bullets: ["ターゲット選定", "KPI運用", "改善PDCA"],
    cta: "相談する",
  },
  {
    title: "受託アプリ開発",
    description: "業務・営業向けアプリを要件整理から実装/運用まで。",
    bullets: ["要件整理", "UI・API実装", "運用改善"],
    cta: "相談する",
  },
  {
    title: "開発リソース提供（準委任/チーム参画）",
    description: "不足する開発力をスポット/継続で補完し、開発を前に進めます。",
    bullets: ["フロント/バック参画", "既存コード改善", "技術負債解消"],
    cta: "相談する",
  },
];
