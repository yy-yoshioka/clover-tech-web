import { Box, Stack, Typography } from "@mui/material";
import { alpha, SxProps, Theme } from "@mui/material/styles";

import { brandColors } from "@/src/theme/colors";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  titleSx?: SxProps<Theme>;
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  titleSx,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "center" : { xs: "center", md: "left" };
  const alignItems = align === "center" ? "center" : { xs: "center", md: "flex-start" };
  const titleHasBreak = title.includes("<br");

  return (
    <Stack spacing={1.5} sx={{ textAlign, alignItems }}>
      {eyebrow ? (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 1.6,
            py: 0.6,
            borderRadius: 999,
            bgcolor: alpha(brandColors.primary, 0.12),
            border: `1px solid ${alpha(brandColors.primary, 0.24)}`,
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: brandColors.primary,
              boxShadow: `0 0 0 6px ${alpha(brandColors.primary, 0.16)}`,
            }}
          />
          <Typography
            variant="caption"
            sx={{ color: brandColors.tertiary, letterSpacing: "0.2em", fontWeight: 700 }}
          >
            {eyebrow}
          </Typography>
        </Box>
      ) : null}
      <Typography
        variant="h3"
        sx={{ color: "text.primary", letterSpacing: "-0.02em", ...titleSx }}
        {...(titleHasBreak
          ? { dangerouslySetInnerHTML: { __html: title } }
          : undefined)}
      >
        {titleHasBreak ? null : title}
      </Typography>
      <Box
        sx={{
          width: { xs: 64, md: 80 },
          height: 4,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.secondary})`,
        }}
      />
      {subtitle ? (
        <Typography variant="body2" sx={{ color: brandColors.secondary, maxWidth: 720 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}
