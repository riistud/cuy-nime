import React from "react";
import AnimeCard from "../AnimeCard";

interface Anime {
  image: string;
  slug: string;
  title: string;
  type: string;
  status: string;
}

export default function AnimeList({ animes }: { animes: Anime[] }) {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 font-sans mb-5">
      {animes?.map((anime: Anime, index: number) => (
        <AnimeCard
          key={index}
          title={anime.title}
          image={anime.image}
          status={anime.status}
          type={anime.type}
          slug={anime.slug}
        />
      ))}
    </section>
  );
}
