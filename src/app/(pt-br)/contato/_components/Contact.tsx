"use client";
import { GeneralContainer } from "@portfolio/components/Containers";
import ContactSection from "@portfolio/components/pt-br/ContactSection";
import useParticles from "@portfolio/hooks/useParticles";

import Particles from "@tsparticles/react";

const Contact = () => {
  const { options } = useParticles();

  return (
    <GeneralContainer>
      <ContactSection />
      <Particles id="tsparticles" options={options} />
    </GeneralContainer>
  );
};

export default Contact;
