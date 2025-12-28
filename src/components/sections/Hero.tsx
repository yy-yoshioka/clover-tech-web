import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";

import Header1 from "@/src/components/Header1";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(20,184,166,0.16) 40%, rgba(248,250,252,1) 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(45, 212, 191, 0.2)",
          filter: "blur(20px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -140,
          left: -120,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(56, 189, 248, 0.16)",
          filter: "blur(10px)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Chip
                label="Clover Tech"
                sx={{
                  width: "fit-content",
                  bgcolor: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                }}
              />
              <Header1>
                開発とデータ基盤で、営業を加速する。
              </Header1>
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.05rem" }}>
                受託アプリ開発・開発リソース提供・データ収集/整形。営業代行の現場をソフトウェアで支えます。
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button variant="contained" color="primary" href="/contact">
                  無料相談
                </Button>
                <Button variant="outlined" color="primary" href="#services">
                  サービスを見る
                </Button>
              </Stack>
              <Grid container spacing={2}>
                {[
                  "受託開発とチーム参画の両輪",
                  "営業データを軸に成果を支援",
                  "要件整理から運用改善まで",
                  "スモールスタートで素早く検証",
                ].map((item) => (
                  <Grid key={item} size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        border: "1px solid rgba(15, 23, 42, 0.08)",
                        borderRadius: 3,
                        p: 2,
                        bgcolor: "rgba(255,255,255,0.85)",
                        fontSize: "0.9rem",
                        color: "text.secondary",
                      }}
                    >
                      {item}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                borderRadius: 4,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "rgba(255,255,255,0.9)",
                p: { xs: 3, md: 4 },
                boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
              }}
            >
              <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
                Delivery Map
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                Discover → Design → Build
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                事業と営業の現場に合わせて、最短距離で成果に繋げます。
              </Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                {[
                  {
                    title: "戦略整理",
                    description: "売れるために必要な情報と導線を設計。",
                  },
                  {
                    title: "実装と検証",
                    description: "MVPや営業支援ツールを高速に構築。",
                  },
                  {
                    title: "運用改善",
                    description: "データ起点で改善を続ける体制づくり。",
                  },
                ].map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      p: 2,
                      bgcolor: "background.paper",
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
