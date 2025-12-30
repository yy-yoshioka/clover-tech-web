import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import {
  financialAdvisor,
  financialSummaries,
  financialsBusinessPhase,
  financialsDisclosureNotes,
  financialsKpiNotes,
  financialsMeta,
  financialsTransactionPolicy,
  financialsUpdatedAt,
} from "@/src/data/financials";
import { brandColors } from "@/src/theme/colors";

export default function FinancialsPage() {
  return (
    <InternalPageLayout
      eyebrow={financialsMeta.eyebrow}
      title={financialsMeta.title}
      subtitle={financialsMeta.subtitle}
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
        <Stack spacing={3}>
          <Stack spacing={1.5}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              基本情報
            </Typography>
            <Stack spacing={1}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  事業フェーズ
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {financialsBusinessPhase}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              取引条件（一般方針）
            </Typography>
            <Stack spacing={1}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  契約形態
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {financialsTransactionPolicy.contractTypes}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  支払条件
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {financialsTransactionPolicy.paymentTerms}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              運用方針
            </Typography>
            <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2 }}>
              {financialsKpiNotes.map((item) => (
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

          <Stack spacing={3}>
            <Stack spacing={1.5}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                決算サマリー
              </Typography>
              <Stack spacing={2.5}>
                {financialSummaries.map((summary) => (
                  <Box
                    key={summary.label}
                    sx={{
                      borderRadius: 3,
                      border: `1px solid ${alpha(brandColors.primary, 0.16)}`,
                      bgcolor: "rgba(255,255,255,0.9)",
                      p: { xs: 2.5, md: 3 },
                      boxShadow: "0 14px 32px rgba(15, 23, 42, 0.06)",
                      borderLeft: `4px solid ${alpha(brandColors.primary, 0.6)}`,
                    }}
                  >
                    <Stack spacing={2}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        alignItems={{ xs: "flex-start", sm: "center" }}
                        justifyContent="space-between"
                        spacing={0.5}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                          {summary.label}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: brandColors.secondary }}
                        >
                          {summary.range}
                        </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        {summary.items.map((item) => (
                          <Box
                            key={item.label}
                            sx={{
                              display: "grid",
                              gridTemplateColumns: {
                                xs: "1fr",
                                sm: "180px 1fr",
                              },
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: brandColors.secondary }}
                            >
                              {item.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "text.primary" }}
                            >
                              {item.value}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                会計・税務体制
              </Typography>
              <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                顧問税理士の監修体制で運用しています。
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  税理士事務所: {financialAdvisor.office}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  税理士: {financialAdvisor.name}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="caption" sx={{ color: brandColors.secondary }}>
            最終更新日: {financialsUpdatedAt}
          </Typography>
          <Stack spacing={0.5}>
            {financialsDisclosureNotes.map((note) => (
              <Typography
                key={note}
                variant="caption"
                sx={{ color: brandColors.secondary }}
              >
                {note}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Box>
    </InternalPageLayout>
  );
}
