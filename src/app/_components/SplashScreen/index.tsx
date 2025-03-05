"use client";
import LoadingScreen from "@portfolio/components/LoadingScreen";
import { LOADING_TIME } from "@portfolio/constants/loadingTime";
import {
  LanguageContext,
  LanguageContextProps,
} from "@portfolio/contexts/LanguageContext";
import getInitialRoute from "@portfolio/utils/getInitialRoute";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const SplashScreen = () => {
  const router = useRouter();
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  useEffect(() => {
    const initialRoute = getInitialRoute(language);

    setTimeout(() => router.push(initialRoute), LOADING_TIME);
  }, [language, router]);

  return <LoadingScreen />;
};

export default SplashScreen;
