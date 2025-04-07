// import { Metadata } from "next";
import { getAnimePlay } from "@/services";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await getAnimePlay(slug);
  console.log(data);
  return (
    <section className=" min-h-screen container mx-auto pt-16 px-5">
      <h1>Play Anime {slug}</h1>
    </section>
  );
}
