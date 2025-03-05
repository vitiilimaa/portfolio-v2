import { METADATA } from "@portfolio/constants/en-us/metadata";
import Project from "./_components/Project";

import { Metadata } from "next";

const ProjectPage = () => {
  return <Project />;
};

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}

export default ProjectPage;
