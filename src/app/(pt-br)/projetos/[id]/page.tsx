import { METADATA } from "@portfolio/constants/pt-br/metadata";
import Project from "./_components/Project";

import { Metadata } from "next";

const ProjectPage = () => {
  return <Project />;
};

export default ProjectPage;

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}
