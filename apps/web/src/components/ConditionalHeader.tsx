// components/ConditionalNavbar.tsx
"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

const ConditionalHeader = () => {
  const pathname = usePathname();
  const noNavRoutes = ["/auth/login", "/auth/register" , "/", "auth/forgot-passsword"]; // Define routes where navbar should not be displayed

  return !noNavRoutes.includes(pathname) ? <Header /> : null;
};

export default ConditionalHeader;
