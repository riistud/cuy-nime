import AnimeList from "@/components/AnimeList";
import MainContainer from "@/components/util/MainContainer";
import { getAnimeSearch } from "@/services";

export default async function Search({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  const { keyword } = await params;
  const decodeKeyword = decodeURI(keyword);
  const results = await getAnimeSearch(keyword);
  return (
    <MainContainer>
      <h1 className="font-bold text-xl  flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          className="fill-current"
          viewBox="0 0 256 256"
        >
          <path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"></path>
        </svg>{" "}
        Results
      </h1>

      {results.data.animes.length > 0 ? (
        <AnimeList data={results} />
      ) : (
        <h1 className="font-semibold text-gray-400 w-full">
          No results `{decodeKeyword}`
        </h1>
      )}
    </MainContainer>
  );
}
