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
  const cardBackground = isDarkMode
    ? "rgba(15, 23, 42, 0.6)"
    : "rgba(255, 255, 255, 0.86)";

  return (
    <Box component="section" id="clients" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", letterSpacing: 1 }}
          >
            Trusted by
          </Typography>
          <Typography
            variant="h4"
            sx={{ mt: 1, fontWeight: 600, fontFamily: "var(--font-display)" }}
          >
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
              <Grid key={logo.name} size={{ xs: 6, sm: 4, md: 3, lg: 3 }}>
                <Paper
                  variant="outlined"
                  {...linkProps}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1.5,
                    p: { xs: 2.5, md: 3 },
                    textDecoration: "none",
                    borderColor: "divider",
                    backgroundColor: cardBackground,
                    backdropFilter: "blur(10px)",
                    cursor: logo.href ? "pointer" : "default",
                    transition:
                      "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
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
                      boxShadow: 3,
                      transform: "translateY(-4px)",
                    },
                    "&:hover img": {
                      filter: hoverFilter,
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      minHeight: { xs: 44, md: 52 },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image src={logo.src} alt={logo.name} width={240} height={80} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {logo.name}
                  </Typography>
                  {logo.tagline && (
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {logo.tagline}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
