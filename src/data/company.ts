export type CompanyProfileItem = {
  label: string;
  value: string;
};

export const companyProfile: CompanyProfileItem[] = [
  { label: "会社名", value: "クローバー合同会社" },
  { label: "代表者", value: "吉岡 裕輔" },
  { label: "所在地", value: "愛知県名古屋市緑区諸の木" },
  { label: "法人番号", value: "9180003023534" },
  { label: "インボイス登録番号", value: "T9180003023534" },

  { label: "設立", value: "2022年2月" },
  {
    label: "顧問税理士",
    value: "荒川税理士・行政書士事務所",
  },
];

export const companyContact: CompanyProfileItem[] = [
  { label: "メール", value: "info@clover-tech.com" },
];
