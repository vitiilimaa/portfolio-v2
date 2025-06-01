import AppProvider from "@portfolio/components/AppProvider";

import { Montserrat } from "next/font/google";

import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${montserrat.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Desenvolvedor Front-End - Vitor Batista",
    description:
      "Desenvolvedor com experiência, com objetivo em transformar ideias que fazem a diferença em linhas de código, criando soluções que impactam e melhoram a vida das pessoas.",
  };
}
