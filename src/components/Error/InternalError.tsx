import React from "react";

export default function InternalError({ reset }: { reset: () => void }) {
  return (
    <section className=" h-screen w-full flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl text-red-500 font-bold">500</h1>
      <h3 className="text-2xl font-semibold">Internal Server Error</h3>
      <button
        onClick={() => reset()}
        className="my-4 text-base py-2 px-6 bg-amber-500 rounded-lg font-semibold cursor-pointer"
      >
        Try Again
      </button>
    </section>
  );
}
