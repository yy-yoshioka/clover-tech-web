import { Box } from "@mui/material";

import type { CaseStudyIconName } from "@/src/data/caseStudies";

type CaseStudyIconProps = {
  name: CaseStudyIconName;
};

export default function CaseStudyIcon({ name }: CaseStudyIconProps) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      sx={{ width: 28, height: 28 }}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "map-pin" ? (
        <>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="2.2" />
        </>
      ) : null}
      {name === "smartphone" ? (
        <>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <circle cx="12" cy="17" r="1" />
          <path d="M9.5 6.5h5" />
        </>
      ) : null}
      {name === "chip" ? (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3" />
          <path d="M2 9h3M2 15h3M19 9h3M19 15h3" />
          <path d="M10 10h4v4h-4z" />
        </>
      ) : null}
      {name === "shield" ? (
        <>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </>
      ) : null}
      {name === "bolt" ? <path d="M13 2l-5 8h4l-3 10 8-12h-4l2-6z" /> : null}
      {name === "flow" ? (
        <>
          <rect x="3" y="4" width="7" height="5" rx="1.5" />
          <rect x="14" y="4" width="7" height="5" rx="1.5" />
          <rect x="9" y="15" width="7" height="5" rx="1.5" />
          <path d="M10 6.5h4" />
          <path d="M12.5 9.5v5.5" />
        </>
      ) : null}
    </Box>
  );
}
