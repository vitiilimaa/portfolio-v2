"use client";
import {
  LanguageContext,
  LanguageContextProps,
} from "@portfolio/contexts/LanguageContext";
import HomeEnUs from "./en-us/Home";
import HomePtBr from "./pt-br/Home";

import { useContext } from "react";

const Home = () => {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  return language === "pt-br" ? <HomePtBr /> : <HomeEnUs />;
};

export default Home;
