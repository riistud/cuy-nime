// import { Metadata } from "next";
import { VideoServer, VideoType } from "@/_types";
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
    const title_server = item.server_title;
    const decoded = atob(item.server_src);
    const match = decoded.match(/src=["']([^"']+)["']/i); // cari src
    const server_src = match ? match[1] : ""; // ambil linknya
    return { title_server, server_src };
  });

  console.log(decodeServer);
  return (
    <section className=" min-h-screen container mx-auto pt-16 px-5">
      <div className=" w-full md:w-10/12 xl:w-8/12 flex flex-col">
        <div className="w-full py-3 px-5 bg-secondary shadow-lg rounded-lg">
          <h1 className="font-extrabold text-lg md:text-xl text-accent">
            {data.episode_title}
          </h1>
          <h1 className="font-semibold text-xs md:text-sm text-foreground/50">
            {data.episode_year}
          </h1>
        </div>
        <iframe
          src={data.src_player_default}
          className="w-full aspect-video shadow-lg rounded-lg my-5"
        ></iframe>
        <div className="w-full p-3 border-2 border-accent rounded-lg shadow-lg">
          <h1 className="font-bold text-lg md:text-xl mb-2">Server List</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {data.servers.map((server: VideoServer, index: number) => (
              <button
                key={`${index}+${server.server_title}`}
                className="bg-accent font-semibold rounded-md py-1 text-dark"
              >
                {server.server_title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
