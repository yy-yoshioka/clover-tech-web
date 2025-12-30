"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

import { brandColors } from "@/src/theme/colors";

import AppLink from "@/src/components/AppLink";

const navItems = [
  { label: "サービス", href: "/#services" },
  { label: "開発実績", href: "/#case-studies" },
  { label: "FAQ", href: "/#faq" },
  { label: "会社概要", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    const basePath = href.split("#")[0];
    if (!basePath || basePath === "/") {
      return false;
    }

    return pathname === basePath || pathname.startsWith(`${basePath}/`);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        bgcolor: "rgba(245, 247, 251, 0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: { xs: 1.5, md: 2 } }}
        >
          <AppLink href="/" underline="none" color="inherit" sx={{ display: "inline-flex" }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                component="img"
                src="/logo/clover.png"
                alt="Clover Tech logo"
                sx={{ width: 44, height: 44, objectFit: "contain" }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, letterSpacing: "0.08em" }}>
                  Clover Tech
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  クローバー合同会社
                </Typography>
              </Box>
            </Stack>
          </AppLink>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Button
                    key={item.label}
                    color="inherit"
                    href={item.href}
                    sx={{
                      textDecoration: active ? "underline" : "none",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "6px",
                      textDecorationColor: brandColors.primary,
                      color: active ? brandColors.tertiary : "inherit",
                    }}
                  >
                  {item.label}
                  </Button>
                );
              })}
            </Stack>
            <Button variant="contained" color="primary" href="/contact">
              無料相談
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
