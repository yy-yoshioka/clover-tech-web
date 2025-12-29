import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import { brandColors } from "@/src/theme/colors";

export default function ContactCTA() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <CloverBackdrop variant="section" />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="overline"
                sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
              >
                Contact
              </Typography>
              <Typography variant="h4" sx={{ color: "text.primary" }}>
                相談内容を選んで、すぐに開始
              </Typography>
              <Typography variant="body1" sx={{ color: brandColors.secondary }}>
                受託開発の相談窓口を明確にし、最短で要件整理へ進めます。
              </Typography>
              <Stack spacing={1.2} sx={{ mt: 1 }}>
                {[
                  "通常24〜48時間以内にご連絡",
                  "NDA可能",
                  "オンライン打ち合わせ対応",
                  "要件整理から支援",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{ display: "flex", gap: 1.5, justifyContent: { xs: "center", md: "flex-start" } }}
                  >
                    <Box
                      sx={{
                        mt: 0.8,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: brandColors.primary,
                        boxShadow: `0 0 0 6px ${alpha(brandColors.primary, 0.12)}`,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: brandColors.secondary }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: 4,
                  background: `linear-gradient(130deg, ${alpha(
                    brandColors.primary,
                    0.24
                  )}, ${alpha(brandColors.secondary, 0.14)})`,
                  filter: "blur(16px)",
                  opacity: 0.7,
                }}
              />
              <Box
                component="form"
                noValidate
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  border: `1px solid ${alpha(brandColors.primary, 0.2)}`,
                  bgcolor: "rgba(255,255,255,0.9)",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.14)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <FormControl>
                  <FormLabel sx={{ color: brandColors.secondary, fontWeight: 600 }}>
                    相談種別
                  </FormLabel>
                  <RadioGroup row defaultValue="contract">
                    {[
                      { value: "contract", label: "受託開発" },
                      { value: "resource", label: "リソース" },
                      { value: "data", label: "データ収集" },
                    ].map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="会社名（任意）" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="氏名" fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="メール" type="email" fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="希望納期（任意）" select fullWidth>
                      {["未定", "1ヶ月以内", "1〜3ヶ月", "3ヶ月以上"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="予算レンジ（任意）" select fullWidth>
                      {["未定", "〜50万円", "50〜150万円", "150万円以上"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="相談内容" multiline minRows={3} fullWidth required />
                  </Grid>
                </Grid>
                <Button variant="contained" color="primary" size="large" type="submit">
                  相談内容を送る
                </Button>
                <Typography variant="caption" sx={{ color: brandColors.secondary }}>
                  返信目安: 通常24〜48時間以内にご連絡します。
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
