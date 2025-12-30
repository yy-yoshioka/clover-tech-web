export const representativeResearch = {
  title: "Research",
  description:
    "営業データの設計や市場仮説の検証など、受託開発の前段から検討を支援します。",
} as const;

export const representativeStory = {
  title: "Story",
  description:
    "作って終わりにしない方針で、開発・データ・AI営業を一体で提供する体制です。",
} as const;

export type RepresentativeCareerItem = {
  period: string;
  title: string;
  summary: string;
};

export const representativeCareer: RepresentativeCareerItem[] = [
  {
    period: "2022 - 現在",
    title: "クローバー合同会社 代表",
    summary: "受託開発と営業支援を一体で推進。",
  },
  {
    period: "（追記可）",
    title: "経歴を追加してください",
    summary: "ここに職務経歴や実績を簡潔に記載できます。",
  },
];
