"use client";

import { VideoServer } from "@/_types";
import React, { useState } from "react";

export default function VideoPlayer({
  src_player_default,
  listServer,
}: {
  src_player_default: string;
  listServer: VideoServer[];
}) {
  const [serverSrc, setServerSrc] = useState(src_player_default);
  const [loadingVideo, setLoadingVideo] = useState(false);
  function handleChangeServer(server_src: string) {
    setServerSrc(server_src);
    setLoadingVideo(true);
    setTimeout(() => {
      setLoadingVideo(false);
    }, 3000);
  }
  return (
    <div>
      {loadingVideo ? (
        <div className="w-full aspect-video shadow-lg my-5 rounded-lg animate-pulse bg-slate-500"></div>
      ) : (
        <iframe
          src={serverSrc}
          className="w-full aspect-video shadow-lg rounded-lg my-5"
        ></iframe>
      )}
      <div className="w-full p-3 border-2 border-accent rounded-lg shadow-lg">
        <h1 className="font-bold text-lg md:text-xl mb-2">Server List</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {listServer.map((server: VideoServer, index: number) => (
            <button
              key={`${index}+${server.server_title}`}
              onClick={() => handleChangeServer(server.server_src)}
              className="bg-accent font-semibold rounded-md py-1 text-dark active:bg-slate-500"
            >
              {server.server_title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
