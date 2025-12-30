import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material/styles";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import type { SvgIconComponent } from "@mui/icons-material";

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
const orderedCompanyDetails = [
  ...companyDetails.filter((item) => item.label !== "顧問税理士"),
  ...companyDetails.filter((item) => item.label === "顧問税理士"),
];
const normalizeCompanyLabel = (label: string) =>
  label.replace(/<br\s*\/?>/g, "");
const companyInfoIcons: Record<string, SvgIconComponent> = {
  会社名: BusinessOutlinedIcon,
  代表者: PersonOutlineOutlinedIcon,
  所在地: PlaceOutlinedIcon,
  法人番号: NumbersOutlinedIcon,
  インボイス登録番号: ReceiptLongOutlinedIcon,
  顧問税理士: AccountBalanceOutlinedIcon,
  設立: EventOutlinedIcon,
  メール: MailOutlineOutlinedIcon,
  事業内容: WorkOutlineOutlinedIcon,
};

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
                        <Stack direction="row" spacing={1} alignItems="center">
                          <ScienceOutlinedIcon
                            sx={{ fontSize: 18, color: brandColors.tertiary }}
                          />
                          <Typography
                            variant="overline"
                            sx={{
                              color: brandColors.tertiary,
                              letterSpacing: "0.18em",
                            }}
                          >
                            Research
                          </Typography>
                        </Stack>
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
                        <Stack direction="row" spacing={1} alignItems="center">
                          <AutoStoriesOutlinedIcon
                            sx={{ fontSize: 18, color: brandColors.tertiary }}
                          />
                          <Typography
                            variant="overline"
                            sx={{
                              color: brandColors.tertiary,
                              letterSpacing: "0.18em",
                            }}
                          >
                            Story
                          </Typography>
                        </Stack>
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
              {orderedCompanyDetails.map((item, index) => {
                const normalizedLabel = normalizeCompanyLabel(item.label);
                const Icon = companyInfoIcons[normalizedLabel];
                const labelHasBreak = item.label.includes("<br");

                return (
                  <Box
                    key={item.label}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                      gap: 1,
                      borderBottom:
                        index === orderedCompanyDetails.length - 1
                          ? "none"
                          : `1px solid ${alpha(brandColors.primary, 0.12)}`,
                      pb: index === orderedCompanyDetails.length - 1 ? 0 : 2,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      {Icon ? (
                        <Box
                          component={Icon}
                          sx={{ fontSize: 18, color: brandColors.tertiary }}
                        />
                      ) : null}
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                        {...(labelHasBreak
                          ? { dangerouslySetInnerHTML: { __html: item.label } }
                          : undefined)}
                      >
                        {labelHasBreak ? null : item.label}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {item.value}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </InternalPageLayout>
  );
}
