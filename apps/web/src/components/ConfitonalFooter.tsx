// components/ConditionalNavbar.tsx
"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const noNavRoutes = ["/exam"]; // Define routes where navbar should not be displayed

  return !noNavRoutes.includes(pathname) ? <Header /> : null;
};

export default ConditionalFooter;
