import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const navItems = [
  { label: "サービス", href: "/#services" },
  { label: "開発実績", href: "/#case-studies" },
  { label: "プロセス", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
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
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
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
          </Link>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button key={item.label} color="inherit" href={item.href}>
                  {item.label}
                </Button>
              ))}
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
