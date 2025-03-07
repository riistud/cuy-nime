import AnimeList from "@/components/AnimeList";
import SubTitle from "@/components/SubTitle";
import { getAnimeOngoing } from "@/services";

export default async function Home() {
  const animes = await getAnimeOngoing();

  return (
    <section className="w-full container mx-auto flex flex-col gap-3 px-5">
      <SubTitle></SubTitle>
      <AnimeList data={animes} />
    </section>
  );
}
