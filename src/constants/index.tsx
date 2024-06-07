import {
  Home,
  Library,
  Search,
  Mail,
  Shuffle,
  Disc2,
  Disc3,
  Disc,
} from "lucide-react";
//users
import user1 from "/images/users/user-1.jpg";
import user2 from "/images/users/user-2.jpg";
import user3 from "/images/users/user-3.jpg";
import user4 from "/images/users/user-4.jpg";
import user5 from "/images/users/user-5.jpg";
import user6 from "/images/users/user-6.jpg";
import user7 from "/images/users/user-7.jpg";
//company-logos
import company1 from "/images/companies/company-1.png";
import company2 from "/images/companies/company-2.png";
import company3 from "/images/companies/company-3.png";
import company4 from "/images/companies/company-4.png";
import company5 from "/images/companies/company-5.png";
//features icons
import chat from "/images/features-section/chat.svg";
import alarm from "/images/features-section/alarm-clock.svg";
import cloud from "/images/features-section/cloud.svg";
import underline from "/images/features-section/fun-underline.svg";
import coffee from "/images/features-section/coffee.svg";
import rocket from "/images/features-section/rocket.svg";
import { Message } from "../components/design/roadmap-design";
// Roadmap images
import image1 from "/images/roadmap-section/image-1.png";
import image2 from "/images/roadmap-section/image-2.png";
import image3 from "/images/roadmap-section/image-3.png";
import image4 from "/images/roadmap-section/image-4.png";
import { ConfettiCustomShapes } from "../components/confetti";


export const HERO_ICONS = [
  <Home className="w-6 h-6" />,
  <Library className="w-6 h-6" />,
  <Search className="w-6 h-6" />,
  <Mail className="w-6 h-6" />,
];

// Hero Users Example
export const USERS = [user1, user2, user3, user4, user5, user6, user7];

// Hero Section Company Logos

export const COMPANY_LOGOS = [company1, company2, company3, company4, company5];
export const COMPANY_NAMES = [
  "Code Nexa",
  "Nova Bytes",
  "Tech Wrap",
  "Code Vortex",
  "Tech Horizon",
];

// Features (Benefits) Section

export const FEATURES = [
  {
    id: "0",
    title: "Query Zone",
    text: "Enables users to promptly discover answers, eliminating the need for extensive research across multiple platforms.",
    icon: chat,
  },
  {
    id: "1",
    title: "Elevate Daily",
    text: "Through natural language processing, the app comprehends user queries and offers precise, relevant solutions.",
    icon: alarm,
  },
  {
    id: "2",
    title: "Connect Everywhere",
    text: "Easily reach the AI chatbot from any location, on any device, ensuring convenience and accessibility for all users.",
    icon: cloud,
  },
  {
    id: "3",
    title: "Swift Response",
    text: "Experience lightning-fast responses with our AI feature, ensuring instant solutions to your inquiries.",
    icon: underline,
  },
  {
    id: "4",
    title: "Task Automation",
    text: "Automate repetitive tasks and processes with our AI chatbot, saving time and increasing efficiency in your workflows.",
    icon: coffee,
  },
  {
    id: "5",
    title: "24/7 Availability",
    text: "Access our AI chatbot anytime, anywhere, ensuring round-the-clock support and assistance for your queries.",
    icon: rocket,
  },
];

// Code Support Features

export const CODE_FEATURES = [
  {
    id: "0",
    text: "No steup required. Seamlessly integrate Nexus into your platform without the need for configuration.",
  },
  {
    id: "1",
    text: "Out-of-the-box Support. Nexus provides extensive language support across various programming languages.",
  },
  {
    id: "2",
    text: "Cloud sync. Nexus ensures data consistency and accessibility across multiple devices.",
  },
];

// Code Support Icons
export const SLUGS = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

// Graphic Support Features

export const GRAPHIC_FEATURES = [
  "Image Generation",
  "Image Enhancement",
  "Smooth Integration",
];

// Graphic Support Icons

export const GRAPHIC_ICONS = [
  <Shuffle className="w-6 h-6" />,
  <Disc className="w-6 h-6" />,
  <Disc2 className="w-6 h-6" />,
  <Disc3 className="w-6 h-6" />,
  <Library className="w-6 h-6" />,
];

// Pricing

export const OFFERS = [
  {
    id: "0",
    title: "Basic",
    description: "AI virtual assistant, personalized advice",
    price: "0",
    features: [
      "An intelligent chatbot capable of comprehending your questions",
      "Customized suggestions tailored to your likes and interests",
      "Free access to explore the app and all its functionalities",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Enhanced AI agent, premium support, insights dashboard",
    price: "9.99",
    features: [
      "A cutting-edge AI chatbot designed to handle detailed inquiries",
      "A performance dashboard to monitor your interactions",
      "Dedicated support for fast troubleshooting",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Custom-built AI chatbot, advanced data analysis, dedicated account manager",
    price: null,
    features: [
      "Connect with CRM, ERP, and other business tools to streamline workflows.",
      "Designed to handle high volumes of queries and interactions with consistent performance",
      "Implements stringent security measures and complies with industry standards to protect sensitive data",
    ],
  },
];

//  Roadmap Section

export const ROADMAP_ITEMS = [
  {
    id: "0",
    title: "Automated Workflow Management",
    description:
      "Nexus task automation will streamline your daily activities, with intelligent scheduling and reminders optimizing your workflow based on habitual patterns and preferences.",
    date: "April, 2024",
    status: "done",
    imageUrl: image1,
    colorful: true,
    extraJSX: <Message className="left-20 sm:left-[2rem]" text="Try new feature" date="Most Recent"/>,
  },
  {
    id: "1",
    title: "Integration with IoT Devices",
    description:
      "We are working on seamless connectivity with smart home devices, allowing for real-time data analytics from IoT sensors and enabling remote control and monitoring capabilities. This integration will bring the power of AI to your smart home, enhancing convenience and efficiency.",
    date: "Coming Soon",
    status: "in progress",
    imageUrl: image2,
    colorful: false,
    extraJSX: <Message className="right-20 sm:right-[2rem]" text="Adding New Feature" date="Coming Soon"/>,
  },
  {
    id: "2",
    title: "Machine Learning Model Updates",
    description:
      "We continuously train our AI models with new data to improve accuracy and performance. Customizable models based on user feedback will allow for a more personalized and responsive AI experience.",
    date: "Last Updated on June, 2024",
    status: "done",
    imageUrl: image3,
    colorful: true,
    extraJSX: null,
  },
  {
    id: "2",
    title: "Energy Efficiency Optimization",
    description:
      "Nexus will analyze energy consumption to provide recommendations for reducing usage. Integration with smart grids and renewable energy sources will promote sustainability and cost savings.",
    date: "December, 2024",
    status: "in progress",
    imageUrl: image4,
    colorful: false,
    extraJSX: <ConfettiCustomShapes/>,
  },
];
