import { OnebitcodeLogo, UdemyLogo } from "@portfolio/assets";

const onebitcodeIconStyle = { width: 32, height: 32 };
const udemyIconStyle = { width: 30, height: 30 };

const coursesData = [
  {
    courseId: 0,
    courseLogo: OnebitcodeLogo,
    courseName: "Fullstack JavaScript Training",
    companyName: "OneBitCode",
    file: "formacao_fullstack_js.pdf",
    logoStyle: onebitcodeIconStyle,
  },
  {
    courseId: 1,
    courseLogo: UdemyLogo,
    courseName: "Algorithms and Programming Logic - The COMPLETE Course",
    companyName: "Nelio Alves - Udemy",
    file: "algoritmos_e_logica_de_programacao_udemy.pdf",
    logoStyle: udemyIconStyle,
  },
  {
    courseId: 2,
    courseLogo: UdemyLogo,
    courseName: "Basic Delphi Course",
    companyName: "Tiago de Almeida Marchi - Udemy",
    file: "curso_basico_delphi_udemy.pdf",
    logoStyle: udemyIconStyle,
  },
];

export default coursesData;
