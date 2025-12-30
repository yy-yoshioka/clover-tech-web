import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import AppLink from "@/src/components/AppLink";
import { companyContact, companyProfile } from "@/src/data/company";
import { brandColors } from "@/src/theme/colors";

const companyLinks = [
  { label: "会社概要", href: "/about" },
  { label: "財務情報", href: "/financials" },
  { label: "お問い合わせ", href: "/contact" },
];

const legalLinks = [
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
];

const linkSx = {
  color: brandColors.secondary,
  textDecoration: "none",
  fontWeight: 500,
  textDecorationColor: "transparent",
  transition: "color 0.2s ease, text-decoration-color 0.2s ease",
  "&:hover": {
    color: brandColors.tertiary,
    textDecoration: "underline",
    textDecorationColor: alpha(brandColors.tertiary, 0.6),
  },
};

const cloverPositions = [
  { top: 0, left: "32%" },
  { top: "32%", left: 0 },
  { top: "32%", left: "64%" },
  { top: "64%", left: "32%" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const getCompanyValue = (label: string) =>
    companyProfile.find((item) => item.label === label)?.value ?? "";
  const companyContactValue = (label: string) =>
    companyContact.find((item) => item.label === label)?.value ?? "";
  const representative = getCompanyValue("代表者");
  const location = getCompanyValue("所在地");
  const email = companyContactValue("メール");

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        borderTop: `1px solid ${alpha(brandColors.secondary, 0.16)}`,
        background: `linear-gradient(180deg, ${alpha(brandColors.secondary, 0.1)} 0%, ${alpha(
          brandColors.secondary,
          0.04
        )} 55%, ${alpha(brandColors.cloud, 0.9)} 100%)`,
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: { xs: -24, md: 32 },
          bottom: { xs: 60, md: 24 },
          width: { xs: 140, md: 200 },
          height: { xs: 140, md: 200 },
          opacity: 0.22,
          pointerEvents: "none",
        }}
      >
        {cloverPositions.map((pos) => (
          <Box
            key={`${pos.top}-${pos.left}`}
            sx={{
              position: "absolute",
              width: "48%",
              height: "48%",
              borderRadius: "50%",
              background: alpha(brandColors.primary, 0.35),
              top: pos.top,
              left: pos.left,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  component="img"
                  src="/logo/clover.png"
                  alt="Clover Tech logo"
                  sx={{ width: 40, height: 40, objectFit: "contain" }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, letterSpacing: "0.08em" }}>
                    Clover Tech
                  </Typography>
                  <Typography variant="caption" sx={{ color: brandColors.secondary }}>
                    クローバー合同会社
                  </Typography>
                </Box>
              </Stack>
              <Stack spacing={0.6}>
                <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                  代表者：{representative}
                </Typography>
                <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                  所在地：{location}
                </Typography>
                <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                  メール：{email}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Typography
                variant="overline"
                sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
              >
                Company
              </Typography>
              <Stack spacing={1.2}>
                {companyLinks.map((item) => (
                  <AppLink key={item.label} href={item.href} sx={linkSx}>
                    {item.label}
                  </AppLink>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Typography
                variant="overline"
                sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
              >
                Legal
              </Typography>
              <Stack spacing={1.2}>
                {legalLinks.map((item) => (
                  <AppLink key={item.label} href={item.href} sx={linkSx}>
                    {item.label}
                  </AppLink>
                ))}
              </Stack>
              <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                データ収集・利用は各種規約と法令に準拠します。
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            pt: { xs: 2.5, md: 3 },
            borderTop: `1px solid ${alpha(brandColors.secondary, 0.14)}`,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
          >
            <Typography variant="caption" sx={{ color: brandColors.secondary }}>
              © {year} Clover Tech / Clover LLC
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
