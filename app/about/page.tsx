import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material/styles";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import { companyContact, companyProfile } from "@/src/data/company";

import { brandColors } from "@/src/theme/colors";

const companyServices = [
  {
    label: "事業内容",
    value: "受託開発 / 営業データセット / AI営業（架電）",
  },
];
const companyDetails = [
  ...companyProfile,
  ...companyContact,
  ...companyServices,
];

export default function AboutPage() {
  return (
    <InternalPageLayout
      eyebrow="About"
      title="会社概要"
      subtitle="クローバー合同会社の会社情報および連絡先を掲載しています。"
      align="center"
    >
      <Stack spacing={3}>
        {/* Representative profile */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
            bgcolor: "rgba(255,255,255,0.9)",
            p: { xs: 3, md: 4 },
            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Stack spacing={2.5}>
            <Stack spacing={1.5} sx={{ textAlign: "center" }}>
              <Typography
                variant="overline"
                sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
              >
                Representative
              </Typography>
            </Stack>

            <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
              {/* Left: business card (keep design as-is) */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 320, md: 420 },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src="/images/business-card.png"
                    alt="名刺"
                    sx={{
                      width: "100%",
                      border: `1px solid ${alpha(brandColors.secondary, 0.4)}`,
                      // 名刺（91×55mm）に近い比率
                      aspectRatio: "91 / 55",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>

              {/* Right: research & story */}
              <Grid
                size={{ xs: 12, md: 7 }}
                sx={{ alignSelf: { xs: "auto", md: "flex-start" } }}
              >
                <Grid container spacing={{ xs: 1.5, md: 2.5 }}>
                  {/* Research */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack spacing={1.2}>
                      <Stack spacing={0.6}>
                        <Typography
                          variant="overline"
                          sx={{
                            color: brandColors.tertiary,
                            letterSpacing: "0.18em",
                          }}
                        >
                          Research
                        </Typography>
                        <Box
                          sx={{
                            width: 48,
                            height: 2,
                            bgcolor: alpha(brandColors.primary, 0.7),
                            borderRadius: 999,
                          }}
                        />
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary", fontWeight: 600 }}
                      >
                        南山大学大学院（2022）
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                      >
                        理工学研究科
                        システム数理専攻／統計・探索的パス解析（DAG・構造学習）
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                      >
                        データの関係（相関・構造）をモデル化し、複数の候補モデルを探索・比較
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                      >
                        営業データの可視化・スコアリング設計にも同じ考え方を応用
                      </Typography>

                      {/* <AppLink
                        href="/docs/acarikou22_09_yoshioka_yusuke_matsuda_shinichi.pdf"
                        underline="always"
                        sx={{ width: "fit-content" }}
                      >
                        研究資料（PDF）
                      </AppLink> */}
                    </Stack>
                  </Grid>

                  {/* Story */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack spacing={1.2}>
                      <Stack spacing={0.6}>
                        <Typography
                          variant="overline"
                          sx={{
                            color: brandColors.tertiary,
                            letterSpacing: "0.18em",
                          }}
                        >
                          Story
                        </Typography>
                        <Box
                          sx={{
                            width: 48,
                            height: 2,
                            bgcolor: alpha(brandColors.primary, 0.7),
                            borderRadius: 999,
                          }}
                        />
                      </Stack>
                      <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2 }}>
                        <Typography
                          component="li"
                          variant="body2"
                          sx={{ color: brandColors.secondary }}
                        >
                          新聞配達・通訳・居酒屋のバイトを経験
                        </Typography>
                        <Typography
                          component="li"
                          variant="body2"
                          sx={{ color: brandColors.secondary }}
                        >
                          オーストラリアへワーホリ（勤め先に夜逃げされた）
                        </Typography>
                        <Typography
                          component="li"
                          variant="body2"
                          sx={{ color: brandColors.secondary }}
                        >
                          45℃の中、朝5:00から出稼ぎ民とマンゴー畑で働く
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                      >
                        想定外が起きても、やり切る力を身につける
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        {/* Company info (existing) */}
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
            bgcolor: "rgba(255,255,255,0.9)",
            p: { xs: 3, md: 4 },
            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              会社情報
            </Typography>
            <Stack spacing={2}>
              {companyDetails.map((item, index) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                    gap: 1,
                    borderBottom:
                      index === companyDetails.length - 1
                        ? "none"
                        : `1px solid ${alpha(brandColors.primary, 0.12)}`,
                    pb: index === companyDetails.length - 1 ? 0 : 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: brandColors.secondary }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </InternalPageLayout>
  );
}
