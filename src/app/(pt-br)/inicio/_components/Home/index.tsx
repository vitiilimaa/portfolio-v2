import { GeneralContainer } from "@portfolio/components/Containers";
import ResumeAboutMe from "@portfolio/components/pt-br/ResumeAboutMe";
import ProjectsSection from "@portfolio/components/pt-br/ProjectsSection";
import ContactSection from "@portfolio/components/pt-br/ContactSection";

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
