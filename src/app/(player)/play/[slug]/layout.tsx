import React, { ReactNode } from "react";

export default function PlayerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="w-full h-14 bg-accent fixed text-dark">
        <nav className="container mx-auto flex justify-between items-center h-full px-5 ">
          <b>Back</b>
        </nav>
      </section>
      <div className="font-sans">{children}</div>
    </>
  );
}
