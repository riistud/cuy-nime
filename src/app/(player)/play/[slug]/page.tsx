// import { Metadata } from "next";
import { VideoServer, VideoType } from "@/_types";
import VideoPlayer from "@/components/VideoPlayer";
import { getAnimePlay } from "@/services";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data }: { data: VideoType } = await getAnimePlay(slug);

  const decodeServer = data.servers.map((item: VideoServer, index: number) => {
    const server_title = item.server_title;
    const decoded = atob(item.server_src);
    const match = decoded.match(/src=["']([^"']+)["']/i); // cari src
    const server_src = match ? match[1] : ""; // ambil linknya
    return { server_title, server_src };
  });
  return (
    <section className=" min-h-screen container mx-auto pt-16 px-5">
      <div className=" w-full md:w-7/12 flex flex-col">
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
      </div>
    </section>
  );
}
