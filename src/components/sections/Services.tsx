import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import type { SvgIconComponent } from "@mui/icons-material";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import { services } from "@/src/data/services";
import { brandColors } from "@/src/theme/colors";

const accentColors = [brandColors.primary, brandColors.secondary, brandColors.tertiary];
const serviceIcons: Record<string, SvgIconComponent> = {
  code: CodeOutlinedIcon,
  people: GroupsOutlinedIcon,
  dataset: HubOutlinedIcon,
};

export default function Services() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <CloverBackdrop variant="section" />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="overline" sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}>
            Services
          </Typography>
          <Typography variant="h4" sx={{ color: "text.primary" }}>
            サービス概要
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.secondary }}>
            受託開発・リソース提供・データ収集を、最短距離で成果につなげます。
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ mt: { xs: 3, md: 4 } }}>
          {services.map((service, index) => {
            const accent = accentColors[index % accentColors.length];
            const Icon = serviceIcons[service.icon] ?? CodeOutlinedIcon;

            return (
              <Grid key={service.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ position: "relative", height: "100%" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: -4,
                      borderRadius: 4,
                      background: `linear-gradient(135deg, ${alpha(
                        accent,
                        0.18
                      )}, ${alpha(accent, 0.06)})`,
                      filter: "blur(14px)",
                      opacity: 0.7,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 4,
                      border: `1px solid ${alpha(accent, 0.2)}`,
                      bgcolor: "rgba(255,255,255,0.88)",
                      p: { xs: 3, md: 3.5 },
                      boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                      <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              bgcolor: alpha(accent, 0.12),
                              border: `1px solid ${alpha(accent, 0.3)}`,
                              display: "grid",
                              placeItems: "center",
                              color: accent,
                            }}
                          >
                            <Icon sx={{ fontSize: 20 }} />
                          </Box>
                          <Typography
                            variant="overline"
                            sx={{ color: accent, letterSpacing: "0.2em", fontWeight: 700 }}
                          >
                            Service {index + 1}
                        </Typography>
                      </Stack>
                      <Typography variant="h6" sx={{ color: "text.primary" }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                        {service.description}
                      </Typography>
                      <Stack component="ul" spacing={1} sx={{ mt: 1, pl: 2 }}>
                        {service.bullets.map((item) => (
                          <Typography
                            component="li"
                            variant="body2"
                            key={item}
                            sx={{ color: brandColors.secondary }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>
                    <Box
                      sx={{
                        borderRadius: 2.5,
                        bgcolor: alpha(accent, 0.12),
                        px: 2,
                        py: 1.5,
                      }}
                    >
                      <Typography variant="caption" sx={{ color: brandColors.secondary }}>
                        想定成果
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                        {service.outcome}
                      </Typography>
                    </Box>
                    <Button variant="outlined" color="primary" href="/contact">
                      {service.cta}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
