import Navbar from "@/components/Navbar";
import { SiteHeader } from "@/components/site-header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="px-8 py-8">
      <SiteHeader />
      {children}
    </div>
  );
}
