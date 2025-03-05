import { translatedRoutes } from "@portfolio/constants/routes";

const getTranslatedRoute = (
  currentPath: string,
  targetLanguage: string
): string | null => {
  const sourceLanguage = translatedRoutes.find(({ routes }) =>
    routes.includes(currentPath)
  );
  if (!sourceLanguage) return null;

  const targetRoutes = translatedRoutes.find(
    ({ language }) => language === targetLanguage
  );
  if (!targetRoutes) return null;

  const index = sourceLanguage.routes.indexOf(currentPath);
  return targetRoutes.routes[index] || null;
};

export default getTranslatedRoute;