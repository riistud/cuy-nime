interface AnimesList {
  data: { animes: Anime[]; pagination: Pagination };
  success: boolean;
}
interface Anime {
  image: string;
  slug: string;
  status: string;
  title: string;
  type: string;
}
interface Pagination {
  prevPage?: string;
  nextPage?: string;
  currentPage?: string;
  pageNumbers?: PageNumbers[];
}
interface PageNumbers {
  teks?: string;
  params?: string;
  page?: string;
}

import AnimeCard from "./AnimeCard";

export default async function AnimeList({ data }: { data: AnimesList }) {
  const animes: Anime[] = await data.data.animes;
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
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
