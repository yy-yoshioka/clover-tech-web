"use client";

import { forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type AppLinkProps = Omit<MuiLinkProps, "href" | "component"> & NextLinkProps;

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(props, ref) {
  const { href, ...other } = props;

  return <MuiLink ref={ref} component={NextLink} href={href} {...other} />;
});

AppLink.displayName = "AppLink";

export default AppLink;
