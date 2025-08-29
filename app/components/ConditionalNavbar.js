"use client";
import Navbar from "./Navbar";
import NavbarCustomer from "@/app/components/NavbarCustomer";
import NavbarMinimal from "./Navbar-minimal";
import { usePathname } from "next/navigation";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) {
    return <NavbarMinimal />;
  }
  if (pathname.startsWith("/customer")) {
    return <NavbarCustomer />;
  }
  return <Navbar />;
}
