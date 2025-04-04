import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      {/* // for md ++  */}
      <section className=" w-full h-14 bg-amber-500 fixed z-50 md:block hidden font-sans">
        <nav className="h-full container mx-auto px-5 flex items-center justify-between">
          <Link href={"/"}>
            <b className="font-extrabold text-xl text-white">CUYY NIMEK</b>
          </Link>
          <Search />
        </nav>
      </section>

      {/* // for hp  */}
      <section className=" w-full pt-1 pb-3 bg-amber-500 fixed z-50 md:hidden block font-sans">
        <nav className="h-full container mx-auto px-5 flex flex-col items-start justify-center">
          <Link href={"/"}>
            <b className="font-extrabold text-xl text-white">CUYY NIMEK</b>
          </Link>
          <Search />
        </nav>
      </section>
    </>
  );
}
