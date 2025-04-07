import MainContainer from "@/components/util/MainContainer";
import { getAnimeDetails } from "@/services";
import React from "react";
import { AnimeDetailTypes, Category, Episode } from "@/_types";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data }: { data: AnimeDetailTypes } = await getAnimeDetails(slug);
  return (
    <MainContainer>
      {/* detail anime  */}
      <section className="flex flex-wrap w-full ">
        <div className=" w-6/12  md:w-4/12 xl:w-3/12 rounded-lg mx-auto md:mx-0 mb-5 md:mb-0 drop-shadow-lg overflow-hidden border-4 border-secondary">
          <img src={data.image} alt="" className=" w-full h-auto" />
        </div>
        <div className="w-full md:w-8/12 xl:h-9/12 md:ps-5 flex flex-col">
          <h1 className="line-clamp-1 w-full text-center md:text-start text-xl md:text-2xl font-bold">
            {data.title}
          </h1>
          <div className="w-full flex items-center justify-between md:justify-start gap-5 my-5 font-semibold">
            <span className="border border-accent md:px-5 py-1 rounded-md w-1/2 md:w-auto text-center">
              {data.status}
            </span>
            <span className="border border-accent md:px-5 py-1 rounded-md w-1/2 md:w-auto text-center">
              {data.type}
            </span>
          </div>
          <ul className="list-disc list-inside ">
            <li>{data.studio}</li>
            <li>{data.posted_by}</li>
            <li>{data.durasi}</li>
            <li>{data.season}</li>
            <li>{data.created_date}</li>
            <li>{data.studio}</li>
          </ul>
          <div className=" flex gap-2 w-full flex-wrap my-3">
            {data.category.map((item: Category, index: number) => (
              <span
                key={`${index}+${item.category_link}`}
                className="border border-accent bg-accent text-dark px-5 py-1 rounded-md text-xs"
              >
                {item.categpry_name}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-500 text-start">{data.subTitle}</p>
        </div>
      </section>
      {/* list episode  */}
      <section className="w-full flex flex-col border-2 border-accent rounded-md my-5 overflow-hidden shadow-lg">
        <span className="font-bold text-base my-3 px-5">EPISODE LIST</span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full h-50 md:h-100 xl:h-50 overflow-y-auto pb-4 px-5">
          {data.episodes.map((episode: Episode, index: number) => (
            <Link
              key={`${index}+${episode.episode_no}`}
              href={"/play/" + episode.episode_slug}
            >
              <div className="bg-accent p-2 columns-1 h-fit rounded-md flex items-center gap-2 text-dark hover:scale-102 hover:drop-shadow-md transition-all ease-in-out">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    className="fill-current"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z"></path>
                  </svg>
                </div>
                <div className=" flex flex-col">
                  <span className="text-sm line-clamp-1 text-dark font-extrabold">
                    Episode {episode.episode_no}
                  </span>
                  <span className="text-sm text-dark line-clamp-1">
                    {episode.episode_title}
                  </span>
                  <span className="text-xs text-dark line-clamp-1">
                    {episode.episode_date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainContainer>
  );
}
