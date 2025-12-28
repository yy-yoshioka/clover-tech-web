import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material";

import { offerings } from "@/src/data/offerings";

export default function Offerings() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
            Offerings
          </Typography>
          <Typography variant="h4">提供メニュー</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            営業現場を支える3本柱で、課題に合わせた支援を行います。
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ mt: { xs: 3, md: 4 } }}>
          {offerings.map((offering, index) => (
            <Grid key={offering.title} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    index === 0
                      ? "0 20px 50px rgba(15, 23, 42, 0.16)"
                      : "0 16px 40px rgba(15, 23, 42, 0.1)",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {offering.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {offering.description}
                  </Typography>
                  <Stack component="ul" spacing={1} sx={{ mt: 2, pl: 2 }}>
                    {offering.bullets.map((item) => (
                      <Typography component="li" variant="body2" key={item}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 2.5, pb: 2.5 }}>
                  <Button variant={index === 0 ? "contained" : "outlined"} href="/contact">
                    {offering.cta}
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
