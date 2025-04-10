"use client";
interface Props {
  image: string;
  title: string;
  status: string;
  type: string;
  slug: string;
}
import { Play } from "@phosphor-icons/react";
import Link from "next/link";

export default function AnimeCard({ image, title, status, type, slug }: Props) {
  const typeLowerCase = type.toLowerCase();
  return (
    <div className="columns-1 bg-[var(--secondary)] rounded-lg overflow-hidden font-sans group shadow-md hover:shadow-lg">
      {/* HEADER  */}
      <div className=" h-52 xl:h-72  overflow-hidden relative">
        <Link href={"/anime/" + slug}>
          <img
            src={image}
            alt=""
            className="w-full group-hover:scale-110 transition-all ease-in-out duration-200 object-cover object-center"
          />
          {/* TYPE TV OR MOVIE OR ONA */}
          <span
            className={`absolute p-1 rounded-lg text-white top-2 right-2 text-xs ${
              typeLowerCase == "tv" ? "bg-sky-600" : "bg-red-600"
            }`}
          >
            {type}
          </span>
          {/* ICON PLAY*/}
          <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-all ease-in-out duration-200 text-white">
            <Play size={80} weight="fill" />
          </div>
        </Link>
      </div>
      {/* END HEADER  */}

      {/* BODY  */}
      <div className="p-2">
        <h2 className="line-clamp-1 font-semibold group-hover:text-[var(--accent)]">
          {title}
        </h2>
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
      {/* END BODY  */}
    </div>
  );
}
