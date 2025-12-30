import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import CaseStudyCard from "@/src/components/cards/CaseStudyCard";
import { caseStudies, caseStudiesCta } from "@/src/data/caseStudies";
import { brandColors } from "@/src/theme/colors";

const accentTheme = {
  urban: {
    chip: brandColors.primary,
    tint: alpha(brandColors.primary, 0.08),
    border: alpha(brandColors.primary, 0.18),
  },
  secure: {
    chip: brandColors.tertiary,
    tint: alpha(brandColors.tertiary, 0.08),
    border: alpha(brandColors.tertiary, 0.18),
  },
} as const;

type CaseStudiesProps = {
  showCta?: boolean;
  showSubtitle?: boolean;
  showHeading?: boolean;
};

export default function CaseStudies({
  showCta = true,
  showSubtitle = false,
  showHeading = true,
}: CaseStudiesProps) {
  return (
    <Box
      component="section"
      id="case-studies"
      sx={{ py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <CloverBackdrop variant="section" />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {showHeading ? (
          <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="overline"
              sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
            >
              Case Studies
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              開発実績
            </Typography>
            {showSubtitle ? (
              <Typography
                variant="body2"
                sx={{ color: brandColors.secondary, maxWidth: 720 }}
              >
                匿名化した事例です。
              </Typography>
            ) : null}
          </Stack>
        ) : null}
        <Stack
          spacing={{ xs: 4, md: 6 }}
          sx={{ mt: showHeading ? { xs: 4, md: 6 } : 0 }}
        >
          {caseStudies.cases.map((item, index) => {
            const accent = accentTheme[item.accent];
            const isReversed = index % 2 === 1;
            const textOrder = isReversed ? { xs: 1, md: 2 } : { xs: 1, md: 1 };
            const cardsOrder = isReversed ? { xs: 2, md: 1 } : { xs: 2, md: 2 };

            return (
              <Box
                key={item.id}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  borderRadius: 4,
                  bgcolor: accent.tint,
                  border: `1px solid ${accent.border}`,
                }}
              >
                <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                  <Grid size={{ xs: 12, md: 4 }} sx={{ order: textOrder }}>
                    <Stack spacing={2}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: accent.chip,
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                        }}
                      >
                        Case {index + 1}
                      </Typography>
                      <Typography variant="h5" sx={{ color: "text.primary" }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary }}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: brandColors.secondary,
                          borderLeft: `3px solid ${accent.chip}`,
                          pl: 2,
                        }}
                      >
                        {item.role}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }} sx={{ order: cardsOrder }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: { xs: 2, md: 3 },
                      }}
                    >
                      {item.cards.map((card, cardIndex) => (
                        <Box
                          key={card.title}
                          sx={{
                            gridColumn:
                              cardIndex === 2
                                ? { xs: "auto", sm: "span 2" }
                                : "auto",
                          }}
                        >
                          <CaseStudyCard item={card} accent={item.accent} />
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Stack>
        {showCta ? (
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ mt: { xs: 4, md: 5 } }}
          >
            <Button variant="outlined" size="large" href={caseStudiesCta.href}>
              {caseStudiesCta.label}
            </Button>
          </Stack>
        ) : null}
      </Container>
    </Box>
  );
}
