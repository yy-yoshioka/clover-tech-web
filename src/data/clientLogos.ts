export type ClientLogo = {
  name: string;
  src: string;
  href?: string;
  invertOnDark?: boolean;
  tagline?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "Company A",
    src: "/clients/company-a.svg",
    tagline: "B2B SaaS",
  },
  {
    name: "Company B",
    src: "/clients/company-b.svg",
    tagline: "Retail Tech",
  },
  {
    name: "Company C",
    src: "/clients/company-c.svg",
    invertOnDark: true,
    tagline: "Manufacturing",
  },
];
