"use client";
import {
  LanguageContext,
  LanguageContextProps,
} from "@portfolio/contexts/LanguageContext";
import NotFoundEnUs from "./en-us/NotFound";
import NotFoundPtBr from "./pt-br/NotFound";

import { useContext } from "react";

const NotFound = () => {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  return language === "pt-br" ? <NotFoundPtBr /> : <NotFoundEnUs />;
};

export default NotFound;
