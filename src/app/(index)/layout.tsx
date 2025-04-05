import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="font-sans">{children}</section>
    </>
  );
}
