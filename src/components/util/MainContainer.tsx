import React, { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <section className="w-full container mx-auto flex flex-col gap-3 px-5 pt-24 md:pt-18">
      {children}
    </section>
  );
}
