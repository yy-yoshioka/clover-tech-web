"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import { brandColors } from "@/src/theme/colors";

export default function Hero() {
  const steps = ["Build", "Dataset", "AI Sales"];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "92vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 10, md: 0 },
      }}
    >
      <CloverBackdrop variant="hero" />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={5} alignItems="center" textAlign="center">
          {/* Flow indicator */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              px: 2,
              py: 1,
              borderRadius: 99,
              bgcolor: alpha(brandColors.primary, 0.06),
              border: `1px solid ${alpha(brandColors.primary, 0.1)}`,
            }}
          >
            {steps.map((step, idx) => (
              <Stack key={step} direction="row" alignItems="center" spacing={1}>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: brandColors.tertiary,
                    letterSpacing: "0.04em",
                  }}
                >
                  {step}
                </Typography>
                {idx < steps.length - 1 && (
                  <Box
                    component="span"
                    sx={{
                      color: alpha(brandColors.primary, 0.4),
                      fontSize: "0.75rem",
                    }}
                  >
                    →
                  </Box>
                )}
              </Stack>
            ))}
          </Stack>

          {/* Main headline */}
          <Stack spacing={2.5}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.25rem" },
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "#0f172a",
              }}
            >
              作って終わらせない
              <Box
                component="span"
                sx={{
                  mt: 2,
                  display: "block",
                  background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                営業まで一気通貫
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#64748b",
                maxWidth: 520,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              開発 × データ × AI営業
              <br />
              販売開始まで、最短でつなぐ
            </Typography>
          </Stack>

          {/* CTA buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1 }}
          >
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                bgcolor: brandColors.primary,
                boxShadow: `0 4px 14px ${alpha(brandColors.primary, 0.4)}`,
                "&:hover": {
                  bgcolor: brandColors.secondary,
                  boxShadow: `0 6px 20px ${alpha(brandColors.primary, 0.5)}`,
                },
              }}
            >
              無料で相談する
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/case-studies"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                borderColor: alpha(brandColors.primary, 0.3),
                color: brandColors.tertiary,
                "&:hover": {
                  borderColor: brandColors.primary,
                  bgcolor: alpha(brandColors.primary, 0.04),
                },
              }}
            >
              開発実績を見る
            </Button>
          </Stack>

          {/* Trust note */}
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#94a3b8",
            }}
          >
            開発のみ・データセットのみ・AI営業のみのご対応も可能
          </Typography>

          {/* Service cards - minimal horizontal layout */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            sx={{ pt: 4, width: "100%" }}
          >
            {[
              { label: "Build", desc: "業務アプリ・管理画面を最短構築" },
              { label: "Dataset", desc: "AI抽出で営業データを作成" },
              { label: "Sell", desc: "AI営業で販売開始まで接続" },
            ].map((item, idx) => (
              <Box
                key={item.label}
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.7)",
                  border: `1px solid ${alpha(brandColors.primary, 0.08)}`,
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: alpha(brandColors.primary, 0.2),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Stack spacing={1.5} alignItems="center">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: alpha(brandColors.primary, 0.1),
                        color: brandColors.primary,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {idx + 1}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: brandColors.tertiary,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#475569",
                      textAlign: "center",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
