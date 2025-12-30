import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import { companyContact, companyProfile } from "@/src/data/company";
import { brandColors } from "@/src/theme/colors";

const companyServices = [
  {
    label: "事業内容",
    value: "受託開発 / 開発リソース提供 / データ収集・整形",
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
    </InternalPageLayout>
  );
}
