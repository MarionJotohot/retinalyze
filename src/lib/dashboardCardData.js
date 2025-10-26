import { LuUsers } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

// Dashboard card data
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