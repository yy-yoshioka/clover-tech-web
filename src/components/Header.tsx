"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import type { SvgIconComponent } from "@mui/icons-material";

import { brandColors } from "@/src/theme/colors";

import AppLink from "@/src/components/AppLink";

const navItems: { label: string; href: string; icon: SvgIconComponent }[] = [
  { label: "開発実績", href: "/case-studies", icon: WorkOutlineOutlinedIcon },
  { label: "会社概要", href: "/about", icon: CorporateFareOutlinedIcon },
];
const teleapoLink = {
  label: "AI営業",
  href: "/teleapo",
  icon: SupportAgentOutlinedIcon,
};

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isActive = (href: string) => {
    const basePath = href.split("#")[0];
    if (!basePath || basePath === "/") {
      return false;
    }

    return pathname === basePath || pathname.startsWith(`${basePath}/`);
  };

  const navButtonSx = (active: boolean) => ({
    textDecoration: active ? "underline" : "none",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
    textDecorationColor: brandColors.primary,
  });

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        bgcolor: brandColors.cloud,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: { xs: 1.5, md: 2 } }}
        >
          <AppLink
            href="/"
            underline="none"
            color="inherit"
            sx={{ display: "inline-flex" }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                component="img"
                src="/logo/clover.png"
                alt="Clover Tech logo"
                sx={{ width: 44, height: 44, objectFit: "contain" }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, letterSpacing: "0.08em" }}
                >
                  Clover Tech
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  クローバー合同会社
                </Typography>
              </Box>
            </Stack>
          </AppLink>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;

                return (
                  <Button
                    key={item.label}
                    color="inherit"
                    href={item.href}
                    sx={{
                      ...navButtonSx(active),
                      color: active ? brandColors.tertiary : "inherit",
                    }}
                    startIcon={<Icon sx={{ fontSize: 18 }} />}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>
            <Button
              variant="text"
              color="inherit"
              href={teleapoLink.href}
              size="small"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                fontSize: "0.85rem",
                textTransform: "none",
                ...navButtonSx(isActive(teleapoLink.href)),
                color: isActive(teleapoLink.href)
                  ? brandColors.tertiary
                  : brandColors.secondary,
                gap: 1,
              }}
              startIcon={<teleapoLink.icon sx={{ fontSize: 18 }} />}
            >
              {teleapoLink.label}
              <Chip
                label="架電"
                size="small"
                sx={{
                  bgcolor: "rgba(255,255,255,0.9)",
                  border: `1px solid ${brandColors.primary}`,
                  color: brandColors.tertiary,
                  fontWeight: 600,
                  height: 20,
                  "& .MuiChip-label": { px: 0.8 },
                }}
              />
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/contact"
              startIcon={<ChatOutlinedIcon sx={{ fontSize: 18 }} />}
            >
              相談する
            </Button>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              aria-label="メニューを開く"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 280, p: 3 }}>
          <Stack spacing={2.5}>
            <Stack spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    justifyContent: "flex-start",
                    ...navButtonSx(isActive(item.href)),
                    color: isActive(item.href) ? brandColors.tertiary : "inherit",
                  }}
                  startIcon={<item.icon sx={{ fontSize: 18 }} />}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                href={teleapoLink.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  justifyContent: "flex-start",
                  gap: 1,
                  textTransform: "none",
                  ...navButtonSx(isActive(teleapoLink.href)),
                  color: isActive(teleapoLink.href)
                    ? brandColors.tertiary
                    : brandColors.secondary,
                }}
                startIcon={<teleapoLink.icon sx={{ fontSize: 18 }} />}
              >
                {teleapoLink.label}
                <Chip
                  label="架電"
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.9)",
                    border: `1px solid ${brandColors.primary}`,
                    color: brandColors.tertiary,
                    fontWeight: 600,
                    height: 20,
                    "& .MuiChip-label": { px: 0.8 },
                  }}
                />
              </Button>
            </Stack>
            <Button
              variant="contained"
              color="primary"
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              startIcon={<ChatOutlinedIcon sx={{ fontSize: 18 }} />}
            >
              相談する
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
