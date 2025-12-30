export type FinancialSummaryItem = {
  label: string;
  value: string;
};

export type FinancialSummary = {
  /** 例：2024年度 */
  label: string;
  /** 例：令和6年度 */
  range: string;
  items: FinancialSummaryItem[];
};

export type FinancialAdvisor = {
  office: string;
  name: string;
};

export const financialsMeta = {
  eyebrow: "Financials",
  title: "財務情報",
  subtitle: "決算サマリー",
} as const;

export const financialsDisclosureNotes = [
  "本ページは取引先の検討に必要な範囲で、財務情報を要約して掲載しています。",
  "売上は税務申告に基づく概算レンジです。詳細資料は個別にご案内します。",
] as const;

/** 取引条件（一般方針） */
export const financialsTransactionPolicy = {
  contractTypes: "準委任／請負（案件により）",
  paymentTerms: "月末締め翌月末（案件により）",
} as const;

/** 主要KPI（数値は出さず方針で示す） */
export const financialsKpiNotes = [
  "継続契約・保守運用にも対応（長期運用前提）",
  "NDA・秘密保持対応可",
] as const;

/** 事業フェーズ（定性） */
export const financialsBusinessPhase = "成長投資を含む運用" as const;

export const financialSummaries: FinancialSummary[] = [
  {
    label: "2022年度",
    range: "令和4年度",
    items: [{ label: "売上レンジ", value: "1,900万〜2,100万円" }],
  },
  {
    label: "2023年度",
    range: "令和5年度",
    items: [{ label: "売上レンジ", value: "2,400万〜2,600万円" }],
  },
  {
    label: "2024年度",
    range: "令和6年度",
    items: [{ label: "売上レンジ", value: "1,000万〜1,200万円" }],
  },
];

export const financialAdvisor: FinancialAdvisor = {
  office: "荒川税理士・行政書士事務所",
  name: "荒川俊男",
};

export const financialsUpdatedAt = "2025-12-30" as const;
