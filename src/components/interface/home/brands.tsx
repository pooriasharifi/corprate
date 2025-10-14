"use client";
import LogoLoop from "@/components/LogoLoop";
import { COMPANY_LOGO } from "@/config/constants";

export default function CompanyLogoComp() {
  return (
    <LogoLoop
      logos={COMPANY_LOGO}
      speed={50}
      direction="left"
      logoHeight={20}
      gap={40}
      pauseOnHover
      scaleOnHover
      fadeOut
      fadeOutColor="#010D50"
      ariaLabel="Technology partners"
    />
  );
}
