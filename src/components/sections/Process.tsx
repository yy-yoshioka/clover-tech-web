import { Box, Card, Container, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

const contractFlow = ["ヒアリング", "提案", "実装・検証", "運用・改善"];
const resourceFlow = ["要件/役割確認", "参画設計", "実装推進", "定例改善"];

export default function Process() {
  return (
    <Box component="section" id="process" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
            Process
          </Typography>
          <Typography variant="h4">依頼から参画までの流れ</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            受託開発と準委任（チーム参画）の両方に対応しています。
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ mt: { xs: 3, md: 4 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Typography variant="h6">受託開発フロー</Typography>
              <List>
                {contractFlow.map((step, index) => (
                  <ListItem key={step} disableGutters>
                    <ListItemText
                      primary={`${index + 1}. ${step}`}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Typography variant="h6">リソース提供フロー</Typography>
              <List>
                {resourceFlow.map((step, index) => (
                  <ListItem key={step} disableGutters>
                    <ListItemText
                      primary={`${index + 1}. ${step}`}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
