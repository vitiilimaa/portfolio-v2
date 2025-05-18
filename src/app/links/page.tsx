import Links from "@portfolio/app/links/_components/Links";
import { Metadata } from "next";
import { METADATA } from "@portfolio/constants/metadata";

const LinksPage = () => {
  return <Links />;
};

export default LinksPage;

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}
