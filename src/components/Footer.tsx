"use client";
import {
  LanguageContext,
  LanguageContextProps,
} from "@portfolio/contexts/LanguageContext";
import FooterEnUs from "./en-us/Footer";
import FooterPtBr from "./pt-br/Footer";

import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  return language === "pt-br" ? <FooterPtBr /> : <FooterEnUs />;
};

export default Footer;
