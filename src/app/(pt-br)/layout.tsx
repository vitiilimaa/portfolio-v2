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
    title: "Desenvolvedor de Software - Vitor Batista",
    description:
      "Desenvolvedor com experiência, com objetivo em transformar ideias que fazem a diferença em linhas de código, criando soluções que impactam e melhoram a vida das pessoas.",
  };
}
