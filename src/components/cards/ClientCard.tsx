import Image from "next/image";
import { Box, Paper, Typography } from "@mui/material";

import type { Client } from "@/src/data/clients";

type ClientCardProps = {
  client: Client;
};

export default function ClientCard({ client }: ClientCardProps) {
  const linkProps = client.href
    ? {
        component: "a" as const,
        href: client.href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { component: "div" as const };

  return (
    <Paper
      {...linkProps}
      variant="outlined"
      sx={{
        height: "100%",
        p: { xs: 2.5, md: 3 },
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        textDecoration: "none",
        borderColor: "rgba(15, 23, 42, 0.08)",
        backgroundColor: "background.paper",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "& img": {
          width: "100%",
          height: "auto",
          maxHeight: 44,
          objectFit: "contain",
          filter: "grayscale(1)",
          opacity: 0.7,
          transition: "filter 0.2s ease, opacity 0.2s ease",
        },
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 18px 40px rgba(15, 23, 42, 0.12)",
        },
        "&:hover img": {
          filter: "grayscale(0)",
          opacity: 1,
        },
      }}
    >
      <Box sx={{ minHeight: 48, display: "flex", alignItems: "center" }}>
        <Image src={client.logoSrc} alt={client.name} width={240} height={80} />
      </Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {client.name}
      </Typography>
      {client.summary ? (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {client.summary}
        </Typography>
      ) : null}
    </Paper>
  );
}
