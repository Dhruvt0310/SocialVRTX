"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, Phone, Mail } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Our Work",
    link: "/brands",
    icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Navigation() {
  return <FloatingNav navItems={navItems} />;
}