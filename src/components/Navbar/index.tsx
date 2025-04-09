import Link from "next/link";
import Search from "./Search";
import AuthActionBtn from "./AuthActionBtn";

export default function Navbar() {
  return (
    <>
      {/* // for md ++  */}
      <section className=" w-full h-14 bg-[var(--accent)] text-[var(--dark)] fixed z-50 md:block hidden font-sans">
        <nav className="h-full container mx-auto px-5 flex items-center justify-between">
          <Link href={"/"}>
            <b className="font-extrabold text-xl ">KUYNIME</b>
          </Link>
          <Search />
          <AuthActionBtn />
          {/* <button onClick={() => signIn("github")}>Sign In with GitHub</button> // sign in langsung  */}
        </nav>
      </section>

      {/* // for hp  */}
      <section className=" w-full pt-1 pb-3 bg-[var(--accent)] text-[var(--dark)] fixed z-50 md:hidden block font-sans">
        <nav className="h-full container mx-auto px-5 flex flex-col items-start justify-center">
          <div className="flex justify-between items-center w-full">
            <Link href={"/"}>
              <b className="font-extrabold text-xl">KUYNIME</b>
            </Link>
            <AuthActionBtn />
          </div>
          <Search />
        </nav>
      </section>
    </>
  );
}
