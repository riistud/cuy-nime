import Link from "next/link";
import React from "react";

export default function InternalErrorClient() {
  return (
    <section className=" h-screen w-full flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl text-red-500 font-bold">Opps</h1>
      <h3 className="text-2xl font-semibold">Please try again later</h3>
      <Link
        href={"/"}
        className="my-4 text-base py-2 px-6 bg-amber-500 rounded-lg font-semibold cursor-pointer"
      >
        Back
      </Link>
    </section>
  );
}
