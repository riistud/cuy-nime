import React, { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-bold text-2xl md:text-3xl w-full text-center ">
      {children}
    </h1>
  );
}
