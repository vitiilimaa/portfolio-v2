import { Languages } from "@portfolio/types/Languages";

const getInitialRoute = (currentLanguage: Languages) => {
  switch (currentLanguage) {
    case "en-us":
      return "/home";
    case "pt-br":
      return "/inicio";
    default:
      return "/inicio";
  }
};

export default getInitialRoute;
