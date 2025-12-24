"use client";

import Image from "next/image";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { clientLogos } from "../data/clientLogos";

export default function TrustedBy() {
  const theme = useTheme();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isDarkMode = theme.palette.mode === "dark" || prefersDarkMode;

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", letterSpacing: 1 }}
          >
            Trusted by
          </Typography>
          <Typography variant="h4" sx={{ mt: 1, fontWeight: 600 }}>
            取引実績
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
            一部抜粋
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {clientLogos.map((logo) => {
            const baseFilter =
              logo.invertOnDark && isDarkMode
                ? "invert(1) grayscale(1)"
                : "grayscale(1)";
            const hoverFilter =
              logo.invertOnDark && isDarkMode
                ? "invert(1) grayscale(0)"
                : "grayscale(0)";
            const linkProps = logo.href
              ? {
                  component: "a" as const,
                  href: logo.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": logo.name,
                }
              : { component: "div" as const };

            return (
              <Grid
                key={logo.name}
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
              >
                <Paper
                  variant="outlined"
                  {...linkProps}
                  sx={{
                    height: { xs: 72, md: 88 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 2, md: 3 },
                    textDecoration: "none",
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    "& img": {
                      width: "100%",
                      height: "auto",
                      maxHeight: { xs: 36, md: 44 },
                      objectFit: "contain",
                      filter: baseFilter,
                      opacity: 0.75,
                      transition: "filter 0.2s ease, opacity 0.2s ease",
                    },
                    "&:hover": {
                      borderColor: "text.primary",
                      boxShadow: 1,
                    },
                    "&:hover img": {
                      filter: hoverFilter,
                      opacity: 1,
                    },
                  }}
                >
                  <Image src={logo.src} alt={logo.name} width={240} height={80} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
