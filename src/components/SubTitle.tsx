import Link from "next/link";

export default function SubTitle({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2  mt-5 font-sans">
      <h1 className="font-extrabold text-2xl flex gap-1 items-center font-sans">
        {children}
        {title}
      </h1>
      <Link
        href={"/"}
        className="text-white text-base bg-amber-500 px-3 py-1 rounded-md hover:bg-amber-600 transition-all ease-in-out duration-200 font-semibold"
      >
        Show All
      </Link>
    </div>
  );
}
