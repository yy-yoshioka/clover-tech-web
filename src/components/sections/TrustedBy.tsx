import Image from "next/image";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { clientLogos } from "@/src/data/clientLogos";

export default function TrustedBy() {
  return (
    <Box component="section" id="clients" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
            Trusted by
          </Typography>
          <Typography variant="h4">取引実績（10社以上）</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ※一部抜粋
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 3, md: 4 } }}>
          {clientLogos.map((logo) => {
            const linkProps = logo.href
              ? {
                  component: "a" as const,
                  href: logo.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { component: "div" as const };

            return (
              <Grid key={logo.name} size={{ xs: 6, sm: 4, md: 3 }}>
                <Paper
                  {...linkProps}
                  variant="outlined"
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    textDecoration: "none",
                    borderColor: "rgba(15, 23, 42, 0.08)",
                    backgroundColor: "background.paper",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "& img": {
                      width: "100%",
                      height: "auto",
                      maxHeight: 44,
                      objectFit: "contain",
                      filter: "grayscale(1)",
                      opacity: 0.7,
                      transition: "filter 0.2s ease, opacity 0.2s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.12)",
                    },
                    "&:hover img": {
                      filter: "grayscale(0)",
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ minHeight: 48, display: "flex", alignItems: "center" }}>
                    <Image src={logo.src} alt={logo.name} width={240} height={80} />
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {logo.name}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
