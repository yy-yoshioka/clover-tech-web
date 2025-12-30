"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import AppLink from "@/src/components/AppLink";
import { brandColors } from "@/src/theme/colors";

export default function ContactCTA() {
  const [inquiryType, setInquiryType] = useState("contract");
  const [showOptional, setShowOptional] = useState(false);
  const [preferredSchedule, setPreferredSchedule] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const labelSx = { color: brandColors.secondary };
  const inputIconSx = { fontSize: 18, color: brandColors.secondary };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <CloverBackdrop variant="section" />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <SupportAgentOutlinedIcon
                  sx={{ fontSize: 18, color: brandColors.tertiary }}
                />
                <Typography
                  variant="overline"
                  sx={{ color: brandColors.tertiary, letterSpacing: "0.2em" }}
                >
                  Contact
                </Typography>
              </Stack>
              <Typography variant="h4" sx={{ color: "text.primary" }}>
                相談内容を選んで、すぐに開始
              </Typography>
              <Typography variant="body1" sx={{ color: brandColors.secondary }}>
                受託開発の相談窓口を明確にし、最短で要件整理へ進めます。
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                  gap: 1.5,
                  mt: 1,
                }}
              >
                {[
                  {
                    label: "24〜48時間以内にご連絡",
                    icon: AccessTimeOutlinedIcon,
                  },
                  { label: "NDA可能", icon: SecurityOutlinedIcon },
                  { label: "オンライン対応", icon: VideocamOutlinedIcon },
                  { label: "要件整理から支援", icon: TaskAltOutlinedIcon },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      borderRadius: 2.5,
                      border: `1px solid ${alpha(brandColors.primary, 0.18)}`,
                      bgcolor: alpha(brandColors.primary, 0.08),
                      px: 2,
                      py: 1.5,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                      <Box
                        component={item.icon}
                        sx={{ fontSize: 18, color: brandColors.tertiary }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: brandColors.secondary, fontWeight: 600 }}
                      >
                        {item.label}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Box>
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
                  <FormLabel
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <SupportAgentOutlinedIcon sx={inputIconSx} />
                    相談種別
                  </FormLabel>
                  <ToggleButtonGroup
                    value={inquiryType}
                    exclusive
                    onChange={(_, value) => {
                      if (value) {
                        setInquiryType(value);
                      }
                    }}
                    sx={{
                      mt: 1.2,
                      flexWrap: "wrap",
                      gap: 1,
                      "& .MuiToggleButton-root": {
                        borderRadius: 999,
                        border: `1px solid ${alpha(brandColors.primary, 0.25)}`,
                        px: 2,
                        py: 0.6,
                        color: brandColors.secondary,
                        textTransform: "none",
                        fontWeight: 600,
                      },
                      "& .MuiToggleButton-root.Mui-selected": {
                        bgcolor: alpha(brandColors.primary, 0.18),
                        color: brandColors.tertiary,
                        borderColor: alpha(brandColors.primary, 0.5),
                        boxShadow: `0 10px 24px ${alpha(brandColors.primary, 0.18)}`,
                      },
                      "& .MuiToggleButton-root.Mui-selected:hover": {
                        bgcolor: alpha(brandColors.primary, 0.22),
                      },
                    }}
                  >
                    {[
                      {
                        value: "contract",
                        label: "受託開発",
                        icon: WorkOutlineOutlinedIcon,
                      },
                      {
                        value: "resource",
                        label: "リソース",
                        icon: GroupsOutlinedIcon,
                      },
                      {
                        value: "data",
                        label: "データ収集",
                        icon: DescriptionOutlinedIcon,
                      },
                    ].map((option) => (
                      <ToggleButton key={option.value} value={option.value}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Box
                            component={option.icon}
                            sx={{ fontSize: 18, color: "inherit" }}
                          />
                          <span>{option.label}</span>
                        </Stack>
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </FormControl>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="会社名（任意）"
                      fullWidth
                      InputLabelProps={{ sx: labelSx }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <GroupsOutlinedIcon sx={inputIconSx} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="氏名"
                      fullWidth
                      required
                      InputLabelProps={{ sx: labelSx }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineOutlinedIcon sx={inputIconSx} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="メール"
                      type="email"
                      fullWidth
                      required
                      InputLabelProps={{ sx: labelSx }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineOutlinedIcon sx={inputIconSx} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="相談内容"
                      multiline
                      minRows={3}
                      fullWidth
                      required
                      InputLabelProps={{ sx: labelSx }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DescriptionOutlinedIcon sx={inputIconSx} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Button
                    variant="text"
                    color="primary"
                    size="small"
                    onClick={() => setShowOptional((prev) => !prev)}
                    endIcon={
                      <ExpandMoreRoundedIcon
                        sx={{
                          transform: showOptional ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    }
                    sx={{ px: 0, textTransform: "none", fontWeight: 600 }}
                  >
                    任意項目を追加
                  </Button>
                  <Collapse in={showOptional} sx={{ mt: 1.5 }}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="希望納期（任意）"
                          select
                          fullWidth
                          value={preferredSchedule}
                          onChange={(event) => setPreferredSchedule(event.target.value)}
                          InputLabelProps={{ sx: labelSx }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CalendarMonthOutlinedIcon sx={inputIconSx} />
                              </InputAdornment>
                            ),
                          }}
                        >
                          {["未定", "1ヶ月以内", "1〜3ヶ月", "3ヶ月以上"].map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="予算レンジ（任意）"
                          select
                          fullWidth
                          value={budgetRange}
                          onChange={(event) => setBudgetRange(event.target.value)}
                          InputLabelProps={{ sx: labelSx }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PaidOutlinedIcon sx={inputIconSx} />
                              </InputAdornment>
                            ),
                          }}
                        >
                          {["未定", "〜50万円", "50〜150万円", "150万円以上"].map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </Collapse>
                </Box>
                <Button variant="contained" color="primary" size="large" type="submit">
                  相談内容を送る
                </Button>
                <Typography variant="caption" sx={{ color: brandColors.secondary }}>
                  送信により
                  <AppLink href="/privacy" sx={{ color: brandColors.primary, mx: 0.5 }}>
                    プライバシーポリシー
                  </AppLink>
                  に同意したものとみなします。
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
