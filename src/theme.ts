import { createTheme } from "@mui/material/styles";

import { brandColors } from "./theme/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brandColors.primary,
      contrastText: "#ffffff",
    },
    secondary: {
      main: brandColors.secondary,
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: brandColors.secondary,
    },
  },
  typography: {
    fontFamily: "var(--font-sans)",
    h1: { fontFamily: "var(--font-display)", fontWeight: 600 },
    h2: { fontFamily: "var(--font-display)", fontWeight: 600 },
    h3: { fontFamily: "var(--font-display)", fontWeight: 600 },
    h4: { fontFamily: "var(--font-display)", fontWeight: 600 },
    h5: { fontFamily: "var(--font-display)", fontWeight: 600 },
    h6: { fontFamily: "var(--font-display)", fontWeight: 600 },
    button: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: "1px solid rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
