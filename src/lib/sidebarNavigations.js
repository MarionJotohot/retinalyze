import { BiSolidDashboard } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";

// sidebar navigation items for admin role
export const adminNavItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: BiSolidDashboard,
  },
  {
    label: "Add Patient",
    path: "/admin/add",
    icon: MdGroupAdd,
  },
  {
    label: "Add Doctor",
    path: "/admin/add-doctor",
    icon: MdGroupAdd,
  },
];

// sidebar navigation items for doctor role
export const doctorsNavItems = [
  {
    label: "Dashboard",
    path: "/doctor/dashboard",
    icon: BiSolidDashboard,
  },
  {
    label: "Add Patient",
    path: "/doctor/add",
    icon: MdGroupAdd,
  },
  {
    label: "Patient List",
    path: "/doctor/patients",
    icon: FaUserInjured,
  },
  {
    label: "Profile",
    path: "/doctor/profile",
    icon: FaUserDoctor,
  },
];

// sidebar navigation items for patient role
export const patientsNavItems = [
  {
    label: "Results",
    path: "/results",
    icon: BiSolidDashboard,
  },
];
