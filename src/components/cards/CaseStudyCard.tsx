import { Box, Card, Chip, Stack, Typography } from "@mui/material";

import type { CaseStudyCard as CaseStudyCardType, CaseStudy } from "@/src/data/caseStudies";
import CaseStudyIcon from "@/src/components/icons/CaseStudyIcon";

type CaseStudyCardProps = {
  item: CaseStudyCardType;
  accent: CaseStudy["accent"];
};

const accentStyles = {
  urban: { fg: "#2563eb", bg: "rgba(37, 99, 235, 0.12)" },
  secure: { fg: "#0f172a", bg: "rgba(15, 23, 42, 0.08)" },
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
        <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.08em" }}>
          {item.eyebrow}
        </Typography>
      </Stack>
      <Typography variant="h6">{item.title}</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
              border: "1px solid transparent",
            }}
          />
        ))}
      </Box>
    </Card>
  );
}
