import AnimeList from "@/components/AnimeList";
import SubTitle from "@/components/SubTitle";
import { getAnimeSearch } from "@/services";

export default async function Search({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  const { keyword } = await params;
  const results = await getAnimeSearch(keyword);
  return (
    <section className="w-full container mx-auto flex flex-col gap-3 px-5 pt-20 md:pt-16 font-sans">
      <h1 className="font-bold text-2xl">Hasil</h1>
      {results.data.animes.length > 0 ? (
        <AnimeList data={results} />
      ) : (
        <h1 className="font-semibold text-gray-400 w-full">
          No results `{keyword}`
        </h1>
      )}
    </section>
  );
}
