"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material/styles";

import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import { brandColors } from "@/src/theme/colors";

// AIテレアポ本体LP（別で定義しているLP）のURL
// デプロイ環境に合わせて NEXT_PUBLIC_TELEAPO_LP_URL を設定してください
const TELEAPO_LP_URL =
  process.env.NEXT_PUBLIC_TELEAPO_LP_URL ?? "https://www.teleaposuite.com/";

const steps = [
  {
    icon: TrackChangesRoundedIcon,
    label: "STEP 01",
    title: "ターゲット設計",
    description:
      "業種・規模・役職などの条件を整理し、最適な架電リストを設計します。",
  },
  {
    icon: PhoneInTalkRoundedIcon,
    label: "STEP 02",
    title: "自動架電（一次対応）",
    description: "AIが営業電話を実行。要点を抽出し、次アクションに繋げます。",
  },
  {
    icon: AssessmentRoundedIcon,
    label: "STEP 03",
    title: "商談化レポート",
    description: "反応・温度感・次アクションをまとめ、次の打ち手に繋げます。",
  },
] as const;

const components = [
  {
    icon: PhoneInTalkRoundedIcon,
    title: "AI電話（テレアポ）",
    description:
      "一次架電〜要約・次アクションまで。商談化の入口を作る運用を支援します。",
    ctaLabel: "AIテレアポLPを見る",
    href: TELEAPO_LP_URL,
    external: true,
  },
  {
    icon: MailOutlineRoundedIcon,
    title: "AIメール（送付・反応可視化）",
    description: "送付→反応の可視化→改善。運用設計まで含めて支援します。",
    ctaLabel: "AIテレアポLPを見る",
    href: TELEAPO_LP_URL,
    external: true,
  },
  {
    icon: StorageRoundedIcon,
    title: "営業データセット（600万件DB）",
    description:
      "条件設計→抽出→整形→スコアリング。運用しやすい形で納品します。",
    ctaLabel: "詳しく見る",
    href: "/sales-data",
    external: false,
  },
] as const;

const deliverables = [
  {
    icon: AssessmentRoundedIcon,
    title: "レポートサンプル",
    description:
      "温度感スコア・接触ログ・要点を見える化。次の施策に活用できる形式で納品します。",
  },
  {
    icon: ShieldRoundedIcon,
    title: "運用ガード",
    description:
      "業界ルールやトーンを遵守し、ブランド毀損を避けた営業運用を前提に設計します。",
  },
] as const;

