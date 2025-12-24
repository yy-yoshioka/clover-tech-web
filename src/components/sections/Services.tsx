import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { services } from "@/src/data/services";

export default function Services() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
            Services
          </Typography>
          <Typography variant="h4">サービス詳細</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            開発・データ・営業の3領域を横断して、事業成長を支援します。
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ mt: { xs: 3, md: 4 } }}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Chip
                    label="Service"
                    size="small"
                    sx={{ mb: 2, bgcolor: "rgba(14,165,233,0.12)", color: "primary.main" }}
                  />
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                    {service.description}
                  </Typography>
                  <Stack component="ul" spacing={1} sx={{ mt: 2, pl: 2 }}>
                    {service.bullets.map((item) => (
                      <Typography component="li" variant="body2" key={item}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                  <Box
                    sx={{
                      mt: 2.5,
                      borderRadius: 2,
                      bgcolor: "rgba(15, 118, 110, 0.08)",
                      px: 2,
                      py: 1.5,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      想定成果
                    </Typography>
                    <Typography variant="subtitle2">{service.outcome}</Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 2.5, pb: 2.5 }}>
                  <Button variant="outlined" href="/contact">
                    {service.cta}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
