import { Box, Card, Chip, Container, Grid, Stack, Typography } from "@mui/material";

import CaseStudies from "@/src/components/sections/CaseStudies";
import SectionHeading from "@/src/components/SectionHeading";
import { caseStudyArchive, caseStudyArchiveContent } from "@/src/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Box component="section" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Case Studies"
            title="開発実績"
            subtitle="匿名化した事例を中心に、解決した課題と成果をご紹介します。"
          />
        </Container>
      </Box>
      <CaseStudies showCta={false} showHeading={false} showSubtitle={false} />
      <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
              {caseStudyArchiveContent.caption}
            </Typography>
            <Typography variant="h4">{caseStudyArchiveContent.title}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 720 }}>
              {caseStudyArchiveContent.subtitle}
            </Typography>
          </Stack>
          <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ mt: { xs: 3, md: 4 } }}>
            {caseStudyArchive.map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: { xs: 2.5, md: 3 }, height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.12em" }}>
                    {item.focus}
                  </Typography>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.summary}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {item.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
