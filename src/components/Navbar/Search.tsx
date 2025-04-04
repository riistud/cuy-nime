"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${keyword}`);
  }
  return (
    <form
      className="gap-2 flex items-center relative w-full md:w-auto"
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        type="text"
        className="px-3 py-1 rounded-md bg-white outline-none text-slate-800 pe-12 w-full"
        placeholder="Search..."
        onChange={(e) => setKeyword(e.target.value)}
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
