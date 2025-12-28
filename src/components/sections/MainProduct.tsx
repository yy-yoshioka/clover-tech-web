import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";

const highlights = [
  {
    title: "データ収集",
    description: "ターゲットに必要な情報を収集・整理。",
  },
  {
    title: "データセット化",
    description: "営業で使える形式に整備し、再現性を高める。",
  },
  {
    title: "アプローチ支援",
    description: "KPI設計と運用で成果に繋げる。",
  },
];

export default function MainProduct() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
                Main Service
              </Typography>
              <Typography variant="h4">メインサービス：営業代行</Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                営業代行を、データとソフトウェアで“仕組み化”します。データ収集からターゲット選定、
                データセット作成、アプローチ支援まで一貫して提供。さらにAIテレアポ機能を開発中です
                （段階的に提供範囲を拡張）。
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label="Now Building" color="primary" />
                <Chip label="AIテレアポ開発中" variant="outlined" />
              </Stack>
              <Button variant="contained" color="primary" href="/contact" sx={{ width: "fit-content" }}>
                営業代行の相談をする
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                background:
                  "linear-gradient(135deg, rgba(15,118,110,0.1) 0%, rgba(14,165,233,0.12) 100%)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
              }}
            >
              <Stack spacing={2.5}>
                {highlights.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      p: 2.5,
                    }}
                  >
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
