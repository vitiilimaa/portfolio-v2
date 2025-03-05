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
} from "@portfolio/assets";

const projectsData = [
  {
    id: 0,
    projectName: "BloodHunts Gaming",
    projectResumeDescription:
      "Website developed for the e-sports team BloodHunts Gaming.",
    projectDescription: `Website developed for the e-sports team BloodHunts Gaming. Built to be responsive and interactive, the site features a modern and functional interface. The platform includes features such as 3D carousels and expandable image galleries, as well as sections about the team's history, important announcements, staff, and the option to sign up for the newsletter. The site offers dynamic functionalities such as language switching and displaying Instagram content. User interactions are tracked through analytics.`,
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
      "Prototyped and developed website for the massage therapist Maurício Scaranto.",
    projectDescription: `Prototyped and developed website for massage therapist Maurício Scaranto, with a modern, responsive, and interactive design. The platform features strategic call-to-action buttons and sections dedicated to presenting Maurício, the services offered, the courses he teaches, and a contact form allowing potential clients to reach out directly by email.`,
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
    featured: false,
    repositoryUrl:
      "https://github.com/vitiilimaa/mauricio-scaranto-massoterapeuta",
  },
  {
    id: 2,
    projectName: "GameViewer",
    projectResumeDescription:
      "Personal project developed to showcase the best games of all time.",
    projectDescription:
      "Personal project developed to showcase the best games of all time, with the goal of implementing a carousel without using external libraries, including the drag-and-drop functionality so that the admin user can reorder the display of games in each category. Additionally, the admin can add, remove, and edit games, modify their descriptions, as well as create, delete, and rename categories. To simulate the API, I used the json-server library, which allows creating a mock admin user and enabling login and logout on the platform.",
    projectImages: [GameViewer, GameViewer2, GameViewer3],
    category: "Personal",
    technologies: ["React", "React Router DOM", "Bootstrap", "Axios", "Vite"],
    featured: false,
    pageUrl: "https://game-viewer-three.vercel.app",
    repositoryUrl: "https://github.com/vitiilimaa/gameViewer",
  },
  {
    id: 3,
    projectName: "Inventory Manager",
    projectResumeDescription:
      "Personal project developed to enhance inventory management.",
    projectDescription:
      "Personal project developed to enhance inventory management, with the goal of working with data stored in localStorage. In the Inventory Manager, the user is presented with a dashboard that shows information about item diversity, total inventory, recent items, and low-stock items. The items screen displays a complete list of all items registered in the system. The user can add, edit, or remove items, and the information is preserved even after closing and reopening the browser. However, if the user clears the browser data, the information stored in localStorage will be lost.",
    projectImages: [GestorEstoque, GestorEstoque2],
    category: "Personal",
    technologies: ["React", "React Router DOM", "Vite", "localStorage"],
    featured: false,
    pageUrl: "https://gestao-de-estoque-three.vercel.app",
    repositoryUrl: "https://github.com/vitiilimaa/gestao-de-estoque",
  },
];

export default projectsData;
