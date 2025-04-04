interface Props {
  image: string;
  title: string;
  status: string;
  type: string;
  slug: string;
}
import Link from "next/link";

export default function AnimeCard({ image, title, status, type, slug }: Props) {
  return (
    <div className="columns-1 bg-[var(--secondary)] rounded-lg overflow-hidden hover:scale-105 transition-all ease-in-out duration-200 font-sans">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" h-52 md:h-72 group overflow-hidden relative"
      >
        <Link href={"/anime/" + slug}>
          <span className=" absolute p-1 rounded-lg bg-red-600 text-white top-3 right-3 text-xs">
            {type}
          </span>
          <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-all ease-in-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-20"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="p-2">
        <h2 className="line-clamp-1 font-semibold">{title}</h2>
        <p
          className={`${
            status.toLocaleLowerCase() == "ongoing"
              ? "text-sky-500"
              : "text-green-500"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
