import { Typography, TypographyProps } from "@mui/material";

type Header1Props = TypographyProps<"h1">;

export default function Header1({ sx, ...props }: Header1Props) {
  return (
    <Typography
      component="h1"
      variant="h1"
      sx={{
        fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
        lineHeight: 1.1,
        ...sx,
      }}
      {...props}
    />
  );
}
