import { Box, Card, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import type { CaseStudyCard as CaseStudyCardType, CaseStudy } from "@/src/data/caseStudies";
import CaseStudyIcon from "@/src/components/icons/CaseStudyIcon";
import { brandColors } from "@/src/theme/colors";

type CaseStudyCardProps = {
  item: CaseStudyCardType;
  accent: CaseStudy["accent"];
};

const accentStyles = {
  urban: {
    fg: brandColors.primary,
    bg: alpha(brandColors.primary, 0.12),
    border: alpha(brandColors.primary, 0.2),
  },
  secure: {
    fg: brandColors.tertiary,
    bg: alpha(brandColors.tertiary, 0.12),
    border: alpha(brandColors.tertiary, 0.2),
  },
} as const;

export default function CaseStudyCard({ item, accent }: CaseStudyCardProps) {
  const accentStyle = accentStyles[accent];

  return (
    <Card sx={{ p: { xs: 2.5, md: 3 }, height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            display: "grid",
            placeItems: "center",
            bgcolor: accentStyle.bg,
            color: accentStyle.fg,
          }}
        >
          <CaseStudyIcon name={item.icon} />
        </Box>
        <Typography variant="overline" sx={{ color: accentStyle.fg, letterSpacing: "0.08em" }}>
          {item.eyebrow}
        </Typography>
      </Stack>
      <Typography variant="h6" sx={{ color: "text.primary" }}>
        {item.title}
      </Typography>
      <Typography variant="body2" sx={{ color: brandColors.secondary }}>
        {item.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {item.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              bgcolor: accentStyle.bg,
              color: accentStyle.fg,
              fontWeight: 600,
              border: `1px solid ${accentStyle.border}`,
            }}
          />
        ))}
      </Box>
    </Card>
  );
}
