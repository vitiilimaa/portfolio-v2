"use client";
import {
  LanguageContext,
  LanguageContextProps,
} from "@portfolio/contexts/LanguageContext";
import HeaderEnUs from "./en-us/Header";
import HeaderPtBr from "./pt-br/Header";

import { useContext } from "react";

const Header = () => {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  return language === "pt-br" ? <HeaderPtBr /> : <HeaderEnUs />;
};

export default Header;
