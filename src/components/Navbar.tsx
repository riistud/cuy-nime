"use client";
export default function Navbar() {
  return (
    <header className="w-full bg-amber-500  py-3 sticky top-0 z-50">
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <h2 className="font-bold text-white text-2xl">CUYNIMEX</h2>
        <form
          className="gap-2 flex items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="px-3 py-1 rounded-md bg-white outline-none text-slate-800"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="p-1 rounded-full bg-white text-slate-800 font-semibold cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
      </nav>
    </header>
  );
}
