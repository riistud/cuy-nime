import Link from "next/link";

export default function SubTitle({
  title,
  children,
  href = "/",
}: {
  title: string;
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2 font-sans">
      <h1 className="font-bold text-xl flex gap-1 items-center font-sans">
        {children}
        {title}
      </h1>
      <Link
        href={href}
        className="text-white text-sm bg-amber-500 px-3 py-1 rounded-md hover:bg-amber-600 transition-all ease-in-out duration-200 font-semibold"
      >
        Show All
      </Link>
    </div>
  );
}
