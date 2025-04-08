import { AnimeDetailTypes, Category, VideoServer, VideoType } from "@/_types";
import MainContainer from "@/components/util/MainContainer";
import VideoPlayer from "@/components/VideoPlayer";
import { getAnimeDetails, getAnimePlay } from "@/services";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ episode: string; slug: string }>;
}) {
  const { episode } = await params;
  const { slug } = await params;

  const { data }: { data: VideoType } = await getAnimePlay(episode);
  const animeDetail: { data: AnimeDetailTypes } = await getAnimeDetails(slug);

  const decodeServer = data.servers.map((item: VideoServer) => {
    const server_title = item.server_title;
    const decoded = atob(item.server_src);
    const match = decoded.match(/src=["']([^"']+)["']/i); // cari src
    const server_src = match ? match[1] : ""; // ambil linknya
    return { server_title, server_src };
  });

  console.log(animeDetail.data.image);
  return (
    <MainContainer>
      <div className="flex flex-wrap w-full mb-5">
        {/* video episode player  */}
        <section className=" w-full md:w-8/12 flex flex-col">
          <div className="w-full py-3 px-5 bg-secondary shadow-lg rounded-lg">
            <h1 className="font-extrabold text-lg md:text-xl text-accent">
              {data.episode_title}
            </h1>
            <h1 className="font-semibold text-xs md:text-sm text-foreground/50">
              {data.episode_year}
            </h1>
          </div>
          <VideoPlayer
            src_player_default={data.src_player_default}
            listServer={decodeServer}
          />
        </section>
        {/* detail anime  */}
        <section className="w-full md:w-4/12 md:ps-5">
          <div className="w-full bg-secondary p-5 rounded-lg shadow-lg">
            <div className=" w-6/12 rounded-lg mx-auto mb-5 drop-shadow-lg overflow-hidden border-4 border-secondary">
              <img
                src={animeDetail.data.image}
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="line-clamp-1 w-full text-center  text-xl md:text-2xl font-bold">
                {animeDetail.data.title}
              </h1>
              <div className="w-full flex items-center justify-between gap-5 my-5 font-semibold">
                <span className="border border-accent py-1 rounded-md w-1/2 text-center">
                  {animeDetail.data.status}
                </span>
                <span className="border border-accent py-1 rounded-md w-1/2 text-center">
                  {animeDetail.data.type}
                </span>
              </div>
              <ul className="list-disc list-inside ">
                <li>{animeDetail.data.studio}</li>
                <li>{animeDetail.data.posted_by}</li>
                <li>{animeDetail.data.durasi}</li>
                <li>{animeDetail.data.season}</li>
                <li>{animeDetail.data.created_date}</li>
                <li>{animeDetail.data.studio}</li>
              </ul>
              <div className=" flex gap-2 w-full flex-wrap my-3">
                {animeDetail.data.category.map(
                  (item: Category, index: number) => (
                    <span
                      key={`${index}+${item.category_link}`}
                      className="border border-accent bg-accent text-dark px-5 py-1 rounded-md text-xs"
                    >
                      {item.categpry_name}
                    </span>
                  )
                )}
              </div>
              <p className="text-sm text-slate-500 text-start">
                {animeDetail.data.subTitle}
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainContainer>
  );
}
