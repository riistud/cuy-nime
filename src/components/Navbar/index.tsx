import Search from "./Search";

export default function Navbar() {
  return (
    <header className="w-full bg-amber-500  py-3 fixed top-0 z-50">
      <nav className="container mx-auto px-5 flex items-start md:items-center justify-between flex-col md:flex-row w-full">
        <h2 className="font-bold text-white text-2xl">CUYNIMEX</h2>
        <Search />
      </nav>
    </header>
  );
}
