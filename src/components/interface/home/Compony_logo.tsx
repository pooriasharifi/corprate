"use client"
import LogoLoop from "@/components/LogoLoop";
import { LOGO_COMPONY } from "@/config/constants";

export default function ComponysLogoComp() {
  return  <LogoLoop
        scaleOnHover
        fadeOut
        fadeOutColor="#010725"
        logoHeight={20}
        speed={40}
        logos={LOGO_COMPONY}
        ariaLabel="Technology partners"
    />
}