import Header from "@portfolio/components/Header";
import Footer from "@portfolio/components/Footer";
import AppProvider from "@portfolio/components/AppProvider";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import "react-multi-carousel/lib/styles.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { lang?: string };
}): Promise<Metadata> {
  const language = searchParams?.lang || "pt-br";

  return {
    title:
      language === "pt-br"
        ? "Desenvolvedor Front-End - Vitor Batista"
        : "Front-End Developer - Vitor Batista",
    description:
      language === "pt-br"
        ? "Desenvolvedor com experiência, com objetivo em transformar ideias que fazem a diferença em linhas de código, criando soluções que impactam e melhoram a vida das pessoas."
        : "Developer with experience, aiming to transform ideas that make a difference into lines of code, creating solutions that impact and improve people's lives.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable}`}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
