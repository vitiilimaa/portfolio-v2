import { GeneralContainer } from "@portfolio/components/Containers";
import ResumeAboutMe from "@portfolio/components/en-us/ResumeAboutMe";
import ProjectsSection from "@portfolio/components/en-us/ProjectsSection";
import ContactSection from "@portfolio/components/en-us/ContactSection";

const Home = () => {
  return (
    <GeneralContainer as="main">
      <ResumeAboutMe />
      <ProjectsSection />
      <ContactSection />
    </GeneralContainer>
  );
};

export default Home;