export default function TeleapoPage() {
  return (
    <InternalPageLayout
      eyebrow="AI Sales"
      title="AI営業"
      subtitle="AIが営業リストに自動電話し、見込み度をスコア化"
      align="center"
    >
      <Stack spacing={4}>
        {/* Hero */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.2)}`,
            bgcolor: "rgba(255,255,255,0.92)",
            p: { xs: 3, md: 4 },
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
          }}
        >
          <Stack spacing={1.25}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
            >
              <PhoneInTalkRoundedIcon
                fontSize="small"
                sx={{ color: brandColors.primary }}
              />
              <Typography variant="h5" sx={{ color: "text.primary" }}>
                AIが営業リストに自動電話し、見込み度をスコア化
              </Typography>
            </Stack>

            <Typography variant="body2" sx={{ color: brandColors.secondary }}>
              リスト投入 → 自動電話（一次対応） → 要約 → 温度感スコア →
              次アクション
            </Typography>
          </Stack>
        </Box>

        {/* Mechanism */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.secondary, 0.18)}`,
            bgcolor: "rgba(255,255,255,0.92)",
            p: { xs: 3, md: 4 },
          }}
        >
          <Stack spacing={1.25}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AutoAwesomeRoundedIcon
                fontSize="small"
                sx={{ color: brandColors.primary }}
              />
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                仕組み
              </Typography>
            </Stack>

            <Stack component="ul" spacing={0.9} sx={{ m: 0, pl: 2 }}>
              <Stack
                component="li"
                direction="row"
                spacing={1}
                alignItems="flex-start"
              >
                <PhoneInTalkRoundedIcon
                  fontSize="small"
                  sx={{ color: brandColors.primary, mt: "2px" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  営業リストに対してAIが自動架電（一次対応・ヒアリング）
                </Typography>
              </Stack>
              <Stack
                component="li"
                direction="row"
                spacing={1}
                alignItems="flex-start"
              >
                <DescriptionOutlinedIcon
                  fontSize="small"
                  sx={{ color: brandColors.primary, mt: "2px" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  通話内容を要約し、見込み度（温度感）をスコア化
                </Typography>
              </Stack>
              <Stack
                component="li"
                direction="row"
                spacing={1}
                alignItems="flex-start"
              >
                <TrackChangesRoundedIcon
                  fontSize="small"
                  sx={{ color: brandColors.primary, mt: "2px" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  次アクション（再架電/メール/担当引継ぎ）に自動で接続
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* LP link */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.24)}`,
            bgcolor: alpha(brandColors.primary, 0.1),
            p: { xs: 2.5, md: 3 },
            textAlign: "center",
          }}
        >
          <Stack spacing={1.25} alignItems="center">
            <Typography
              variant="subtitle1"
              sx={{ color: "text.primary", fontWeight: 800 }}
            >
              AIテレアポの詳細はこちら
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.secondary }}>
              AI電話（テレアポ）・AIメール・レポートまでの詳細は、本体LPでまとめて確認できます。
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href={TELEAPO_LP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              AIテレアポLPを見る
            </Button>
          </Stack>
        </Box>

        {/* Components */}
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <StorageRoundedIcon
              fontSize="small"
              sx={{ color: brandColors.primary }}
            />
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              提供内容
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {components.map((item) => {
              const Icon = item.icon;
              return (
                <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: 3.5,
                      border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
                      bgcolor: "rgba(255,255,255,0.88)",
                      p: 3,
                      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                    }}
                  >
                    <Stack spacing={1.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Icon
                          fontSize="small"
                          sx={{ color: brandColors.primary }}
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "text.primary" }}
                        >
                          {item.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                      >
                        {item.description}
                      </Typography>
                      <Box sx={{ pt: 0.5 }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external ? "noopener noreferrer" : undefined
                          }
                        >
                          {item.ctaLabel}
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        {/* Steps */}
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <TrackChangesRoundedIcon
              fontSize="small"
              sx={{ color: brandColors.primary }}
            />
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              3ステップで営業開始まで
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Grid key={step.title} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: 3.5,
                      border: `1px solid ${alpha(brandColors.secondary, 0.2)}`,
                      bgcolor: "rgba(255,255,255,0.88)",
                      p: 3,
                      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: brandColors.tertiary,
                        letterSpacing: "0.16em",
                      }}
                    >
                      {step.label}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mt: 1 }}
                    >
                      <Icon
                        fontSize="small"
                        sx={{ color: brandColors.primary }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "text.primary" }}
                      >
                        {step.title}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ color: brandColors.secondary, mt: 1 }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        {/* Deliverables */}
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <DescriptionOutlinedIcon
              fontSize="small"
              sx={{ color: brandColors.primary }}
            />
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              納品イメージ
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: 3.5,
                      border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
                      bgcolor: alpha(brandColors.primary, 0.06),
                      p: 3,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Icon
                        fontSize="small"
                        sx={{ color: brandColors.primary }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "text.primary" }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ color: brandColors.secondary, mt: 1 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        {/* Bottom CTA */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.24)}`,
            bgcolor: alpha(brandColors.primary, 0.12),
            p: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              まずは相談から、営業の最短ルートを一緒に設計します。
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                variant="contained"
                color="primary"
                href={TELEAPO_LP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                AIテレアポLPを見る
              </Button>
              <Button variant="outlined" color="primary" href="/contact">
                相談する
              </Button>
              <Button variant="text" color="primary" href="/case-studies">
                開発実績を見る
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </InternalPageLayout>
  );
}
