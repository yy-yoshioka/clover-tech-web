import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import ClientCard from "@/src/components/cards/ClientCard";
import { clients } from "@/src/data/clients";

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
          {clients.map((client) => (
            <Grid key={client.name} size={{ xs: 6, sm: 4, md: 3 }}>
              <ClientCard client={client} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
