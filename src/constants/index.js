import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  AbkLogo,
  AllyLogo,
  CiscoLogo,
  RolfsonLogo,
  WorkleteLogo,
  ArchLogo,
  HomeDLogo,
  react,
  next,
  net,
  node,
  wordpress,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "1",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "2",
    title: "Bio",
    url: "#bio",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "Services",
    url: "#services",
    onlyMobile: false,
  },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  HomeDLogo,
  AbkLogo,
  AllyLogo,
  ArchLogo,
  WorkleteLogo,
  CiscoLogo,
  RolfsonLogo,
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "13 Years Experience",
    text: "Mark has earned 12 years of valuable web, software, mobile, cloud, and e-commerce development experience.",
    date: "Feb 2025",
    status: "earned",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "BS in Computer Science",
    text: "Mark is currently working on a Bachelor's of Science in Computer Science to supplement his self-taught knowledge and experience.",
    date: "May 2027",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Previous Degrees",
    text: "Mark has earned an MBA and a BLS in Asian Studies and International Trade, both from the University of Memphis.",
    date: "2011/2009",
    status: "earned",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Certifications ",
    text: "Mark has earned several certifications, including AI Developer, AWS Cloud Practitioner, and JavaScript Professional.",
    date: "Feb 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabTextFront =
  "Mark has several years of experience using HTML, CSS, and JavaScript, as well as JavaScript frameworks and libraries (such as React) to develop pixel-perfect, functional, customer-pleasing applications.";

export const collabTextFull =
  "Mark has been providing the backbone of applications by writing code to create and optimize API responses (with Node or C#) and managing databases for years. ";

export const collabTextProgramming =
  "Take advantage of Mark&apos;s expertise in additional programming languages such as Java, C, and Python.";

export const collabTextNeed =
  "Your team needs a developer with a wide skillset, years of education, and adaptabililty.";
export const collabContent = [
  {
    id: "0",
    title: "Front End Development",
    text: collabTextFront,
  },
  {
    id: "1",
    title: "Full Stack Development",
    text: collabTextFull,
  },
  {
    id: "2",
    title: "Software Development",
    text: collabTextProgramming,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Wordpress",
    icon: wordpress,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Node.js",
    icon: node,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: ".NET",
    icon: net,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Next.js",
    icon: next,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "React",
    icon: react,
    width: 38,
    height: 32,
  },
];

export const services = [
  {
    id: "0",
    title: "Front-end Development",
    description:
      "Designing and building the part of a website that users see and interact with",
    price: null,
    features: [
      "Building elements of a website, such as buttons and forms, using components",
      "Ensuring responsive layouts are functional and fast on most devices",
      "Integrating APIs for data submission, connecting to databases, and more",
    ],
  },
  {
    id: "1",
    title: "Full stack development",
    description: "Building both the front end and back end of an application",
    price: null,
    features: [
      "Design user interface and user interactions",
      "Implement the structure, behavior, and animation of the application",
      "Work with databases to store and retrieve data",
    ],
  },
  {
    id: "2",
    title: "AI Development",
    description:
      "Creating artificial intelligence systems that can learn and perform tasks",
    price: null,
    features: [
      "Integrating an AI chatbot that can understand your queries",
      "Personalized user recommendations based on data",
      "Use programming languages, machine learning, and data science to build intelligent systems",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "The Home Depot",
    text: "Worked to build the new Tiny Homes application. Created responsive and user-friendly interfaces using Next.js, Storybook, and Material UI. Wrote code to connect to APIs and display relevant data.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Ally Financial",
    text: "Worked to add UI, UX, and accessibility features to the Bucket Savings, Debit Card, and Checking Account programs. Developed and tested React ensuring adherence to modern accessibility standards.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Activision Blizzard King",
    text: "Built the Rewards Platform for Candy Crush players to create profiles, check points and other rewards, and customize appearances. Optimized appearance and performance with code splitting and Material UI.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Worklete",
    text: "Built, launched, and optimized a React-Native mobile application to enable worker training and injury reporting. Implemented several React-Native libraries to add features, including Google Maps and video streaming",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Archetape",
    text: "Developed and launched React and React-Native applications for Real Estate SAAS product. Enabled document sharing, messaging, Google Maps integration.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Rolfson Oil",
    text: "Built React and React-Native applications for Ticket sharing and driver tracking. Enabled real-time communication, mobile printing, functional dashboards, and more.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
