import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen items-center justify-center flex flex-col font-sans">
      <h1 className="text-6xl text-red-500 font-extrabold">404</h1>
      <h3 className="text-2xl font-semibold text-[var(--accent)]">NOT FOUND</h3>
      <Link
        href={"/"}
        className="my-4 text-base underline rounded-lg font-semibold cursor-pointer hover:text-[var(--accent)] "
      >
        Back to home
      </Link>
    </section>
  );
}
