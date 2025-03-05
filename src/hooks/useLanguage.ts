import { LANGUAGE_STORAGE_KEY } from "@portfolio/constants/languageStorageKey";
import { Languages } from "@portfolio/types/Languages";
import { useRouteCorrection } from "./useRouteCorrection";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

const getStoredOrDefaultLanguage = (): Languages => {
  if (typeof window === "undefined") return "pt-br";

  const storedLanguage = localStorage.getItem(
    LANGUAGE_STORAGE_KEY
  ) as Languages | null;

  if (storedLanguage) return storedLanguage;

  const defaultLanguage = navigator.language.toLowerCase() as Languages;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, defaultLanguage);

  return defaultLanguage;
};

const useLanguage = () => {
  const [language, setLanguage] = useState<Languages>("pt-br");

  const router = useRouter();
  const pathname = usePathname();

  const { setCurrentLanguage } = useRouteCorrection();

  const handleChangeLanguage = (newLanguage: Languages) => {
    setLanguage(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    const currentLanguage = getStoredOrDefaultLanguage();
    setLanguage(currentLanguage);
    setCurrentLanguage(currentLanguage);
  }, [pathname, router, setCurrentLanguage]);

  return { language, setLanguage, handleChangeLanguage };
};

export default useLanguage;
