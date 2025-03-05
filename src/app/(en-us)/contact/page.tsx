import { METADATA } from "@portfolio/constants/en-us/metadata";
import Contact from "./_components/Contact";

import { Metadata } from "next";

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}
