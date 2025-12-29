"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import { brandColors } from "@/src/theme/colors";
import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";

export default function Hero() {
  const cloverDot = `radial-gradient(circle at 30% 30%, ${brandColors.primary} 30%, transparent 31%), radial-gradient(circle at 70% 30%, ${brandColors.primary} 30%, transparent 31%), radial-gradient(circle at 30% 70%, ${brandColors.primary} 30%, transparent 31%), radial-gradient(circle at 70% 70%, ${brandColors.primary} 30%, transparent 31%)`;
  const bullets = [
    "業務アプリの受託開発（Web/管理画面/API）",
    "要件整理 → 設計 → 実装 → 運用まで一気通貫",
    "データ収集・整形・可視化にも対応",
  ];

  const menu = [
    { title: "受託開発", desc: "AI×業務アプリ／管理画面／CRM／可視化" },
    { title: "開発リソース", desc: "準委任／チーム参画／保守運用" },
    { title: "データ収集", desc: "スクレイピング／整形／要約" },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      <CloverBackdrop variant="hero" />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Left: Message */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2.8} sx={{ alignItems: { xs: "flex-start", md: "center" } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  width: "fit-content",
                  px: 1.6,
                  py: 0.7,
                  borderRadius: 999,
                  bgcolor: "rgba(255,255,255,0.85)",
                  border: `1px solid ${alpha(brandColors.primary, 0.2)}`,
                  boxShadow: `0 12px 32px ${alpha(brandColors.secondary, 0.12)}`,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: cloverDot,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ letterSpacing: "0.26em", fontWeight: 700, color: "text.secondary" }}
                >
                  CLOVER TECH
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                業務アプリの
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    background:
                      `linear-gradient(120deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  受託開発
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.08rem",
                  maxWidth: 520,
                  textAlign: { xs: "left", md: "center" },
                  mx: { md: "auto" },
                }}
              >
                管理画面・CRM・データ可視化・業務自動化を、最短で形にします。
              </Typography>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                  listStyle: "none",
                  display: "grid",
                  gap: 1.5,
                  maxWidth: 520,
                  width: "100%",
                  mx: { md: "auto" },
                }}
              >
                {bullets.map((b) => (
                  <Box key={b} component="li" sx={{ display: "flex", gap: 1.5 }}>
                    <Box
                      sx={{
                        mt: 0.8,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: cloverDot,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", textAlign: { xs: "left", md: "center" } }}
                    >
                      {b}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1, alignItems: { xs: "stretch", md: "center" } }}
              >
                <Button variant="contained" color="primary" size="large" href="/contact">
                  相談する
                </Button>
                <Button variant="outlined" color="primary" size="large" href="#case-studies">
                  実績を見る
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  href="#services"
                  sx={{ justifyContent: "flex-start" }}
                >
                  対応範囲を見る
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right: Menu */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: 5,
                  background:
                    `linear-gradient(130deg, ${alpha(
                      brandColors.primary,
                      0.28
                    )}, ${alpha(brandColors.secondary, 0.18)})`,
                  filter: "blur(18px)",
                  opacity: 0.7,
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  border: `1px solid ${alpha(brandColors.primary, 0.2)}`,
                  bgcolor: "rgba(255,255,255,0.86)",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.16)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "text.secondary", letterSpacing: "0.2em" }}
                >
                  Services
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  提供メニュー
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  まずは小さく作り、改善を回す形で支援します。
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                  {menu.map((item) => (
                    <Box
                      key={item.title}
                      sx={{
                        borderRadius: 3,
                        border: "1px solid rgba(15, 23, 42, 0.08)",
                        p: 2,
                        bgcolor: "background.paper",
                        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mt: 0.25 }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
