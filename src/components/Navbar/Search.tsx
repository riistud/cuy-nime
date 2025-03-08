"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Search() {
  return (
    <form
      className="gap-2 flex items-center relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="px-3 py-1 rounded-md bg-white outline-none text-slate-800 pe-12 w-full"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="p-1 rounded-full bg-white text-slate-800 font-semibold cursor-pointer absolute right-2 top-0 bottom-0 flex items-center h-full"
      >
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
}
