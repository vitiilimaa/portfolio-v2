import { METADATA } from "@portfolio/constants/pt-br/metadata";
import Home from "./_components/Home";

import { Metadata } from "next";

const HomePage = () => {
  return <Home />;
};

export default HomePage;

export async function generateMetadata(): Promise<Metadata> {
  return METADATA;
}
