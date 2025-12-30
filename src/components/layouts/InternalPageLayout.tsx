"use client";

import { Box, Container, Stack } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

import CloverBackdrop from "@/src/components/backgrounds/CloverBackdrop";
import SectionHeading from "@/src/components/SectionHeading";

type InternalPageLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleSx?: SxProps<Theme>;
  children: React.ReactNode;
};

export default function InternalPageLayout({
  eyebrow,
  title,
  subtitle,
  align,
  titleSx,
  children,
}: InternalPageLayoutProps) {
  return (
    <Box
      component="main"
      sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 12 } }}
    >
      <CloverBackdrop variant="section" />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4}>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={align}
            titleSx={titleSx}
          />
          {children}
        </Stack>
      </Container>
    </Box>
  );
}
