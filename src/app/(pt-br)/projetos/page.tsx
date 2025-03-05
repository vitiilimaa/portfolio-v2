import { METADATA } from "@portfolio/constants/pt-br/metadata";
import Projects from "./_components/Projects";

import { Metadata } from "next";

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}
