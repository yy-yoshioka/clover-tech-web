import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import { brandColors } from "@/src/theme/colors";

const faqs = [
  {
    question: "どんなアプリを作れますか？",
    answer:
      "管理画面/CRM/業務アプリ/データ可視化など、業務で使うアプリ全般に対応します。",
  },
  {
    question: "相談〜着手までの流れは？",
    answer: "ヒアリング → 概算お見積り → 要件整理 → 着手の流れです。",
  },
  {
    question: "期間の目安は？",
    answer: "MVPで2〜6週間程度が目安です。規模や要件によって前後します。",
  },
  {
    question: "予算の目安は？",
    answer:
      "要件により変動しますが、まずは小さく始めるプランをご提案します。最低レンジは数十万円からです。",
  },
  {
    question: "既存システムの改修や運用も可能？",
    answer: "可能です。保守運用や改善提案まで継続的に支援します。",
  },
  {
    question: "データ収集（スクレイピング）は対応できる？",
    answer: "可能です。利用規約や法的制約を遵守した上で設計します。",
  },
  {
    question: "NDAは可能？",
    answer: "可能です。",
  },
];

export default function FAQ() {
  return (
    <Box
      component="section"
      id="faq"
      sx={{ py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <CloverBackdrop variant="section" />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="overline"
            sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
          >
            FAQ
          </Typography>
          <Typography variant="h4" sx={{ color: "text.primary" }}>
            よくある質問
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.secondary }}>
            受託開発をご検討中のお客様向けに、主要なご質問をまとめました。
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ mt: { xs: 3, md: 4 } }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              defaultExpanded={index === 0}
              disableGutters
              square={true}
              sx={{
                borderRadius: 3,
                border: `1px solid ${alpha(brandColors.primary, 0.16)}`,
                bgcolor: "rgba(255,255,255,0.9)",
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  m: 0,
                  borderRadius: 3,
                  borderColor: alpha(brandColors.primary, 0.35),
                  bgcolor: alpha(brandColors.primary, 0.08),
                  boxShadow: "0 22px 48px rgba(15, 23, 42, 0.12)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon />}
                sx={{
                  px: { xs: 2, md: 3 },
                  py: { xs: 1, md: 1.5 },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: brandColors.secondary,
                    transition: "transform 0.2s ease",
                  },
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(180deg)",
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: brandColors.primary,
                      boxShadow: `0 0 0 6px ${alpha(brandColors.primary, 0.15)}`,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "text.primary" }}
                  >
                    {faq.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{ px: { xs: 2, md: 3 }, pt: 0, pb: { xs: 2, md: 2.5 } }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: brandColors.secondary }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
