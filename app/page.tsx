import { Box } from "@mui/material";

import ContactCTA from "@/src/components/sections/ContactCTA";
import FAQ from "@/src/components/sections/FAQ";
import Hero from "@/src/components/sections/Hero";
import MainProduct from "@/src/components/sections/MainProduct";
import Offerings from "@/src/components/sections/Offerings";
import Process from "@/src/components/sections/Process";
import Services from "@/src/components/sections/Services";
import CaseStudies from "@/src/components/sections/CaseStudies";

export default function Home() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Hero />
      <CaseStudies />
      <Offerings />
      <Services />
      <MainProduct />
      <Process />
      <FAQ />
      <ContactCTA />
    </Box>
  );
}
