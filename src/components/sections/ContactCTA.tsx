import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function ContactCTA() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            bgcolor: "rgba(15, 118, 110, 0.08)",
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          <Stack spacing={2} alignItems={{ xs: "center", sm: "flex-start" }}>
            <Typography variant="h4" sx={{ textAlign: { xs: "center", sm: "left" } }}>
              まずは課題整理からご相談ください
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", textAlign: { xs: "center", sm: "left" } }}>
              受託開発・開発リソース提供・営業代行のどこからでも伴走可能です。
            </Typography>
            <Button variant="contained" color="primary" href="/contact">
              問い合わせる
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
