import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import AppLink from "@/src/components/AppLink";
import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import { brandColors } from "@/src/theme/colors";

/**
 * お問い合わせフォーム向けの一般的なプライバシーポリシー雛形（任意開示用）
 * 必要に応じて、利用サービス（メール配信、アクセス解析等）に合わせて追記してください。
 */
const privacyPolicy = {
  companyName: "クローバー合同会社",
  intro:
    "当社は、お問い合わせ等を通じて取得する個人情報について、以下のとおり適切に取り扱います。",
  collected: {
    title: "取得する情報",
    items: [
      "会社名（任意）、氏名、メールアドレス",
      "相談内容・お問い合わせ内容",
      "希望納期・予算レンジなど任意で入力された情報",
      "アクセスログ等の技術情報（IPアドレス、ブラウザ情報、閲覧日時など）",
    ],
  },
  purpose: {
    title: "利用目的",
    items: [
      "お問い合わせへの回答、連絡、必要な確認",
      "サービス提供・改善、品質向上のための分析",
      "不正利用の防止、セキュリティの維持",
    ],
  },
  thirdParty: {
    title: "第三者提供について",
    body: "法令に基づく場合等を除き、本人の同意なく第三者に個人情報を提供することはありません。",
  },
  outsourcing: {
    title: "業務委託先の利用",
    body: "業務遂行に必要な範囲で外部のサービス提供事業者（例：フォーム提供、メール配信、ホスティング等）を利用する場合があります。その際は、委託先を適切に選定し、必要かつ適切な監督を行います。",
  },
  security: {
    title: "安全管理",
    body: "個人情報への不正アクセス、紛失、漏えい等を防止するため、合理的な安全対策を講じます。",
  },
  retention: {
    title: "保管期間",
    body: "取得した個人情報は、利用目的の達成に必要な期間に限り保管し、不要となった場合は適切な方法で削除または廃棄します。",
  },
  rights: {
    title: "開示・訂正・削除等",
    body: "保有個人データの開示・訂正・削除等をご希望の場合は、下記のお問い合わせ窓口からご連絡ください。本人確認のうえ、法令に従い対応します。",
  },
  changes: {
    title: "改定",
    body: "本ポリシーの内容は、必要に応じて予告なく改定することがあります。改定後の内容は本ページに掲載した時点から効力を生じます。",
  },
  contact: {
    title: "お問い合わせ窓口",
    bodyPrefix: "お問い合わせは",
    linkLabel: "お問い合わせフォーム",
    linkHref: "/contact",
    bodySuffix: "からご連絡ください。",
  },
} as const;

export default function PrivacyPage() {
  return (
    <InternalPageLayout
      eyebrow="Privacy Policy"
      title="プライバシーポリシー"
      titleSx={{
        fontSize: { xs: "1.6rem", sm: "2.1rem", md: "2.4rem" },
        whiteSpace: { xs: "nowrap", sm: "normal" },
      }}
      subtitle={`${privacyPolicy.companyName}（以下「当社」）の個人情報の取り扱いについて定めます。`}
      align="center"
    >
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
          <Typography variant="body2" sx={{ color: brandColors.secondary }}>
            {privacyPolicy.intro}
          </Typography>

          <Stack spacing={1}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              {privacyPolicy.collected.title}
            </Typography>
            <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2 }}>
              {privacyPolicy.collected.items.map((item) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={item}
                  sx={{ color: brandColors.secondary }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              {privacyPolicy.purpose.title}
            </Typography>
            <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2 }}>
              {privacyPolicy.purpose.items.map((item) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={item}
                  sx={{ color: brandColors.secondary }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          {[
            privacyPolicy.thirdParty,
            privacyPolicy.outsourcing,
            privacyPolicy.security,
            privacyPolicy.retention,
            privacyPolicy.rights,
            privacyPolicy.changes,
          ].map((section) => (
            <Stack key={section.title} spacing={1}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                {section.body}
              </Typography>
            </Stack>
          ))}

          <Box
            sx={{
              borderRadius: 3,
              border: `1px solid ${alpha(brandColors.secondary, 0.2)}`,
              bgcolor: alpha(brandColors.primary, 0.08),
              p: { xs: 2, md: 2.5 },
              textAlign: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: brandColors.secondary }}>
              {privacyPolicy.contact.bodyPrefix}
              <AppLink
                href={privacyPolicy.contact.linkHref}
                sx={{ color: brandColors.primary, mx: 0.5 }}
              >
                {privacyPolicy.contact.linkLabel}
              </AppLink>
              {privacyPolicy.contact.bodySuffix}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </InternalPageLayout>
  );
}
