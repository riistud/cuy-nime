export default function SubTitle({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <h1 className="font-bold text-2xl flex gap-1 items-center mt-5">
      {children}
      {title}
    </h1>
  );
}
