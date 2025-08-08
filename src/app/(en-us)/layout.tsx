import Header from "@portfolio/components/Header";
import Footer from "@portfolio/components/Footer";

import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Software Developer - Vitor Batista",
    description:
      "Developer with experience, aiming to transform ideas that make a difference into lines of code, creating solutions that impact and improve people's lives.",
  };
}
