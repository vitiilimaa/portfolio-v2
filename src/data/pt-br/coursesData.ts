import { OnebitcodeLogo, UdemyLogo } from "@portfolio/assets";

const onebitcodeIconStyle = { width: 32, height: 32 };

const coursesData = [
  {
    courseId: 0,
    courseLogo: OnebitcodeLogo,
    courseName: "Formação Fullstack JavaScript",
    companyName: "OneBitCode",
    file: "formacao_fullstack_js.pdf",
    logoStyle: onebitcodeIconStyle,
  },
  {
    courseId: 1,
    courseLogo: UdemyLogo,
    courseName: "Algoritmos e Lógica de Programação - O Curso COMPLETO",
    companyName: "Nelio Alves - Udemy",
    file: "algoritmos_e_logica_de_programacao_udemy.pdf",
    logoStyle: { width: 30, height: 30 },
  },
  {
    courseId: 2,
    courseLogo: UdemyLogo,
    courseName: "Curso básico de Delphi",
    companyName: "Tiago de Almeida Marchi - Udemy",
    file: "curso_basico_delphi_udemy.pdf",
    logoStyle: { width: 30, height: 30 },
  },
];

export default coursesData;
