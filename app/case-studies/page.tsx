import {
  Box,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import CaseStudies from "@/src/components/sections/CaseStudies";
import {
  caseStudyArchive,
  caseStudyArchiveContent,
} from "@/src/data/caseStudies";
import { brandColors } from "@/src/theme/colors";

const archiveIcons = [
  StorageOutlinedIcon,
  LocalShippingOutlinedIcon,
  TrendingUpOutlinedIcon,
  AccountBalanceOutlinedIcon,
];

export default function CaseStudiesPage() {
  return (
    <InternalPageLayout
      eyebrow="Case Studies"
      icon={
        <WorkOutlineOutlinedIcon
          sx={{ fontSize: 16, color: brandColors.tertiary }}
        />
      }
      title="開発実績"
      subtitle="匿名化した事例を中心に、解決した課題と成果をご紹介します。"
      align="center"
    >
      <CaseStudies
        showCta={false}
        showHeading={false}
        showSubtitle={false}
        showBackdrop={false}
      />
      <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <AutoGraphOutlinedIcon
                sx={{ fontSize: 18, color: brandColors.tertiary }}
              />
              <Typography
                variant="overline"
                sx={{ color: "text.secondary", letterSpacing: "0.2em" }}
              >
                {caseStudyArchiveContent.caption}
              </Typography>
            </Stack>
            <Typography variant="h4">
              {caseStudyArchiveContent.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", maxWidth: 720 }}
            >
              {caseStudyArchiveContent.subtitle}
            </Typography>
          </Stack>
          <Grid
            container
            spacing={{ xs: 2.5, md: 3.5 }}
            sx={{ mt: { xs: 3, md: 4 } }}
          >
            {caseStudyArchive.map((item, index) => {
              const Icon = archiveIcons[index % archiveIcons.length];

              return (
                <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                  <Card
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Icon
                        sx={{ fontSize: 18, color: brandColors.tertiary }}
                      />
                      <Typography
                        variant="overline"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: "0.12em",
                        }}
                      >
                        {item.focus}
                      </Typography>
                    </Stack>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.summary}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {item.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </InternalPageLayout>
  );
}
