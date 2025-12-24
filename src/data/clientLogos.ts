export type ClientLogo = {
  name: string;
  src: string;
  href?: string;
  invertOnDark?: boolean;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "Company A",
    src: "/clients/company-a.svg",
    href: "https://example.com",
  },
  {
    name: "Company B",
    src: "/clients/company-b.svg",
  },
  {
    name: "Company C",
    src: "/clients/company-c.svg",
    invertOnDark: true,
  },
];
