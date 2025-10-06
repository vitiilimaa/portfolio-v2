import { TechliseLogo, AvmbLogo } from "@portfolio/assets";

const careerData = [
  {
    careerId: 0,
    companyLogo: AvmbLogo,
    position: "Web Development Intern",
    companyName: "AVMB - Soluções em TI",
    workPeriod: "Mar 2022 - Dec 2023",
    jobDescription: `- Significantly reduced the learning time for new interns by creating and implementing a training methodology with concise video lessons and practical exercises, quickly enabling them to use the company's process modeling tool.
- Trained and mentored new interns, ensuring they quickly gained operational autonomy and effectively contributed to portal maintenance and menu creation.
- Contributed to simplifying access to web platform functionalities by assisting in the development of a fast and intuitive mobile app, expanding user reach.
- Gained practical knowledge in various technologies including Delphi 7, HTML, CSS, JavaScript, jQuery, Pure CSS, React, React Native, Lua, PostgreSQL, and DB2, building a solid foundation for a programming career.
- Achieved the highest internship level in less than a year, overcoming the initial challenge of delivering results without prior programming experience, demonstrating rapid growth and commitment.`,
    logoStyle: { width: 32, height: 32 },
  },
  {
    careerId: 1,
    companyLogo: TechliseLogo,
    position: "Front-End Development Intern",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Jan 2024 - Aug 2024",
    jobDescription: `- Developed interfaces for a medical platform, accelerating workflow with forms, schedules, point systems, and CRUD listings using Next.js and Chakra UI; implemented a dynamic Color Picker that updates the theme in real time.
- Established efficient state management with Redux and API integration, ensuring data synchronization and consistent design between web and mobile.
- Automated user creation and login flows with Puppeteer, reducing time spent on repetitive tasks.`,
  },
  {
    careerId: 2,
    companyLogo: TechliseLogo,
    position: "Front-End Developer Trainee",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Aug 2024 - Feb 2025",
    jobDescription: `- Simplified financial management for pig farms by creating responsive screens with Next.js and Chakra UI, including optimized forms, CRUD listings, and absolutely positioned images, making workflows more agile and intuitive.
- Optimized task organization by developing an interactive Kanban board with dndkit, consolidating data into a single view and ensuring full adherence to the Figma prototype.
- Improved data analysis with simple and expandable tables, ensuring visual consistency and facilitating data interpretation.
- Enabled real-time communication between devices by creating a calling app using WebRTC and Socket, ensuring stability and low latency.
- Enhanced user experience by integrating the OneSignal API for push notifications, allowing immediate alerts to users receiving calls.`,
  },
  {
    careerId: 3,
    companyLogo: TechliseLogo,
    position: "Junior Web Developer",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Mar 2025 - Aug 2025",
    jobDescription: `- Significantly reduced time and errors in DataMatrix label printing by developing a complete web system integrating backend with Node.js, Sequelize, and Redis for high performance and reliability.
- Ensured data scalability and integrity by modeling the database and applying automated migrations with Sequelize, facilitating continuous updates and maintenance.
- Increased speed of access to critical information by implementing caching with Redis, improving system performance and user experience.
- Delivered a responsive interface aligned with Figma designs using Next.js and Chakra UI, providing an intuitive and consistent experience that reduces adaptation time.`,
  },
];

export default careerData;
