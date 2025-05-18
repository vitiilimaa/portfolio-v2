import AppProvider from "@portfolio/components/AppProvider";

import { Montserrat } from "next/font/google";

import "./globals.css";
import "react-multi-carousel/lib/styles.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
