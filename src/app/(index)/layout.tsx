import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="font-sans">{children}</section>
      <Footer />
    </>
  );
}
