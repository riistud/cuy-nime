import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen items-center justify-center flex flex-col font-sans">
      <h1 className="text-4xl text-red-500 font-bold">404</h1>
      <h3 className="text-2xl font-semibold">Not Found</h3>
      <Link href={"/"}>
        <button className="my-4 text-base py-2 px-6 bg-amber-500 rounded-lg font-semibold cursor-pointer">
          Back Home
        </button>
      </Link>
    </section>
  );
}
