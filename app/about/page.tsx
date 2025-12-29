import { Box, Container, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import { companyContact, companyProfile } from "@/src/data/company";
import { brandColors } from "@/src/theme/colors";

const companyServices = [
  { label: "事業内容", value: "受託開発 / 開発リソース提供 / データ収集・整形" },
];

export default function AboutPage() {
  return (
    <Box component="main" sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 12 } }}>
      <CloverBackdrop variant="section" />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4}>
          <Stack spacing={1.5} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="overline"
              sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
            >
              About
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              会社概要
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.secondary, maxWidth: 720 }}>
              クローバー合同会社の会社情報を掲載しています。
            </Typography>
          </Stack>

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
                {companyProfile.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                      gap: 1,
                      borderBottom: `1px solid ${alpha(brandColors.primary, 0.12)}`,
                      pb: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
                {companyServices.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: brandColors.secondary }}>
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

          <Box
            sx={{
              borderRadius: 4,
              border: `1px solid ${alpha(brandColors.secondary, 0.18)}`,
              bgcolor: "rgba(255,255,255,0.9)",
              p: { xs: 3, md: 4 },
              boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                連絡先
              </Typography>
              <Stack spacing={2}>
                {companyContact.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                      gap: 1,
                      borderBottom: `1px solid ${alpha(brandColors.secondary, 0.12)}`,
                      pb: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: brandColors.secondary }}>
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
      </Container>
    </Box>
  );
}
