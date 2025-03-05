import { METADATA } from "@portfolio/constants/en-us/metadata";
import Projects from "./_components/Projects";

import { Metadata } from "next";

const ProjectsPage = () => {
  return <Projects />;
};

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}

export default ProjectsPage;
