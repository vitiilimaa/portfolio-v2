import { translatedRoutes } from "@portfolio/constants/routes";
import getTranslatedRoute from "@portfolio/utils/getTranslatedRoute";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "@portfolio/types/Languages";

const useRouteCorrection = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Languages | "">("");

  const currentPathname = usePathname();
  const sourcePath = currentPathname.split("/", 2).join("/");

  const router = useRouter();

  useEffect(() => {
    if (!currentLanguage) return;

    const currentTranslatedRoutes = translatedRoutes.find(
      ({ language }) => language === currentLanguage
    );

    if (
      !currentTranslatedRoutes ||
      currentTranslatedRoutes.routes.includes(sourcePath)
    ) {
      return;
    }

    const correctedRoute = getTranslatedRoute(sourcePath, currentLanguage);

    if (correctedRoute) {
      router.replace(correctedRoute);
    }
  }, [sourcePath, router, currentLanguage]);

  return { currentLanguage, setCurrentLanguage };
};

export { useRouteCorrection, getTranslatedRoute };
