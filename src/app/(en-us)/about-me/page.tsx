import { METADATA } from "@portfolio/constants/en-us/metadata";
import AboutMe from "./_components/AboutMe";

import { Metadata } from "next";

const AboutMePage = () => {
  return <AboutMe />;
};

export default AboutMePage;

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}
