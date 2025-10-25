import { LuUsers } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

export const cards = [
  {
    id: 1,
    title: "Total Patients",
    icon: LuUsers,
    count: 58,
    detail: "+2 from last week",
  },
  {
    id: 2,
    title: "High Risk Cases",
    icon: IoWarningOutline,
    count: 12,
    detail: "Require immediate attention",
  },
  {
    id: 3,
    title: "This Week",
    icon: IoCalendarClearOutline,
    count: 23,
    detail: "Analysis completed",
  },
  {
    id: 4,
    title: "Success Rate",
    icon: FaArrowTrendUp,
    count: "94.2%",
    detail: "Accurate predictions",
  },
];

export const patients = [
  {
    id: 1,
    image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    patient: "Marc Dominic Gerasmio Jr.",
    age: 25,
    lastCheckup: "May 8, 2025",
    riskLevel: "High",
  },
  {
    id: 2,
    image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    patient: "Marion Jotohot",
    age: 24,
    lastCheckup: "May 10, 2025",
    riskLevel: "Moderate",
  },
  {
    id: 3,
    image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    patient: "John Elro Karl Estoque",
    age: 23,
    lastCheckup: "May 12, 2025",
    riskLevel: "Low",
  },
  {
    id: 4,
    image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    patient: "Krizia Marie Dapal",
    age: "22",
    riskLevel: "Low",
    lastCheckup: "May 11, 2025",
  },
  {
    id: 5,
    image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    patient: "Joralyn Cantero",
    age: "21",
    riskLevel: "High",
    lastCheckup: "May 10, 2025",
  },
  {
    id: 6,
    image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    patient: "Vevencio Gupana Jr.",
    age: "25",
    riskLevel: "Moderate",
    lastCheckup: "May 9, 2025",
  },
];
