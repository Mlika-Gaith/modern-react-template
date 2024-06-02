import { Home, Library, Search, Mail } from 'lucide-react';
//users
import user1 from "/images/users/user-1.jpg";
import user2 from "/images/users/user-2.jpg";
import user3 from "/images/users/user-3.jpg";
import user4 from "/images/users/user-4.jpg";
import user5 from "/images/users/user-5.jpg";
import user6  from "/images/users/user-6.jpg";
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

export const HERO_ICONS = [
    <Home className='w-6 h-6'/>,
    <Library className='w-6 h-6'/>,
    <Search className='w-6 h-6'/>,
    <Mail className='w-6 h-6'/>
]

// Hero Users Example
export const USERS = [
    user1, user2, user3, user4, user5, user6, user7
]

// Hero Section Company Logos

export const COMPANY_LOGOS = [company1, company2, company3, company4, company5]
export const COMPANY_NAMES = ["Code Nexa", "Nova Bytes", "Tech Wrap", "Code Vortex", "Tech Horizon"]

// Features (Benefits) Section

export const FEATURES = [
    {
        id: "0",
        title: "Query Zone",
        text: "Enables users to promptly discover answers, eliminating the need for extensive research across multiple platforms.",
        icon: chat,
        light: false,
    },
    {
        id: "1",
        title: "Elevate Daily",
        text: "Through natural language processing, the app comprehends user queries and offers precise, relevant solutions.",
        icon: alarm,
        light: true,
    },
    {
        id: "2",
        title: "Connect Everywhere",
        text: "Easily reach the AI chatbot from any location, on any device, ensuring convenience and accessibility for all users.",
        icon: cloud,
        light: false,
    },
    {
        id: "3",
        title: "Swift Response",
        text: "Experience lightning-fast responses with our AI feature, ensuring instant solutions to your inquiries.",
        icon: underline,
        light: true,
    },
    {
        id: "4",
        title: "Task Automation",
        text: "Automate repetitive tasks and processes with our AI chatbot, saving time and increasing efficiency in your workflows.",
        icon: coffee,
        light: false,
    },
    {
        id: "5",
        title: "24/7 Availability",
        text: "Access our AI chatbot anytime, anywhere, ensuring round-the-clock support and assistance for your queries.",
        icon: rocket,
        light: true,
    }
]