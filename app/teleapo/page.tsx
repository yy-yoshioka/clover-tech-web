import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import { brandColors } from "@/src/theme/colors";

const steps = [
  {
    label: "STEP 01",
    title: "ターゲット設計",
    description:
      "業種・規模・役職などの条件を整理し、最適な架電リストを設計します。",
  },
  {
    label: "STEP 02",
    title: "AI営業の実働",
    description:
      "AIによる一次接触とオペレーションを連携し、商談化まで支援します。",
  },
  {
    label: "STEP 03",
    title: "商談化レポート",
    description: "反応・温度感・次アクションをまとめ、次の打ち手に繋げます。",
  },
];

const deliverables = [
  {
    title: "レポートサンプル",
    description:
      "アポ獲得率・接触ログ・温度感を見える化。次の施策に活用できる形式で納品します。",
  },
  {
    title: "運用ガード",
    description:
      "業界ルールやトーンを遵守し、ブランド毀損を避けた営業運用を前提に設計します。",
  },
];

export default function TeleapoPage() {
  return (
    <InternalPageLayout
      eyebrow="Teleapo"
      title="営業代行（AI営業）"
      subtitle="営業データとAI架電を組み合わせ、商談化までの導線を最短で整えます。"
      align="center"
    >
      <Stack spacing={4}>
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.2)}`,
            bgcolor: "rgba(255,255,255,0.92)",
            p: { xs: 3, md: 4 },
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
          }}
        >
          <Stack spacing={1.5}>
            <Typography variant="h5" sx={{ color: "text.primary" }}>
              「データを作って終わり」ではなく、営業実働まで一気通貫で支援します。
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.secondary }}>
              条件設計 → データ整備 →
              AI営業の実行までをワンストップで提供し、商談化の速度を 上げます。
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={2}>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            3ステップで営業開始まで
          </Typography>
          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {steps.map((step) => (
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
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.primary", mt: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: brandColors.secondary, mt: 1 }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            納品イメージ
          </Typography>
          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {deliverables.map((item) => (
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
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.primary" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: brandColors.secondary, mt: 1 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>

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
              <Button variant="contained" color="primary" href="/contact">
                相談する
              </Button>
              <Button variant="outlined" color="primary" href="/case-studies">
                開発実績を見る
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </InternalPageLayout>
  );
}
