import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const faqs = [
  {
    question: "受託開発と開発リソース提供（準委任）の違いは？",
    answer:
      "受託は成果物ベースで納品まで責任を持つ形式、準委任はチームに参画して開発プロセスを支援する形式です。",
  },
  {
    question: "どの程度の期間で納品/立ち上げできますか？",
    answer:
      "要件の規模によりますが、MVPであれば数週間〜2ヶ月程度での立ち上げが可能です。",
  },
  {
    question: "どの技術スタックに対応していますか？",
    answer:
      "Next.js/TypeScriptを中心に、バックエンドやデータ基盤構築も含めて柔軟に対応します。",
  },
  {
    question: "スクレイピングは合法ですか？",
    answer:
      "利用規約や法的制約を遵守し、必要に応じて許諾・代替手段を検討した上で設計します。",
  },
  {
    question: "データはどの形式で納品されますか？",
    answer:
      "CSV/スプレッドシート/JSONなど用途に合わせて納品します。継続収集も対応可能です。",
  },
  {
    question: "相談だけでも可能ですか？",
    answer:
      "はい。課題整理の段階からご相談いただけます。最適な進め方をご提案します。",
  },
];

export default function FAQ() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
            FAQ
          </Typography>
          <Typography variant="h4">よくある質問</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            受託開発・準委任・データ収集に関するご質問をまとめました。
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ mt: { xs: 3, md: 4 } }}>
          {faqs.map((faq) => (
            <Accordion key={faq.question} disableGutters>
              <AccordionSummary>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
