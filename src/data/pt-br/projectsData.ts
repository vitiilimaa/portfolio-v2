import {
  BloodhuntsGaming,
  BloodhuntsGaming2,
  BloodhuntsGaming3,
  BloodhuntsGaming4,
  BloodHuntsGamingLogo,
  DavidTestimonial,
  GameViewer,
  GameViewer2,
  GameViewer3,
  GestorEstoque,
  GestorEstoque2,
  MauricioMassageTherapist,
  MauricioMassageTherapist2,
  MauricioMassageTherapist3,
  MauricioTestimonial,
} from "@portfolio/assets";

const projectsData = [
  {
    id: 0,
    projectName: "BloodHunts Gaming",
    projectResumeDescription:
      "Site desenvolvido para a equipe de e-sports BloodHunts Gaming.",
    projectDescription: `Site desenvolvido para a equipe de e-sports BloodHunts Gaming. Construído para ser responsivo e interativo, o site conta com uma interface moderna e funcional. A plataforma inclui recursos como carrosseis 3D e de imagens expansíveis, além de seções sobre a história da equipe, anúncios importantes, staff e a opção de cadastrar o email na newsletter. O site oferece funcionalidades dinâmicas como troca de idioma e exibição de conteúdo do Instagram. As interações dos usuários são monitoradas por meio de analytics.`,
    projectImageFeatured: BloodHuntsGamingLogo,
    projectImages: [
      BloodhuntsGaming,
      BloodhuntsGaming2,
      BloodhuntsGaming3,
      BloodhuntsGaming4,
    ],
    category: "Freelance",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "i18next",
      "Motion",
      "Node.js",
      "Vercel Analytics",
    ],
    customerTestimonial: DavidTestimonial,
    featured: true,
    pageUrl: "https://www.bloodhuntsgaming.com.br/",
  },
  {
    id: 1,
    projectName: "Maurício Scaranto",
    projectResumeDescription:
      "Site prototipado e desenvolvido para o massoterapeuta Maurício Scaranto.",
    projectDescription: `Site prototipado e desenvolvido para o massoterapeuta Maurício Scaranto, com um design moderno, responsivo e interativo. A plataforma conta com botões call-to-action estratégicos e seções dedicadas à apresentação do Maurício, aos serviços oferecidos, aos cursos que leciona e a um formulário de contato, permitindo que possíveis clientes entrem em contato diretamente por e-mail.`,
    projectImages: [
      MauricioMassageTherapist,
      MauricioMassageTherapist2,
      MauricioMassageTherapist3,
    ],
    category: "Freelance",
    technologies: [
      "React",
      "TypeScript",
      "React Hook Form",
      "PrimeReact",
      "PrimeFlex",
    ],
    customerTestimonial: MauricioTestimonial,
    featured: false,
    repositoryUrl:
      "https://github.com/vitiilimaa/mauricio-scaranto-massoterapeuta",
  },
  {
    id: 2,
    projectName: "GameViewer",
    projectResumeDescription:
      "Projeto pessoal desenvolvido para a visualização dos melhores jogos de todos os tempos.",
    projectDescription:
      "Projeto pessoal desenvolvido para a visualização dos melhores jogos de todos os tempos, com o objetivo de implementar um carrossel sem o uso de bibliotecas, incluindo a funcionalidade de arrastar e soltar para que o usuário administrador possa reordenar a exibição dos jogos em cada categoria. Além disso, o administrador pode adicionar, remover e editar jogos, modificar suas descrições, bem como criar, excluir e renomear categorias. Para simular a API, utilizei a biblioteca json-server, permitindo a criação de um usuário administrador mockado, além de possibilitar login e logout na plataforma.",
    projectImages: [GameViewer, GameViewer2, GameViewer3],
    category: "Pessoal",
    technologies: ["React", "React Router DOM", "Bootstrap", "Axios", "Vite"],
    featured: false,
    pageUrl: "https://game-viewer-three.vercel.app",
    repositoryUrl: "https://github.com/vitiilimaa/gameViewer",
  },
  {
    id: 3,
    projectName: "Gestor de Estoque",
    projectResumeDescription:
      "Projeto pessoal desenvolvido para aprimorar a gestão de estoque.",
    projectDescription:
      "Projeto pessoal desenvolvido para aprimorar a gestão de estoque, com o objetivo de trabalhar com dados no localStorage. No Gestor de Estoque, o usuário conta com um painel inicial que exibe informações sobre a diversidade de itens, inventário total, itens recentes e itens em baixa. A tela de itens apresenta uma listagem completa de todos os itens cadastrados no sistema. O usuário pode cadastrar, editar ou remover itens, e as informações são preservadas mesmo ao fechar e reabrir o navegador. No entanto, se o usuário limpar os dados do navegador, as informações armazenadas no localStorage serão perdidas.",
    projectImages: [GestorEstoque, GestorEstoque2],
    category: "Pessoal",
    technologies: ["React", "React Router DOM", "Vite", "localStorage"],
    featured: false,
    pageUrl: "https://gestao-de-estoque-three.vercel.app",
    repositoryUrl: "https://github.com/vitiilimaa/gestao-de-estoque",
  },
];

export default projectsData;
