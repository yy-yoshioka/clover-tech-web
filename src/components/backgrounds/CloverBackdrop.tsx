import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

import { brandColors } from "@/src/theme/colors";

type CloverBackdropProps = {
  variant?: "hero" | "section";
};

const variants = {
  hero: {
    gradient: `radial-gradient(520px circle at 8% 12%, ${alpha(
      brandColors.primary,
      0.2
    )}, transparent 55%), radial-gradient(520px circle at 88% 10%, ${alpha(
      brandColors.secondary,
      0.18
    )}, transparent 55%), linear-gradient(165deg, ${brandColors.mint} 0%, ${
      brandColors.mist
    } 45%, ${brandColors.cloud} 100%)`,
    dotOpacity: 0.25,
    blobs: [
      {
        top: -200,
        right: -220,
        size: 400,
        color: alpha(brandColors.primary, 0.2),
        blur: 34,
      },
      {
        bottom: -220,
        left: -200,
        size: 420,
        color: alpha(brandColors.secondary, 0.16),
        blur: 28,
      },
    ],
    clovers: [
      { top: 80, left: "6%", size: 120, opacity: 0.22 },
      { top: 140, right: "10%", size: 140, opacity: 0.18 },
    ],
  },
  section: {
    gradient: `radial-gradient(420px circle at 12% 10%, ${alpha(
      brandColors.primary,
      0.14
    )}, transparent 60%), radial-gradient(420px circle at 88% 12%, ${alpha(
      brandColors.secondary,
      0.12
    )}, transparent 60%), linear-gradient(165deg, ${brandColors.mint} 0%, ${
      brandColors.mist
    } 55%, ${brandColors.cloud} 100%)`,
    dotOpacity: 0.18,
    blobs: [
      {
        top: -160,
        right: -180,
        size: 320,
        color: alpha(brandColors.primary, 0.16),
        blur: 28,
      },
      {
        bottom: -180,
        left: -160,
        size: 340,
        color: alpha(brandColors.secondary, 0.12),
        blur: 24,
      },
    ],
    clovers: [
      { top: 60, left: "8%", size: 96, opacity: 0.16 },
      { top: 120, right: "12%", size: 110, opacity: 0.14 },
    ],
  },
} as const;

export default function CloverBackdrop({ variant = "hero" }: CloverBackdropProps) {
  const style = variants[variant];

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: style.gradient,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${alpha(brandColors.primary, 0.18)} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          opacity: style.dotOpacity,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {style.blobs.map((blob) => (
        <Box
          key={`${blob.size}-${blob.blur}`}
          sx={{
            position: "absolute",
            top: blob.top ?? "auto",
            bottom: blob.bottom ?? "auto",
            left: blob.left ?? "auto",
            right: blob.right ?? "auto",
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: blob.color,
            filter: `blur(${blob.blur}px)`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      ))}
      {style.clovers.map((item) => (
        <Box
          key={`${item.size}-${item.opacity}-${item.top}`}
          sx={{
            position: "absolute",
            top: item.top,
            left: item.left ?? "auto",
            right: item.right ?? "auto",
            width: item.size,
            height: item.size,
            opacity: item.opacity,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {[
            { top: 0, left: "32%" },
            { top: "32%", left: 0 },
            { top: "32%", left: "64%" },
            { top: "64%", left: "32%" },
          ].map((pos) => (
            <Box
              key={`${pos.top}-${pos.left}`}
              sx={{
                position: "absolute",
                width: "48%",
                height: "48%",
                borderRadius: "50%",
                background: alpha(brandColors.primary, 0.35),
                top: pos.top,
                left: pos.left,
              }}
            />
          ))}
        </Box>
      ))}
    </>
  );
}
