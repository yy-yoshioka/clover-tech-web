import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
import {
  recruitCta,
  recruitHero,
  recruitPositions,
  recruitTraits,
  recruitWorkItems,
  recruitWorkStyle,
} from "@/src/data/recruit";
import { brandColors } from "@/src/theme/colors";

export default function RecruitPage() {
  return (
    <InternalPageLayout
      eyebrow={recruitHero.eyebrow}
      title={recruitHero.title}
      subtitle={recruitHero.subtitle}
      align="center"
    >
      <Stack spacing={4}>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ justifyContent: "center", gap: 1 }}
        >
          {["受託開発", "営業データ", "AI営業"].map((label) => (
            <Chip
              key={label}
              label={label}
              sx={{
                bgcolor: alpha(brandColors.primary, 0.08),
                border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
                fontWeight: 700,
              }}
            />
          ))}
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            募集ポジション
          </Typography>
          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {recruitPositions.map((position) => (
              <Grid key={position.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ position: "relative", height: "100%" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: -6,
                      borderRadius: 4,
                      background: `linear-gradient(140deg, ${alpha(
                        brandColors.primary,
                        0.18
                      )}, ${alpha(brandColors.secondary, 0.1)})`,
                      filter: "blur(16px)",
                      opacity: 0.7,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      borderRadius: 4,
                      border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
                      bgcolor: "rgba(255,255,255,0.92)",
                      p: { xs: 2.5, md: 3 },
                      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "text.primary" }}>
                      {position.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                      {position.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                      {position.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: alpha(brandColors.primary, 0.08),
                            border: `1px solid ${alpha(brandColors.primary, 0.16)}`,
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            仕事内容
          </Typography>
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {recruitWorkItems.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
                <Stack spacing={1.2}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: brandColors.tertiary,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      width: 40,
                      height: 2,
                      bgcolor: alpha(brandColors.primary, 0.7),
                      borderRadius: 999,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1.5}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                求める人物像
              </Typography>
              <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2 }}>
                {recruitTraits.map((item) => (
                  <Typography
                    component="li"
                    key={item}
                    variant="body2"
                    sx={{ color: brandColors.secondary }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1.5}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                働き方
              </Typography>
              <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2 }}>
                {recruitWorkStyle.map((item) => (
                  <Typography
                    component="li"
                    key={item}
                    variant="body2"
                    sx={{ color: brandColors.secondary }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${alpha(brandColors.primary, 0.2)}`,
            bgcolor: alpha(brandColors.primary, 0.1),
            p: { xs: 3, md: 3.5 },
            textAlign: "center",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography variant="subtitle1" sx={{ color: "text.primary" }}>
              まずは相談から。採用の前段でも気軽に話しましょう。
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button variant="contained" color="primary" href={recruitCta.primaryHref}>
                {recruitCta.primaryLabel}
              </Button>
              <Button variant="outlined" color="primary" href={recruitCta.secondaryHref}>
                {recruitCta.secondaryLabel}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </InternalPageLayout>
  );
}
