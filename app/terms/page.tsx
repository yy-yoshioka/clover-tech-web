import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import AppLink from "@/src/components/AppLink";
import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import { brandColors } from "@/src/theme/colors";

const sections = [
  {
    title: "第1条（適用）",
    body: "本規約は、クローバー合同会社（以下「当社」）が提供するウェブサイト、受託開発、開発支援、データ収集その他のサービス（以下「本サービス」）の利用条件を定めるものです。利用者は、本規約に同意のうえ本サービスを利用するものとします。",
  },
  {
    title: "第2条（定義）",
    body: "本規約において「利用者」とは、本サービスを閲覧・利用する個人または法人をいいます。その他の用語は、文脈に従い合理的に解釈されるものとします。",
  },
  {
    title: "第3条（利用登録・アカウント）",
    body: "本サービスの一部では、当社所定の方法により申込みを行い、当社が承認した場合に利用登録が完了します。利用者は登録情報を正確かつ最新に保ち、アカウント情報（ID・パスワード等）を自己の責任で管理するものとします。",
  },
  {
    title: "第4条（契約・個別条件）",
    body: "受託開発、準委任、データ提供等の個別案件については、別途見積書・発注書・契約書その他の個別条件（以下「個別契約」）が適用されます。個別契約と本規約の内容が矛盾する場合は、個別契約が優先します。",
  },
  {
    title: "第5条（料金・支払）",
    body: "本サービスのうち有償部分を利用する場合、利用者は当社が別途定める料金および支払条件に従い支払うものとします。支払遅延が生じた場合、当社は本サービスの提供停止等の措置を講じることがあります。",
  },
  {
    title: "第6条（禁止事項）",
    body: "利用者は、法令違反、公序良俗に反する行為、第三者の権利侵害、虚偽情報の登録、当社または第三者への誹謗中傷、過度な負荷・不正アクセス等の運営妨害、リバースエンジニアリング等の行為をしてはなりません。",
  },
  {
    title: "第7条（知的財産権）",
    body: "本サービスおよび当社が提供する資料・コンテンツに関する著作権、商標権その他の知的財産権は当社または正当な権利者に帰属します。個別契約により別段の定めがある場合を除き、利用者は当社の許諾なく複製・転載・転用等を行えません。",
  },
  {
    title: "第8条（秘密保持）",
    body: "利用者および当社は、個別契約の検討・遂行に関連して相手方から開示された非公知情報（営業上・技術上その他の情報）を、相手方の承諾なく第三者に開示・漏えいしないものとします。詳細は個別契約または別途締結する秘密保持契約に従います。",
  },
  {
    title: "第9条（社名・ロゴ等の使用／公表）",
    body: "当社および利用者（提携先・取引先を含む）は、相手方の社名、商号、商標、ロゴ、サービス名等（以下「ブランド表示」）を、相手方の事前の書面または電磁的記録（メール等）による承諾なく、ウェブサイト、提案資料、プレスリリース等に掲載・使用してはなりません。承諾が得られた場合でも、相手方のブランドガイドライン（表記、色、余白、改変禁止等）に従うものとし、相手方からの要請があった場合は速やかに掲載を停止・削除します。",
  },
  {
    title: "第10条（サービス内容の変更・停止）",
    body: "当社は、システム保守、障害対応、天災、法令対応その他やむを得ない事由により、本サービスの全部または一部の内容を変更し、または提供を一時的に停止することがあります。",
  },
  {
    title: "第11条（免責・責任制限）",
    body: "当社は、本サービスに関して、特定の目的適合性、完全性、正確性、有用性等を保証しません。当社は、本サービス利用により利用者に生じた損害について、当社に故意または重大な過失がある場合を除き責任を負いません。なお、当社が責任を負う場合であっても、当社の責任は、当該損害に直接関連する個別契約に基づき当社が受領した直近の対価を上限とします（ただし強行法規に反しない範囲）。",
  },
  {
    title: "第12条（利用停止・解除）",
    body: "当社は、利用者が本規約に違反した場合、または当社が合理的に必要と判断した場合、事前通知なく本サービスの利用停止、登録抹消、個別契約の解除等の措置を講じることがあります。",
  },
  {
    title: "第13条（準拠法・管轄）",
    body: "本規約は日本法を準拠法とし、本サービスに関連して当社と利用者との間で紛争が生じた場合、当社の本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。",
  },
  {
    title: "第14条（規約の変更）",
    body: "当社は必要に応じて本規約を変更することができます。変更後の内容は本ページに掲示した時点で効力を生じます。",
  },
];

export default function TermsPage() {
  return (
    <InternalPageLayout
      eyebrow="Terms"
      title="利用規約"
      subtitle="当社のサービスをご利用いただく際の基本条件を定めています。"
      align="center"
    >
      <Stack spacing={1} sx={{ textAlign: "center" }}>
        <Typography variant="caption" sx={{ color: brandColors.secondary }}>
          最終更新日: 2025-12-29
        </Typography>
      </Stack>

      <Box
        sx={{
          borderRadius: 4,
          border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
          bgcolor: "rgba(255,255,255,0.9)",
          p: { xs: 2.5, md: 3.5 },
          boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Stack spacing={2.5}>
          {sections.map((section) => (
            <Stack key={section.title} spacing={1.2}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                {section.body}
              </Typography>
            </Stack>
          ))}

          <Stack spacing={1.2}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              第15条（お問い合わせ）
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.secondary }}>
              規約に関するお問い合わせは、以下のページよりご連絡ください。
            </Typography>
            <AppLink
              href="/contact"
              underline="always"
              sx={{ width: "fit-content" }}
            >
              お問い合わせページ
            </AppLink>
          </Stack>
        </Stack>
      </Box>
    </InternalPageLayout>
  );
}
