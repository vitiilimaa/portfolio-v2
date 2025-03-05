const translatedRoutes = [
  {
    language: "pt-br",
    routes: ["/inicio", "/sobre-mim", "/projetos", "/contato"],
  },
  {
    language: "en-us",
    routes: ["/home", "/about-me", "/projects", "/contact"],
  },
];

const allRoutes = translatedRoutes.flatMap(
  (translatedRoute) => translatedRoute.routes ?? []
);

export { translatedRoutes, allRoutes };
