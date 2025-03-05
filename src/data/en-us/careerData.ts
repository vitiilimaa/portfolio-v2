import { TechliseLogo, AvmbLogo } from "@portfolio/assets";

const careerData = [
  {
    careerId: 0,
    companyLogo: TechliseLogo,
    position: "Front-End Developer Trainee",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Aug 2024 - present",
    jobDescription: `I developed screens for a financial management platform for pig farming, using Next.js and Chakra UI, implementing forms, images with absolute positioning, listings with CRUD functionalities, among others. I worked on creating the Kanban board component using dndkit, as well as other components such as simple and expandable tables, always following the Figma prototype.

I also developed a calling app using the WebRTC protocol and Socket to allow communication between two devices. For sending notifications about who is receiving the call, I integrated the OneSignal API, making this feature possible.`,
  },
  {
    careerId: 1,
    companyLogo: TechliseLogo,
    position: "Front-End Development Intern",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Jan 2024 - Aug 2024",
    jobDescription: `I developed screens for a doctors' platform using Next.js and Chakra UI, implementing forms, schedules, a points system, listings with CRUD functionalities, among others. I implemented dynamic color changes of the theme, allowing the user to select or drag a color in the Color Picker to update the system in real time.
    
To manage the global state of the application, I used Redux and also integrated it with the API for data manipulation. Additionally, I applied some of these features and designs to the mobile app of the system, ensuring a consistent experience on both platforms.

During development, to quickly create a user, I used Puppeteer to automate the login process, user creation, and later login with the created account.`,
  },
  {
    careerId: 2,
    companyLogo: AvmbLogo,
    position: "Web Development Intern",
    companyName: "AVMB - Soluções em TI",
    workPeriod: "Mar 2022 - Dec 2023",
    jobDescription: `I worked on maintaining portals and creating menus using the company's process modeling tool. I was responsible for training new interns and developing a training methodology that included short and objective video lessons, along with exercises that encouraged reflection and research on solutions, teaching them how to use the modeling tool and significantly reducing the learning time.

Additionally, I helped in the development of a mobile app that aimed to bring, in a simplified and agile way, the main features of an already existing web platform.

It was in this environment that I learned my first technologies: Delphi 7, HTML, CSS, JavaScript, jQuery, Pure CSS, React, React Native, Lua, PostgreSQL, and DB2.

This is where my journey as a programmer began, even without prior knowledge of programming, but with a big challenge: delivering results in less than 3 months. After 1 year, I reached the maximum internship level.`,
    logoStyle: { width: 32, height: 32 },
  },
];

export default careerData;
